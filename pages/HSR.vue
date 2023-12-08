<template>
  <div class="p-10">
    <p class="mb-2 text-center text-3xl font-bold">
      National High Speed Rail Model Scorer
    </p>
    <p class="text-center">
      Add metro areas to the map and watch the network grow!
    </p>
    <p class="mb-2 font-bold">Select your CSAs:</p>
    <Multiselect
      v-model="selectedCSAs"
      :options="cities"
      class="mb-10 rounded text-center outline outline-offset-2 outline-indigo-500"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      style="z-index: 10000"
    />
    <div class="space-y-2 text-center font-bold">
      <p class="mt-5 font-bold">
        Score: {{ Math.round(networkScore).toLocaleString('en-US') }}
      </p>
      <p class="mt-5 font-bold">Stations: {{ selectedCSAs.length }}</p>
      <p class="mt-5 font-bold">
        Network Length: {{ Math.round(length).toLocaleString('en-US') }} miles
      </p>
      <button
        class="rounded bg-[#12B880] px-4 py-2 text-white hover:bg-[#009660]"
        @click="selectedCSAs = []"
      >
        Clear
      </button>
    </div>

    <div style="height: 500px; width: 100%" class="mt-5">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[39.833333, -98.583333]"
        :use-global-leaflet="false"
        style="background-color: #fff"
        :options="{
          scrollWheelZoom: false,
          maxBounds: bounds,
          maxBoundsViscosity: 1.0,
          minZoom: 3,
        }"
      >
        <LGeoJson :geojson="USMap" :options="geoJsonStyles" />
        <LPolyline
          v-for="edge in spanningTree"
          :key="edge"
          :lat-lngs="[
            [CSAs[edge[0]]['Latitude'], CSAs[edge[0]]['Longitude']],
            [CSAs[edge[1]]['Latitude'], CSAs[edge[1]]['Longitude']],
          ]"
          :options="{ color: '#16a34a', weight: 2 }"
        />
        <LCircleMarker
          v-for="csa in selectedCSAs"
          :key="csa"
          :lat-lng="[CSAs[csa]['Latitude'], CSAs[csa]['Longitude']]"
          :radius="
            CSAs[csa]['Population'] ** 0.5 / 125 > 2
              ? CSAs[csa]['Population'] ** 0.5 / 150
              : 2
          "
          :options="lineOptions"
        >
          <LPopup class="text-center">
            {{ csa }} <br />
            {{ CSAs[csa]['Population'].toLocaleString('en-US') }}
          </LPopup>
        </LCircleMarker>
      </LMap>
    </div>
    <div class="md:px-24">
      <p class="mt-5 text-lg font-black">What is this?</p>
      <p class="indent-8">
        This is an interactive map that creates a hypothetical high speed rail
        network given a list of combined statistical areas. The overall network
        score is calculated using gravity models. The network path is calculated
        using Kruskal's Algorithm to find the minimum spanning tree.
      </p>
      <p class="mt-5 text-lg font-black">How is network score calculated?</p>
      <p class="indent-8">
        A gravity model is created between each city in the network with an
        intial equation of (population_of_CSA_1^0.8 * population_of_CSA_2^0.8) /
        distanceBetween_CSAs. Next, a distance modifier was calculated with an
        optimal distance of 250 miles (400 km) and a minimum of 0.1 for distant
        areas. This multiplier was applied to each of the pairs and the
        resulting scores were summed. Finally, an overall multiplier was applied
        according to Metcalfe's Law. The multiplier follows a sigmoid curve that
        maxes out at around 15 stations.
      </p>
      <p class="indent-8">
        For the gravity equation, the populations of cities are raised to the
        power of 0.8 in order to account for the fact that cities with large
        populations also take up large areas of land, making them less
        efficient. The distance modifier is a number between 0 and 1 that scales
        according to the distance from 250 miles or 400 kilometers. The longest
        distance applicable is 620 miles or 1000 km. The sigmoid function used
        for Metcalfe's law is (- 5) / (1 + e^(2/3 * nodes - 5)) + 10.
      </p>
      <p class="mt-5 text-lg font-black">How is the network path calculated?</p>
      <p class="indent-8">
        The network path is calculated using Kruskal's Algorithm to find the
        minimum spanning tree. The algorithm is given a graph with each CSA as a
        vertex and each edge is weighted by the distance between the two
        connected CSAs. The algorithm then finds the minimum spanning tree by
        adding the lowest weighted edge that does not create a cycle. The
        algorithm is run until all vertices are connected.
      </p>
      <p class="mt-5 text-lg font-black">Problems</p>
      <p class="indent-8">
        Adding too many cities too quickly can break the map due to the problem
        of having to compute a new spanning tree whenever a station is added.
      </p>
      <p class="mt-5 text-lg font-black">Data Source</p>
      <p class="indent-8">
        All data including population, geographic boundaries, and CSA
        centerpoints were retrieved from the
        <a href="https://data.census.gov/" target="_blank"
          >Census Bureau Website</a
        >.
      </p>
    </div>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LGeoJson,
  LCircleMarker,
  LPopup,
  LPolyline,
} from '@vue-leaflet/vue-leaflet';
import USMap from '../assets/data/us.json';
import CSAs from '~/assets/data/CSAs.json';

const cities = Object.keys(CSAs);
const selectedCSAs = ref([]);
const zoom = ref(4);
const length = ref(0);
const bounds = ref([
  [24.396308, -124.848974],
  [49.384358, -66.885444],
]);

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

const geoJsonStyles = {
  fillColor: '#bbf7d0',
  fillOpacity: 1,
  color: '#fff',
  weight: 1,
};

const lineOptions = {
  fillColor: '#22c55e',
  fillOpacity: 0.5,
  color: '#16a34a',
  weight: 1,
};

function kruskal(graph) {
  // Initialize an array to hold the edges of the minimum spanning tree
  const mst = [];

  // Sort the edges by weight in non-decreasing order
  const edges = graph.edges.sort((a, b) => a.weight - b.weight);

  // Initialize a disjoint-set data structure to track which vertices belong to which connected components
  const dsu = new DisjointSetUnion(graph.vertices);

  // Iterate over the edges in non-decreasing order of weight
  for (const edge of edges) {
    const u = edge.source;
    const v = edge.target;

    // If the endpoints of the edge are in different connected components, add the edge to the minimum spanning tree
    if (dsu.find(u) !== dsu.find(v)) {
      mst.push(edge);
      dsu.union(u, v);
    }
  }

  // Return the edges of the minimum spanning tree
  return mst;
}

class DisjointSetUnion {
  constructor(vertices) {
    // Initialize each vertex as its own connected component
    this.parent = {};
    for (const v of vertices) {
      this.parent[v] = v;
    }
  }

  find(x) {
    // If x is not the parent of itself, recursively find the parent of its parent
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    // Find the parents of the connected components containing x and y
    const px = this.find(x);
    const py = this.find(y);

    // If x and y are not already in the same connected component, merge the components
    if (px !== py) {
      this.parent[px] = py;
    }
  }
}

const spanningTree = computed(function () {
  const edges = [];
  const vertices = selectedCSAs.value;

  for (let i = 0; i < vertices.length; i++) {
    const vertex1 = vertices[i];
    const vertex1Data = CSAs[vertex1];
    for (let j = i + 1; j < vertices.length; j++) {
      const vertex2 = vertices[j];
      const vertex2Data = CSAs[vertex2];
      const distance = getDistanceFromLatLonInKm(
        vertex1Data.Latitude,
        vertex1Data.Longitude,
        vertex2Data.Latitude,
        vertex2Data.Longitude,
      );
      edges.push({ source: vertex1, target: vertex2, weight: distance });
    }
  }

  const graph = { vertices, edges };
  const mst = kruskal(graph);
  const spanningTree = mst.map((edge) => [edge.source, edge.target]);

  length.value = mst.reduce((acc, edge) => acc + edge.weight, 0) / 1.6;
  return spanningTree;
});

const networkScore = computed(function () {
  if (selectedCSAs.value.length <= 1) {
    return 0;
  }
  const doneCSAs: string[] = [];
  let score = 0;
  // loop each selected CSA
  for (const csa of selectedCSAs.value) {
    const CSAData = CSAs[csa];
    doneCSAs.push(csa);
    for (const csa2 of selectedCSAs.value) {
      const CSA2Data = CSAs[csa2];
      if (doneCSAs.includes(csa2)) {
        continue;
      }
      const distanceBetween = getDistanceFromLatLonInKm(
        CSAData.Latitude,
        CSAData.Longitude,
        CSA2Data.Latitude,
        CSA2Data.Longitude,
      );

      let modifier = 1;
      let gravity =
        (CSAData.Population ** 0.8 * CSA2Data.Population ** 0.8) /
        distanceBetween ** 2;
      if (distanceBetween <= 400) {
        modifier = distanceBetween / 400;
      } else if (distanceBetween <= 1000) {
        modifier = 1 - distanceBetween / 1000;
      } else {
        modifier = 0;
      }
      gravity = gravity * modifier;
      score += gravity;
    }
  }

  const nodes = selectedCSAs.value.length;
  const multiplier = -5 / (1 + Math.E ** ((2 / 3) * nodes - 5)) + 10;
  return multiplier * score;
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
