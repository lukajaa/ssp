<template>
  <LMap
    ref="map"
    :zoom="zoom"
    :center="[37.754691, -122.442433]"
    min-zoom="11"
    :max-bounds="[
      [37.6, -122.6],
      [37.9, -122.25],
    ]"
  >
    <LTileLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      layer-type="base"
      name="OpenStreetMap"
    />
    <LImageOverlay :url="imageOverlayUrl" :bounds="bounds" opacity="0.5" />
  </LMap>
</template>

<script setup lang="ts">
const zoom = ref(12);
const imageOverlayUrl = ref(
  'https://cdn.kqed.org/wp-content/uploads/sites/26/2015/07/SF.jpg',
);
const bounds = ref([
  [37.7, -122.52],
  [37.82, -122.32],
]);
</script>
