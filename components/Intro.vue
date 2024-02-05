<template>
  <div>
    <div class="mx-auto p-6 text-center text-2xl md:w-11/12">
      <p class="text-5xl font-bold">About this Website</p>
      <div class="mt-4 flex flex-row">
        <div class="flex w-1/3 flex-col p-2">
          <div class="flex flex-col rounded-lg p-4 ring-4 ring-yellow-400">
            <p class="text-3xl font-bold">Background</p>
            <p class="mt-4">
              Learn about the history of car dependency in San Francisco with a
              brief overview of the city's transportation history complete with
              maps and graphs.
            </p>
          </div>
        </div>
        <div class="flex w-1/3 flex-col p-2">
          <div class="flex flex-col rounded-lg p-4 ring-4 ring-green-400">
            <p class="text-3xl font-bold">Call to Action</p>
            <p class="mt-4">
              Find ways to get involved in the fight for a less car-dependent
              future in San Francisco by joining local organizations and
              learning about current legislation.
            </p>
          </div>
        </div>
        <div class="flex w-1/3 flex-col p-2">
          <div class="flex flex-col rounded-lg p-4 ring-4 ring-blue-400">
            <p class="text-3xl font-bold">Resources</p>
            <p class="mt-4">
              Explore a collection of data visualizations and interactive maps
              that help to illustrate the impact of car dependency in San
              Francisco and around the country.
            </p>
          </div>
        </div>
      </div>
      <p class="mt-4">
        Hover over
        <PopupCard term="green" /> text for extra information!
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
      y: 200,
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
