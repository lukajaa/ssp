<template>
  <div>
    <p class="text-center text-7xl font-bold tracking-tight">Take Action</p>
    <img src="~/assets/svgs/underline_1.svg" class="mx-auto" alt="underline" />
    <div class="mt-6 flex flex-wrap px-8">
      <div class="flex w-full flex-col p-4 md:w-1/3">
        <div class="h-full rounded ring-4 ring-black">
          <div class="font-bubble p-4">
            <p class="text-3xl font-bold text-blue-500">Local Organizations</p>
            <p class="text-black">
              Joining local organizations is a great way to get involved in your
              community and make a difference.
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
            <p class="text-3xl font-bold text-blue-500">Elected Officials</p>
            <p class="text-black">
              Reach out to your elected officials to share your thoughts and
              concerns about local issues.
            </p>
            <div class="space-x-2">
              <UButton
                to="https://sfbos.org/"
                color="blue"
                class="mt-4 font-sans"
              >
                SF Board
              </UButton>
              <UButton
                to="https://sfbos.org/meetings"
                color="blue"
                class="mt-4 font-sans"
              >
                Meeting Schedule
              </UButton>
              <UButton
                to="https://sfbos.org/index.aspx?page=193"
                color="blue"
                class="mt-4 font-sans"
              >
                Committees
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
