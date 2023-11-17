<template>
  <div class="font-bubble bg-[#f7efde] pt-48 text-center">
    <p class="text-5xl font-black text-black md:text-9xl">
      Car Dependency in San Francisco
    </p>
    <img src="~/assets/svgs/hero.svg" class="-mt-4 lg:-mt-16" />
  </div>
</template>

<script setup lang="ts">
const hero = ref();

const { variant } = useMotion(hero, {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      onComplete: () => {
        variant.value = 'levitate';
      },
    },
  },
  levitate: {
    y: 15,
    transition: {
      duration: 2000,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatType: 'mirror',
    },
  },
});
</script>
