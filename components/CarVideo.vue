<template>
  <div class="mx-auto mt-8 overflow-hidden rounded-lg lg:w-5/6">
    <video
      ref="videoPlayer"
      class="video h-full md:-mt-24 md:h-auto md:w-full"
      autoplay
      muted
      loop
      controls
    >
      <source
        src="https://ia800701.us.archive.org/4/items/MarketStreet19064KScan20181016/MarketStreet_4K_to_2K_cropped_higher_contrast.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script setup lang="ts">
const videoPlayer = ref();

onMounted(() => {
  videoPlayer.value.currentTime = 20;
});
</script>
