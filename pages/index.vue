<template>
  <div>
    <Hero />
    <IntroFirst />
    <div class="mx-auto flex items-center">
      <UButton size="lg" color="green" class="mx-auto" @click="scroll()"
        >Don't need an overview? Skip right to the action!</UButton
      >
    </div>
    <Intro />
    <Essay />
    <LearnMore ref="scrollTo" />
    <div class="mx-auto mt-6 text-center">
      <p class="font-bubble-real text-3xl text-green-500">or learn more here</p>
      <img
        src="~/assets/svgs/scroll.svg"
        class="mx-auto w-8"
        alt="scroll arrow"
      />
    </div>
    <Resources />
  </div>
</template>

<script setup lang="ts">
const scrollTo = ref();

function scroll() {
  window.scrollTo({
    top: scrollTo.value.$el.offsetTop,
    behavior: 'smooth',
  });
}

useSeoMeta({
  title: 'Car Dependency in San Francisco',
  ogTitle: 'Car Dependency in San Francisco',
  description:
    'Learn about the history of car dependency in San Francisco with a brief overview of the city\'s transportation history complete with maps and graphs and relevant legislation and local organizations.',
  ogDescription:
    'Learn about the history of car dependency in San Francisco with a brief overview of the city\'s transportation history complete with maps and graphs and relevant legislation and local organizations.',
});
</script>
