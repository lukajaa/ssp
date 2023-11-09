<template>
  <div class="min-h-screen p-10 font-serif text-lg">
    <div class="mx-auto w-2/3 overflow-hidden rounded-lg">
      <video
        ref="video"
        class="video h-full md:-mt-24 md:h-auto md:w-full"
        autoplay
        controls
        loop
      >
        <source
          src="https://ia800701.us.archive.org/4/items/MarketStreet19064KScan20181016/MarketStreet_4K_to_2K_cropped_higher_contrast.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <p class="mx-auto my-4 w-1/2">
      &emsp;&emsp;Its hard to imagine a world before cars, but it wasn't that
      long ago that city streets were filled with a diverse mix of horse-draw
      carraiges, <PopupCard term="streetcars" /> and pedestrians. In fact, the
      first automobile was invented in 1885, and it wasn't until the 1920s that
      cars became a common sight on city streets. In the video above, you can
      see the streets of San Francisco in 1906. The idea of sidewalks was not
      yet a thing, and pedestrians and cars shared the same space. However, as
      cars became more popular, the auto industry began campaigning for more
      space for cars. Among other things, this led to the creation of the term
      <PopupCard term="jaywalking" /> and the idea that pedestrians should be
      confined to sidewalks.
    </p>
    <img
      src="~/assets/images/CarOwnershipData.png"
      alt="car census data"
      class="mx-auto w-2/3 rounded-lg"
    />
    <!-- <p class="text-center text-sm text-gray-500 dark:text-gray-200">
      Census data for car production and registration in the United States.
      Registration numbers jumped 290,000% between 1900 and 1927.
    </p> -->
    <p class="mx-auto my-4 w-1/2">
      &emsp;&emsp;The invention of cars alone wasn't the only factor in
      car-dependency in American cities. There was another factor: the rise of
      the <PopupCard term="suburbs" />. Franklin Delano Roosevelt's New Deal
      began the process of suburbanization by introducing longer
      government-backed mortgages which drastically increased the homeownership
      rate in America. In the two decades between 1940 and 1960, homeownership
      rates increased by nearly 20% and the share of the country's population
      living in the suburbs rose to 30%. The allure of an affluent, stable, and
      safe environment drove many middle-class white families to leave cities in
      turn for the suburbs. Additionally, the baby boom of the 1950s created a
      large for housing, which was met by the suburban housing boom. Large
      <PopupCard term="highway" /> systems were created to shuttle millions of
      people to and from work every day. However, these highways often tore
      through poor and minority communities, disrupting and displacing thousands
      of people. Car dependency created yet another economic barrier to
      achieving social mobility, keeping millions of Americans in poverty.
    </p>
    <p class="mx-auto my-4 w-1/2">
      &emsp;&emsp;The rise of the suburbs was not only borne out of simple
      economic desires, it also was exacerbated by unfounded fears of crime,
      poverty, and people of color, encompassed by a dislike of so-called “urban
      problems”. This fear eventually made its way into policy in the form of
      <PopupCard term="redlining" /> which destroyed minority communities and
      perpetuated racial gaps in wealth. Even today, the effects of redlining
      and highway construction can be seen in many cities. In San Francisco, for
      example, the Bayview-Hunters Point neighborhood was home to many African
      Americans. However, the construction of the 101 freeway destroyed the
      neighborhood, displacing thousands of people. Today, the neighborhood is
      still home to many African Americans, but it is also one of the poorest
      neighborhoods in the city.
    </p>
    <img
      src="~/assets/images/Redlining.jpeg"
      alt="redlining map"
      class="mx-auto w-2/3 rounded-lg"
    />
    <!-- <p class="text-center text-sm text-gray-500 dark:text-gray-200">
      A map of redlining in San Francisco. Red areas were deemed "hazardous"
      "definitely declining" and were often home to people of color.
    </p> -->
    <p class="mx-auto my-4 w-1/2">
      &emsp;&emsp;As highways tore through cities, destroying neighborhoods and
      the diverse mix of people that lived there, cars became the primary mode
      of transportation. New cities and streets were designed around cars and
      limited space and comfort for pedestrians and cyclists. The result was a
      massive increase in traffic and a decrease in the quality of life in many
      cities. This resulted in many things we can still see today: wider
      streets, lots of parking lots, and a lack of public transit and good
      <PopupCard term="bike networks" />.
    </p>
    <p class="mx-auto my-4 w-1/2">
      &emsp;&emsp;By the late 1900s, people began to realize that cars were not
      the best way to get around. They were expensive, dangerous, and bad for
      the environment. Many cities began to invest in public transit and bike
      networks. However, the damage had already been done. Many cities were
      already designed around cars, and it was difficult to change that. Today,
      many cities are still struggling to adapt to the
      <PopupCard term="car-centric design" /> of the past.
    </p>
    <p class="mx-auto my-4 w-1/2">
      &emsp;&emsp;Now, many cities are adapting to less car-dependent systems
      within their current infrastructure. This is a difficult task, but it is
      necessary to create a more sustainable future. In San Francisco, for
      example, certain streets are closed to any non-resident or delivery
      traffic. Furthermore, on many main streets, their are dedicated lanes for
      bus and bike traffic. On Market Street, one of the biggest streets in SF,
      traffic is closed to all private vehicles. This is a great example of how
      cities can adapt to a less car-dependent future.
    </p>
  </div>
</template>
