<template>
  <div class="p-2 font-serif text-lg lg:p-10">
    <div
      class="font-bubble mx-auto flex w-full flex-col items-center justify-center pt-24 text-center md:w-2/3 lg:pt-48"
    >
      <p class="text-7xl">How did we get here?</p>
      <img src="~/assets/svgs/underline_1.svg" />
    </div>
    <Paragraph>
      Its hard to imagine a world before cars, but it wasn't that long ago that
      city streets were filled with a diverse mix of horse-draw carraiges,
      <PopupCard term="streetcars" /> and pedestrians. In fact, the first
      automobile was invented in 1885, and it wasn't until the 1920s that cars
      became a common sight on city streets. In the video above, you can see the
      streets of San Francisco in 1906. The idea of sidewalks was not yet a
      thing, and pedestrians and cars shared the same space. However, as cars
      became more popular, the auto industry began campaigning for more space
      for cars. Among other things, this led to the creation of the term
      <PopupCard term="jaywalking" /> and the idea that pedestrians should be
      confined to sidewalks.
    </Paragraph>
    <div class="mx-auto h-96 w-full lg:w-2/3">
      <Line :data="chartData" :options="chartOptions" />
    </div>
    <Caption>
      Census data for car production and registration in the United States.
      Registration numbers jumped 290,000% between 1900 and 1927.
    </Caption>
    <Paragraph>
      The invention of cars alone wasn't the only factor in car-dependency in
      American cities. There was another factor: the rise of the
      <PopupCard term="suburbs" />. The New Deal began the process of
      suburbanization by introducing longer government-backed mortgages which
      drastically increased the homeownership rate in America. In the two
      decades between 1940 and 1960, the share of the country's population
      living in suburbs rose to 30%. The allure of an affluent, stable, and safe
      environment drove many middle-class white families to leave cities in turn
      for the suburbs. However, the <PopupCard term="highway" /> systems created
      to shuttle millions of people to and from work every day tore through poor
      and minority communities, disrupting and displacing thousands of people.
      Car dependency created yet another economic barrier to achieving social
      mobility, keeping millions of Americans in poverty.
    </Paragraph>
    <img
      src="~/assets/images/Redlining.jpeg"
      alt="redlining map"
      class="mx-auto rounded-lg lg:w-2/3"
    />
    <Caption>
      A map of redlining in San Francisco. Red areas were deemed "hazardous",
      "definitely declining", and were often home to people of color.
    </Caption>
    <Paragraph>
      The rise of the suburbs was not only borne out of simple economic desires,
      it also was exacerbated by unfounded fears of crime, poverty, and people
      of color, encompassed by a dislike of so-called “urban problems”. This
      fear eventually made its way into policy in the form of
      <PopupCard term="redlining" /> which destroyed minority communities and
      perpetuated racial gaps in wealth. This was the beginning of the
      inextricable link between race, class, and cars in the United States.
      Today, the effects of redlining and highway construction can be seen in
      many cities. In San Francisco, the construction of the 101 freeway
      destroyed the Bayview-Hunters Point neighborhood, a majority black
      district, displacing thousands of people. Today, the neighborhood is still
      home to many black people and is one of the poorest neighborhoods in the
      city.
    </Paragraph>
    <img
      src="~/assets/images/highway.jpeg"
      alt="redlining map"
      class="mx-auto rounded-lg lg:w-2/3"
    />
    <Caption>
      A overhead view of the Bayview-Hunters Point neighborhood in San
      Francisco. It has been labeled as San Francisco's "Most Isolated
      Neighborhood".
    </Caption>
    <Paragraph>
      As highways tore through cities, destroying neighborhoods and the diverse
      mix of people that lived there, cars became the primary mode of
      transportation. New cities and streets were designed around cars and
      limited space and comfort for pedestrians and cyclists. The result was a
      massive increase in traffic and a decrease in the quality of life in many
      cities. This resulted in many things we can still see today: wider
      streets, lots of parking lots, and a lack of
      <PopupCard term="public transit" /> and good
      <PopupCard term="bike networks" />.
    </Paragraph>
    <Paragraph>
      By the late 1900s, people began to realize that cars were not the best way
      to get around. They were expensive, dangerous, and bad for the
      environment. Many cities began to invest in public transit and bike
      networks. However, the damage had already been done. Many cities were
      already designed around cars, and it was difficult to work around their
      <PopupCard term="car-centric design" />. Furthermore, the love of cars was
      already deeply ingrained in American culture. The car was and still stands
      as a symbol of freedom and independence,and is the default mode of
      transportation for most Americans.
    </Paragraph>
    <img
      src="~/assets/images/valencia.jpg"
      alt="redlining map"
      class="mx-auto rounded-lg lg:w-2/3"
    />
    <Caption>
      A protected center bike lane on Valencia Street in San Francisco.
    </Caption>
    <Paragraph>
      Now, many cities are attempting to adapt to less car-dependent systems
      within their current infrastructure. This is a difficult task, but it is
      necessary to create a more sustainable future. In San Francisco, certain
      streets are closed to any non-resident or delivery traffic. Furthermore,
      on many main streets, their are dedicated lanes for bus and bike traffic.
      On Market Street, one of the biggest streets in SF, traffic is closed to
      all private vehicles. This is a great example of how cities can adapt to a
      less car-dependent future.
    </Paragraph>
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs';

const chartData = ref({
  labels: [
    '1900',
    '1901',
    '1902',
    '1903',
    '1904',
    '1905',
    '1906',
    '1907',
    '1908',
    '1909',
    '1910',
    '1911',
    '1912',
    '1913',
    '1914',
    '1915',
    '1916',
    '1917',
    '1918',
    '1919',
    '1920',
    '1921',
    '1922',
    '1923',
    '1924',
    '1925',
    '1926',
    '1927',
  ],
  datasets: [
    {
      label: 'Car Registrations',
      borderColor: '#EF4444',
      data: [
        8000, 14800, 23000, 32920, 55000, 78000, 107000, 142000, 197500, 312000,
        468500, 639500, 944000, 1258062, 1711339, 2445666, 3512996, 4938340,
        6146617, 7565446, 9231941, 10463295, 12238375, 15092177, 17593677,
        19937274, 22001393, 23127315,
      ],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>
