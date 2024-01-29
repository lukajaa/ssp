<template>
  <div>
    <div class="mx-auto p-6 text-center text-xl md:w-11/12">
      <p class="text-2xl font-bold">About this Website</p>
      <p>
        Here, you will find a brief overview of the history of car dependency
        and many resources and interactive visualizations to help you learn more
        about the topic. Scroll down to get started! (Or scroll to the bottom if
        you don't need an introduction)
      </p>
      <p class="mt-4">
        <span class="font-bold">Tip:</span> Hover over
        <PopupCard term="green" /> text to learn more about that topic!
      </p>
    </div>
    <div
      class="mx-auto flex w-full flex-col items-center justify-center py-16 text-center md:w-5/6 lg:py-36"
    >
      <div ref="one">
        <p class="font-bubble text-4xl tracking-tight md:text-7xl">
          Every year,
          <span class="font-bubble text-red-500">more than 30 people</span> die
          from traffic incidents in San Francisco
        </p>
        <div class="h-96">
          <Line :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>
    <div
      class="mx-auto flex w-full flex-col items-center justify-center py-16 text-center md:w-5/6 lg:py-36"
    >
      <p ref="two" class="font-bubble text-4xl tracking-tight md:text-7xl">
        In spite of San Francisco's
        <PopupCard term="Vision Zero" />
        Initiative, traffic deaths reached a
        <span class="font-bubble text-red-500">10-year high</span> in 2022
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs';

const chartData = ref({
  labels: [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ],
  datasets: [
    {
      label: 'Traffic Fatalities',
      borderColor: '#EF4444',
      tension: 0.1,
      data: [31, 31, 32, 20, 23, 29, 30, 27, 39],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

const one = ref();
const two = ref();

const refs = [one, two];

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
        duration: 500,
      },
    },
  });
});
</script>
