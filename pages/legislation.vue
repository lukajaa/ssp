<template>
  <div>
    <div
      class="flex flex-row bg-gradient-to-b from-yellow-100 to-white p-2 md:p-12"
    >
      <div class="flex w-1/2 flex-col items-center justify-center">
        <div>
          <p class="text-8xl font-bold">Legislation</p>
          <p class="mt-4 text-lg">
            Scroll to learn more about how you can get civically involved to
            promote a less car-dependent future.
          </p>
        </div>
        <img
          src="~/assets/svgs/arrow_5.svg"
          class="mx-auto mt-8 transition duration-300 ease-in-out hover:scale-105"
          alt="scroll arrow"
          @click="scroll()"
        />
      </div>
      <div class="flex w-1/2 flex-col">
        <img src="~/assets/svgs/legislation.svg" alt="legislation" />
      </div>
    </div>
    <div id="scrollTo" class="px-2 md:px-12">
      <p class="text-5xl font-bold">Federal</p>
      <div class="flex flex-row">
        <div class="flex w-full flex-col">
          <p class="mt-4 text-lg">
            Here is a list of federal legislation that is currently being
            considered by Congress. If you click on one, you will be guided
            through how to contact your representatives to voice your support
            for the bill.
          </p>
          <div class="flex flex-wrap">
            <div
              v-for="(bill, n) of legislation"
              :key="n"
              class="flex w-full flex-col p-2 md:w-1/2 lg:w-1/3"
            >
              <div
                class="rounded p-4 shadow-md transition duration-300 ease-in-out hover:scale-105"
                :class="{ 'ring-2 ring-blue-400': selected === bill.name }"
                @click="selected = bill.name"
              >
                <p class="text-xl font-bold">{{ bill.name }}</p>
                <p>
                  {{ bill.description }}
                </p>
                <a
                  :href="bill.url"
                  target="_blank"
                  class="mt-2 font-semibold text-blue-400 hover:text-blue-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 space-y-2 px-2 md:px-12">
      <p class="text-5xl font-bold">Contact Your Representative</p>
      <div v-if="selected" class="space-y-4">
        <div class="flex flex-row space-x-4">
          <UInput
            v-model="name"
            label="Name"
            placeholder="Your Name"
            class="w-1/2"
          />
          <UInput
            v-model="email"
            label="Email"
            placeholder="Your Email"
            class="w-1/2"
          />
        </div>
        <div class="flex flex-row space-x-4">
          <UInput
            v-model="address"
            label="Address"
            placeholder="Your Address"
            class="w-1/2"
          />
          <UInput
            v-model="zip"
            label="Zip Code"
            placeholder="Your Zip Code"
            class="w-1/2"
          />
        </div>
        <URadioGroup
          v-model="title"
          legend="Representative or Senator"
          :options="[
            { label: 'Representative', value: 'Representative' },
            { label: 'Senator', value: 'Senator' },
          ]"
        />
        <a
          href="https://www.congress.gov/members/find-your-member"
          target="_blank"
          class="font-semibold text-blue-400 hover:text-blue-500"
        >
          Find your representative
        </a>
        <UInput
          v-model="representative"
          label="Name of Representative"
          placeholder="Name of your representative"
        />
        <UTextarea v-model="template" autoresize></UTextarea>
        <p>
          Consider adding a personal note to your email to make it more
          impactful. You could talk about your experience in your own city and
          with transportation, or why you think this bill is important.
        </p>
        <UButton class="w-full" @click="copyTemplate()">
          Copy Template
        </UButton>
      </div>
      <div v-else>
        <p class="mt-4 text-lg">
          Select a bill to get an email template to send to your representative
        </p>
      </div>
    </div>
    <!--
    <div>
      <p class="text-5xl font-bold">State</p>
      <p class="mt-4 text-lg">Coming soon</p>
    </div>
    <div>
      <p class="text-5xl font-bold">Local</p>
      <p class="mt-4 text-lg">Coming soon</p>
    </div>
    -->
    <BackButton />
  </div>
</template>

<script setup lang="ts">
import legislation from '~/assets/data/legislation.json';

const selected = ref('');

function scroll() {
  document.getElementById('scrollTo')?.scrollIntoView({
    behavior: 'smooth',
  });
}

const name = ref('');
const email = ref('');
const title = ref('');
const representative = ref('');
const address = ref('');
const zip = ref('');

function copyTemplate() {
  navigator.clipboard.writeText(template.value);
}

const template = computed(() => {
  return `${new Date().toLocaleDateString()}
${name.value}
${address.value}
San Francisco, CA ${zip.value}
${email.value}

The Honorable${title.value} ${representative.value}
House of Representatives

Dear${title.value} ${representative.value},

My name is ${
    name.value
  } and I am a constituent of yours from San Francisco, CA. I am writing to you today to express my support for ${
    selected.value
  }. ${legislation.find((bill) => bill.name === selected.value)?.description}

I believe that in supporting this bill you will be helping to create a more sustainable future for our country. Thank you for your time and consideration.

Sincerely,
${name.value}
`;
});

useSeoMeta({
  title: 'Legislation',
  ogTitle: 'Legislation',
  description:
    'Learn about federal legislation and how to contact your representative to voice your support for a less car-dependent future.',
  ogDescription:
    'Learn about federal legislation and how to contact your representative to voice your support for a less car-dependent future.',
});
</script>
