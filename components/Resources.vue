<template>
  <div class="mt-10 flex flex-wrap">
    <NuxtLink to="/HSR" class="flex w-full flex-col p-4 md:w-1/2">
      <p class="text-center text-3xl font-bold">
        High Speed Rail Network Creator
      </p>
      <img
        src="~/assets/svgs/train.svg"
        class="mx-auto mt-12 h-1/2 transition duration-300 ease-in-out hover:scale-105"
        alt="train"
      />
    </NuxtLink>
    <NuxtLink to="/Car" class="flex w-full flex-col p-4 md:w-1/2">
      <p class="text-center text-3xl font-bold">Transportation Efficiency</p>
      <img
        src="~/assets/svgs/car_3.svg"
        class="mx-auto h-2/3 transition duration-300 ease-in-out hover:scale-105"
        alt="car"
      />
    </NuxtLink>
  </div>
</template>
