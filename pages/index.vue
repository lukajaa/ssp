<template>
  <div>
    <div class="font-bubble bg-[#f7efde] pt-48 text-center">
      <p class="text-5xl font-black text-black md:text-9xl">
        Car Dependency in San Francisco
      </p>

      <img src="~/assets/svgs/hero.svg" class="-mt-4 lg:-mt-16" />
    </div>
    <div id="scrollTo" class="font-bubble p-6">
      <p class="text-center text-2xl">
        Tip: Hover over <PopupCard term="green" /> text to learn more about that
        topic!
      </p>
    </div>
    <div
      class="font-bubble mx-auto flex w-full flex-col items-center justify-center py-24 text-center md:w-2/3 lg:py-48"
    >
      <div ref="one">
        <p class="text-7xl">
          Every year, <span class="text-red-500">more than 30 people</span> die
          from traffic deaths in San Francisco
        </p>
        <img src="~/assets/images/Capture.png" class="mt-12 2xl:w-2/3" />
      </div>
    </div>
    <div
      class="font-bubble mx-auto flex w-full flex-col items-center justify-center py-24 text-center md:w-2/3 lg:py-48"
    >
      <p ref="three" class="text-7xl">
        In spite of San Francisco's
        <PopupCard term="Vision Zero" />
        Initiative, traffic deaths reached an
        <span class="text-red-500">10-year high</span> in 2022
      </p>
    </div>
    <div
      class="font-bubble mx-auto flex w-full flex-col items-center justify-center pt-24 text-center md:w-2/3 lg:pt-48"
    >
      <div ref="four">
        <p class="text-7xl">How did we get here?</p>
        <img src="~/assets/svgs/underline_1.svg" />
      </div>
    </div>
    <Essay />
    <!-- <div class="flex flex-col">
      <div class="flex h-96 flex-row">
        <div class="flex w-1/3 flex-col p-4">
          <div class="h-full w-full rounded-lg bg-gray-950 opacity-50"></div>
        </div>
        <div class="flex w-2/3 flex-col p-4">
          <div class="h-full w-full rounded-lg bg-gray-950 opacity-50"></div>
        </div>
      </div>
    </div> -->
    <LearnMore />
  </div>
</template>

<script setup lang="ts">
const hero = ref();
const one = ref();
const two = ref();
const three = ref();
const four = ref();
const five = ref();

const refs = [one, two, three, four, five];

refs.forEach((ref) => {
  useMotion(ref, {
    initial: {
      opacity: 0,
      y: 400,
    },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1000,
      },
    },
  });
});

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
