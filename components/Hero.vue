<template>
  <div
    class="bg-gradient-to-b from-blue-100 to-white pt-12 text-center md:pt-24"
  >
    <p class="text-5xl font-black tracking-tight text-black md:text-9xl">
      Car Dependency in San Francisco
    </p>
    <img ref="hero" src="~/assets/svgs/hero.svg" class="-mt-4 lg:-mt-16" />
  </div>
</template>

<script setup lang="ts">
const hero = ref();

useMotion(hero, {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
});
</script>
