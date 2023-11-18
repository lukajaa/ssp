<template>
  <div>
    <p class="font-bubble text-center text-7xl font-bold tracking-tight">
      Learn More
    </p>
    <img src="~/assets/svgs/underline_1.svg" class="mx-auto" />
    <div class="mt-12 flex flex-wrap px-8">
      <div
        v-for="n in 4"
        :key="n"
        class="flex w-full flex-col p-2 md:w-1/3 lg:w-1/4 2xl:w-1/5"
      >
        <div class="h-full rounded ring-4 ring-black dark:ring-white">
          <div class="font-bubble p-4">
            <p class="text-3xl font-bold text-green-600">Idea {{ n }}</p>
            <img src="~/assets/svgs/underline_2.svg" class="-mt-1 w-1/3" />
            <p class="text-lg">
              An example call to action for the user to learn more about the
              idea.
            </p>
            <UButton color="green" class="mt-4 font-sans"> Learn More </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
