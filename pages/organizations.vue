<template>
  <div class="p-2 md:p-12">
    <div class="flex flex-row">
      <div class="flex w-1/2 flex-col items-center justify-center">
        <div>
          <p class="text-8xl font-bold">Local Organizations</p>
          <p class="mt-4 text-lg">
            Scroll to learn more about local organizations that are working to
            promote a less car-dependent future.
          </p>
        </div>
        <img
          src="~/assets/svgs/arrow_8.svg"
          class="mx-auto mt-8 transition duration-300 ease-in-out hover:scale-100"
          @click="scroll()"
        />
      </div>
      <div class="flex w-1/2 flex-col">
        <img src="~/assets/svgs/organizations.svg" alt="Legislation" />
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
