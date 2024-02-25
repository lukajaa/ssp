<template>
  <div>
    <div
      class="flex flex-row bg-gradient-to-b from-cyan-100 to-white p-2 md:p-12"
    >
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
          alt="scroll arrow"
          @click="scroll()"
        />
      </div>
      <div class="flex w-1/2 flex-col">
        <img
          src="~/assets/svgs/organizations.svg"
          alt="people working together"
        />
      </div>
    </div>
    <div class="space-y-12">
      <div id="scrollTo" class="flex flex-row">
        <div class="flex w-1/2 flex-col">
          <img
            src="~/assets/images/bike.jpg"
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
            bike lanes, trails, and education programs. The organization is run
            by a board of directors and staff and relies heavily on volunteers
            interns. Their mission is to transform SF into a more livable city
            where bicycling is a safe and popular way of everyday
            transportation.
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
          <p class="text-5xl font-bold">San Francisco Transit Riders</p>
          <p class="mt-4 text-lg">
            San Francisco Transit Riders is fighting for an excellent,
            affordable, and growing public transit system in San Francisco. They
            advocate for transit that provides equitable access to opportunities
            for all residents and reduces dependence on private vehicles. Their
            mission is to make MUNI and other transit the preferred choice for
            more San Franciscans through improved service, accessibility and
            expansion.
          </p>
          <p class="mt-4 text-lg">
            Website:
            <a
              href="https://sftransitriders.org/"
              target="_blank"
              class="font-semibold text-blue-400 hover:text-blue-500"
            >
              https://sftransitriders.org/
            </a>
          </p>
        </div>
        <div class="flex w-1/2 flex-col">
          <img
            src="~/assets/images/train.jpeg"
            alt="Local"
            class="aspect-video w-full rounded-l-lg"
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
          <p class="text-5xl font-bold">San Francisco Urban Riders</p>
          <p class="mt-4 text-lg">
            Transporation for work and errands is important, but so is
            recreation. San Francisco Urban Riders is a non-profit organization
            that promotes sustainable trail access for mountain bicyclists and
            works to expand a network of off-road trails in San Francisco.
            Ultimately, they want to create a city-wide network of trails that
            are accessible by bike.
          </p>
          <p class="mt-4 text-lg">
            Website:
            <a
              href="https://sfurbanriders.org/"
              target="_blank"
              class="font-semibold text-blue-400 hover:text-blue-500"
            >
              https://sfurbanriders.org/
            </a>
          </p>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex w-1/2 flex-col p-4 md:p-8">
          <p class="text-5xl font-bold">
            Metropolitation Transporation Commission
          </p>
          <p class="mt-4 text-lg">
            The Metropolitation Transporation Commission (MTC) was created by
            the California Legislature in 1970 to plan, finance and coordinate
            the Bay Area's transportation system. The Commission's scope over
            the years has expanded to address other regional issues, including
            housing and development.
          </p>
          <p class="mt-4 text-lg">
            Website:
            <a
              href="https://mtc.ca.gov/about-mtc/what-mtc"
              target="_blank"
              class="font-semibold text-blue-400 hover:text-blue-500"
            >
              https://mtc.ca.gov/about-mtc/what-mtc
            </a>
          </p>
        </div>
        <div class="flex w-1/2 flex-col">
          <img
            src="https://images.unsplash.com/photo-1517210067403-d86a5703516f"
            alt="Local"
            class="aspect-video w-full rounded-l-lg"
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex w-1/2 flex-col">
          <img
            src="https://images.unsplash.com/photo-1609959368651-1efbbca988ea"
            alt="Local"
            class="w-full rounded-r-lg"
          />
        </div>
        <div class="flex w-1/2 flex-col p-4 md:p-8">
          <p class="text-5xl font-bold">Bicycle Advisory Committee</p>
          <p class="mt-4 text-lg">
            "The BAC works to make bicycling safer and more accessible to and
            usable by all, to end traffic violence, and to prevent climate
            change." -- San Francisco Bicycle Coalition
          </p>
          <p class="mt-4 text-lg">
            Website:
            <a
              href="https://www.sf.gov/departments/bicycle-advisory-committee"
              target="_blank"
              class="font-semibold text-blue-400 hover:text-blue-500"
            >
              https://www.sf.gov/departments/bicycle-advisory-committee
            </a>
          </p>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex w-1/2 flex-col p-4 md:p-8">
          <p class="text-5xl font-bold">Connect SF</p>
          <p class="mt-4 text-lg">
            ConnectSF is a collaboration between the SFMTA, SF Planning and
            SFCTA to develop a coordinated long-term transportation vision and
            plan for San Francisco through 2050. It involves establishing a
            50-year public vision, analyzing future needs based on existing
            plans, developing concepts for transit and streets, prioritizing
            projects in the SFTP, codifying policies and projects in the
            Transportation Element, and informing the regional Plan Bay Area
            2050 to create an equitable, sustainable and effective
            transportation system for the coming decades.
          </p>
          <p class="mt-4 text-lg">
            Website:
            <a
              href="https://connectsf.org/"
              target="_blank"
              class="font-semibold text-blue-400 hover:text-blue-500"
            >
              https://connectsf.org/
            </a>
          </p>
        </div>
        <div class="flex w-1/2 flex-col">
          <img
            src="https://images.unsplash.com/photo-1560880941-f6c3c074f9a5"
            alt="Local"
            class="aspect-video w-full rounded-l-lg"
          />
        </div>
      </div>
    </div>
    <p class="mt-12 text-center text-5xl font-bold">How to Get Involved</p>
    <div class="mt-4 flex flex-wrap">
      <div class="flex w-full flex-col p-4 md:w-1/3">
        <div class="rounded p-4 ring-4 ring-black">
          <p class="text-4xl font-bold">
            <span class="text-blue-500">Step One:</span> Visit the Site
          </p>
          <p class="mt-4 text-lg">
            Visit the site and take a look at the different organizations that
            are working to promote a less car-dependent future.
          </p>
        </div>
      </div>
      <div class="flex w-full flex-col p-4 md:w-1/3">
        <div class="rounded p-4 ring-4 ring-black">
          <p class="text-4xl font-bold">
            <span class="text-blue-500">Step Two:</span> Become a Member
          </p>
          <p class="mt-4 text-lg">
            Click the "Become a Member" button on the site to join the
            organization and support their mission.
          </p>
        </div>
      </div>
      <div class="flex w-full flex-col p-4 md:w-1/3">
        <div class="rounded p-4 ring-4 ring-black">
          <p class="text-4xl font-bold">
            <span class="text-blue-500">Step Three:</span> You're Done!
          </p>
          <p class="mt-4 text-lg">
            You will recieve volunteer opportunities and updates on the
            organization's progress.
          </p>
        </div>
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
