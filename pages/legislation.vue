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
        <div class="flex w-1/4 flex-col">
          <img src="~/assets/svgs/legislation_1.svg" alt="Federal" />
        </div>
        <div class="flex w-3/5 flex-col">
          <p class="mt-4 text-2xl font-semibold">List of Federal Legislation</p>
          <p v-for="n in 10" :key="n" class="mt-4 text-lg">
            {{ n }}. <span class="font-bold">Example Legislation</span>
            <br />
            This is an example of federal legislation that is working to promote
            a less car-dependent future.
          </p>
        </div>
      </div>
    </div>
    <div>
      <p class="text-5xl font-bold">State</p>
    </div>
    <div>
      <p class="text-5xl font-bold">Local</p>
    </div>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
function scroll() {
  document.getElementById('scrollTo')?.scrollIntoView({
    behavior: 'smooth',
  });
}
</script>
