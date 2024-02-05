<template>
  <LMap
    ref="map"
    :zoom="zoom"
    :center="[37.754691, -122.442433]"
    min-zoom="10"
    :max-bounds="[
      [37, -123],
      [38, -122],
    ]"
    :use-global-leaflet="false"
  >
    <LTileLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      layer-type="base"
      name="OpenStreetMap"
    />
    <LImageOverlay :url="imageOverlayUrl" :bounds="bounds" opacity="0.625" />
    <LImageOverlay :url="imageOverlayURL2" :bounds="bounds2" opacity="0.625" />
  </LMap>
</template>

<script setup lang="ts">
const zoom = ref(12);
const imageOverlayUrl = ref(
  "https://cdn.kqed.org/wp-content/uploads/sites/26/2015/07/SF.jpg",
);
const imageOverlayURL2 = ref(
  "https://localwiki.org/oakland/redlining/_files/1937-oaklandberkeleyHOLCmap-redlining.jpg",
);
const bounds = ref([
  [37.7, -122.52],
  [37.82, -122.32],
]);
const bounds2 = ref([
  [37.85101, -122.32],
  [37.715995, -122.1],
]);
</script>
