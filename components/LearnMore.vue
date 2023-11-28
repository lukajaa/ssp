<template>
  <div>
    <p class="text-center text-7xl font-bold tracking-tight">Learn More</p>
    <img src="~/assets/svgs/underline_1.svg" class="mx-auto" />
    <div class="mt-12 flex flex-wrap px-8">
      <div class="flex w-full flex-col p-4 md:w-1/3">
        <div class="h-full rounded ring-4 ring-black">
          <div class="font-bubble p-4">
            <p class="text-3xl font-bold text-blue-500">Local Organizations</p>
            <p class="text-black">
              Joining local organizations is a great way to get involved in your
              community and make a difference.
              <!-- They often provide opportunities
              to volunteer and resources to learn more about local issues. -->
            </p>
            <NuxtLink to="/organizations">
              <UButton color="blue" class="mt-4 font-sans">
                Learn More
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col p-4 md:w-1/3">
        <div class="h-full rounded ring-4 ring-black">
          <div class="font-bubble p-4">
            <p class="text-3xl font-bold text-yellow-500">Legislation</p>
            <p class="text-black">
              Your voice matters! Contact your local representatives and vote in
              upcoming elections to make your voice heard.
            </p>
            <NuxtLink to="/legislation">
              <UButton color="yellow" class="mt-4 font-sans">
                Learn More
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col p-4 md:w-1/3">
        <div class="h-full rounded ring-4 ring-black">
          <div class="font-bubble p-4">
            <p class="text-3xl font-bold text-pink-500">Personal Habits</p>
            <p class="text-black">
              There are many ways to live less car dependent that can save you
              money adn time and even improve your health.
            </p>
            <NuxtLink to="/habits">
              <UButton color="pink" class="mt-4 font-sans">
                Learn More
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
