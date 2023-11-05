<template>
  <div>
    <p class="text-center text-5xl font-bold tracking-tight">Learn More</p>
    <div class="mt-12 flex flex-wrap px-8">
      <div
        v-for="n in 10"
        :key="n"
        class="flex w-full flex-col p-2 md:w-1/3 lg:w-1/4 2xl:w-1/5"
      >
        <div
          class="h-full rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 dark:bg-gray-800"
        >
          <img
            src="https://images.unsplash.com/photo-1512314889357-e157c22f938d"
            class="rounded-lg"
          />
          <div class="p-4">
            <p class="text-2xl font-bold">Idea {{ n }}</p>
            <p>
              This is a good idea because it is a good idea because it is a good
              idea because it is a good idea because it is a good idea because
              it is a good idea because it is a good idea...
            </p>
            <UButton color="blue" class="mt-4"> Learn More </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
