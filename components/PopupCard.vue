<template>
  <UPopover mode="hover" class="relative inline-flex text-left">
    <span class="text-green-500 hover:text-green-600">
      {{ term }}
    </span>
    <template #panel>
      <div class="w-80 tracking-normal">
        <img class="my-0 w-full" :src="terms[term].img" />
        <div class="px-4 pb-4 pt-2">
          <p class="m-0 p-0 font-sans text-lg font-bold">
            {{ terms[term].title }}
          </p>
          <p class="my-0 indent-8 font-sans text-sm leading-normal">
            {{ terms[term].description }}
          </p>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import termsJSON from '~/assets/data/terms.json';

const terms = termsJSON as Record<
  string,
  {
    title: string;
    description: string;
    img: string;
  }
>;

defineProps({
  term: {
    type: String,
    default: 'default',
    required: true,
  },
});
</script>
