<template>
  <div class="mt-10 flex flex-wrap">
    <NuxtLink to="/HSR" class="flex w-full flex-col p-4 md:w-1/3">
      <p class="mb-6 text-center text-3xl font-bold">
        High Speed Rail Network Creator
      </p>
      <img
        src="~/assets/svgs/train.svg"
        class="mx-auto h-2/3 transition duration-300 ease-in-out hover:scale-105"
      />
    </NuxtLink>
    <NuxtLink to="/Car" class="flex w-full flex-col p-4 md:w-1/3">
      <p class="mb-6 text-center text-3xl font-bold">
        Transportation Efficiency
      </p>
      <img
        src="~/assets/svgs/car_3.svg"
        class="mx-auto h-2/3 transition duration-300 ease-in-out hover:scale-105"
      />
    </NuxtLink>
    <NuxtLink to="/Bus" class="flex w-full flex-col p-4 md:w-1/3">
      <p class="mb-6 text-center text-3xl font-bold">Bus Stuff (Coming Soon)</p>
      <img
        src="~/assets/svgs/bus.svg"
        class="mx-auto h-2/3 transition duration-300 ease-in-out hover:scale-105"
      />
    </NuxtLink>
  </div>
</template>
