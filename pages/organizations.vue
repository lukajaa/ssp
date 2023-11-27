<template>
  <div>
    <div class="flex flex-row p-2 md:p-12">
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
    <div id="scrollTo" class="flex flex-row">
      <div class="flex w-1/2 flex-col">
        <img
          src="https://www.gobicycletouring.com/wp-content/uploads/2012/11/left.jpg"
          alt="Local"
          class="w-full rounded-r-lg"
        />
      </div>
      <div class="flex w-1/2 flex-col p-4 md:p-8">
        <p class="text-5xl font-bold">San Francisco Bicycle Coalition</p>
        <p class="mt-4 text-lg">
          The San Francisco Bicycle Coalition is a non-profit advocacy
          organization that has been working for over 50 years to promote
          bicycling and make San Francisco more bike-friendly. They lobby the
          city government and work with community partners on initiatives like
          bike lanes, trails, and education programs. The organization is run by
          a board of directors and staff and relies heavily on volunteers
          interns. Their mission is to transform SF into a more livable city
          where bicycling is a safe and popular way of everyday transportation.
        </p>
        <p class="mt-4 text-lg">
          Website:
          <a
            href="https://sfbike.org/"
            target="_blank"
            class="font-semibold text-blue-400 hover:text-blue-500"
          >
            https://sfbike.org/
          </a>
        </p>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex w-1/2 flex-col p-4 md:p-8">
        <p class="text-5xl font-bold">Organization 2</p>
        <p class="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, nisl nec aliquam ultricies, nunc sapien ultricies tortor,
          vel aliquet quam nisl quis nunc. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi.
        </p>
        <p class="mt-4 text-lg">
          Website:
          <a
            href="https://sfbike.org/"
            target="_blank"
            class="font-semibold text-blue-400 hover:text-blue-500"
          >
            Website
          </a>
        </p>
      </div>
      <div class="flex w-1/2 flex-col">
        <img
          src="https://www.gobicycletouring.com/wp-content/uploads/2012/11/left.jpg"
          alt="Local"
          class="w-full rounded-l-lg"
        />
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex w-1/2 flex-col">
        <img
          src="https://www.gobicycletouring.com/wp-content/uploads/2012/11/left.jpg"
          alt="Local"
          class="w-full rounded-r-lg"
        />
      </div>
      <div class="flex w-1/2 flex-col p-4 md:p-8">
        <p class="text-5xl font-bold">Organization 3</p>
        <p class="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, nisl nec aliquam ultricies, nunc sapien ultricies tortor,
          vel aliquet quam nisl quis nunc. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi.
        </p>
        <p class="mt-4 text-lg">
          Website:
          <a
            href="https://sfbike.org/"
            target="_blank"
            class="font-semibold text-blue-400 hover:text-blue-500"
          >
            Website
          </a>
        </p>
      </div>
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
