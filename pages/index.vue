<template>
  <div>
    <div class="bg-[#f7efde] py-20 text-black">
      <div
        class="container mx-auto flex flex-col flex-wrap items-center px-3 md:flex-row"
      >
        <div
          class="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left"
        >
          <h1 class="my-4 text-7xl font-bold">
            Car Dependency in San Francisco
          </h1>
          <p class="mb-8 text-5xl">
            How can you help make San Francisco safer and more accesible?
          </p>
        </div>
        <div class="w-full py-6 text-center md:w-3/5">
          <img
            ref="hero"
            class="z-50 mx-auto w-full md:w-4/5"
            src="~/assets/svgs/hero.svg"
            :delay="500"
          />
        </div>
      </div>
      <img
        class="mx-auto hidden scale-105 cursor-pointer md:-mt-12 md:block lg:hidden"
        src="~/assets/svgs/arrow.svg"
        @click="scroll"
      />
      <img
        class="mx-auto hidden scale-105 cursor-pointer lg:-mt-24 lg:block"
        src="~/assets/svgs/buffered_arrow.svg"
        @click="scroll"
      />
    </div>
    <div class="p-6">
      <p class="text-center text-2xl">
        Tip: Hover over bolded text to learn more about that topic!
      </p>
    </div>
    <div
      class="mx-auto flex w-full flex-col items-center justify-center py-48 text-center md:w-2/3"
    >
      <p ref="one" class="text-7xl">
        Every year, more than <span class="text-green-600">30 people</span>
        die from traffic deaths in San Francisco
      </p>
      <img ref="two" src="~/assets/images/Capture.png" class="mt-12 w-2/3" />
    </div>
    <div
      class="mx-auto flex w-full flex-col items-center justify-center py-48 text-center md:w-2/3"
    >
      <p ref="three" class="text-7xl">
        In spite of San Francisco's
        <PopupCard term="Vision Zero" />
        Initiative, traffic deaths reached an 10-year time
        <span class="text-red-500">high</span> in 2022
      </p>
    </div>
    <div
      class="mx-auto flex w-full flex-col items-center justify-center py-48 text-center md:w-2/3"
    >
      <p ref="four" class="text-7xl">How did we get here?</p>
      <img ref="five" src="~/assets/svgs/underline_1.svg" />
    </div>
    <Essay />
  </div>
</template>

<script setup lang="ts">
function scroll() {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}

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
        delay: 250,
        duration: 1000,
      },
    },
  });
});

const { variant } = useMotion(hero, {
  initial: {
    opacity: 0,
    y: 100,
    scale: 1.25,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1.25,
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
