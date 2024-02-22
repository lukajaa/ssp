<template>
  <div class="p-2 md:p-12">
    <div class="flex flex-row">
      <div class="flex w-1/2 flex-col items-center justify-center">
        <div>
          <p class="text-8xl font-bold">Personal Habits</p>
          <p class="mt-4 text-lg">
            Scroll to learn more about how you can live less car-dependent, even
            if you don't live in a city.
          </p>
        </div>
        <img
          src="~/assets/svgs/arrow_7.svg"
          class="mx-auto transition duration-300 ease-in-out hover:scale-105"
          @click="scroll()"
        />
      </div>
      <div class="flex w-1/2 flex-col">
        <img src="~/assets/svgs/habits.svg" alt="happy people" />
      </div>
    </div>
    <BackButton />
  </div>
</template>

<script setup lang="ts">
function scroll() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}
</script>
