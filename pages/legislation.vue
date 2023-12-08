<template>
  <div class="p-2 md:p-12">
    <div class="flex flex-row">
      <div class="flex w-1/2 flex-col items-center justify-center">
        <div>
          <p class="text-8xl font-bold">Legislation</p>
          <p class="mt-4 text-lg">
            Scroll to learn more about how you can get civically involved to
            promote a less car-dependent future.
          </p>
        </div>
        <img
          src="~/assets/svgs/arrow_5.svg"
          class="mx-auto mt-8 transition duration-300 ease-in-out hover:scale-105"
          @click="scroll()"
        />
      </div>
      <div class="flex w-1/2 flex-col">
        <img src="~/assets/svgs/legislation.svg" alt="Legislation" />
      </div>
    </div>
    <div id="scrollTo">
      <p class="text-5xl font-bold">Federal</p>
      <div class="flex flex-row">
        <div class="flex w-full flex-col">
          <p class="mt-4 text-lg">
            Here is a list of federal legislation that is currently being
            considered by Congress. Click on the link to learn more about the
            bill and how you can get involved.
          </p>
          <div v-for="(bill, n) of legislation" :key="n">
            <p class="mt-4">
              {{ n + 1 }}.
              <span class="text-xl font-bold">{{ bill.name }}</span>
              <br />
              {{ bill.description }}
            </p>
            <a
              :href="bill.url"
              target="_blank"
              class="font-semibold text-blue-400 hover:text-blue-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-5xl font-bold">State</p>
      <p class="mt-4 text-lg">Coming soon</p>
    </div>
    <div>
      <p class="text-5xl font-bold">Local</p>
      <p class="mt-4 text-lg">Coming soon</p>
    </div>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import legislation from '~/assets/data/legislation.json';

function scroll() {
  document.getElementById('scrollTo')?.scrollIntoView({
    behavior: 'smooth',
  });
}
</script>
