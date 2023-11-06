<template>
  <div class="h-screen overflow-hidden">
    <video
      ref="video"
      class="video h-full md:-mt-24 md:h-auto md:w-full"
      autoplay
      controls
    >
      <source
        src="https://ia800701.us.archive.org/4/items/MarketStreet19064KScan20181016/MarketStreet_4K_to_2K_cropped_higher_contrast.mp4"
        type="video/mp4"
      />
    </video>
    <div
      class="absolute right-0 top-0 h-full w-full"
      style="background: rgba(0, 0, 0, 0.25)"
    >
      <div class="flex h-full flex-col items-center justify-center">
        <h1 class="text-center text-5xl font-bold text-white md:text-9xl">
          Title Goes Here
        </h1>
      </div>
    </div>
  </div>
</template>

