<template>
  <div class="mx-auto w-fit max-w-xl p-8 text-lg">
    <!-- <p class="text-center text-xl font-bold">Feedback</p>
    <UForm
      :validate="validate"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <div class="mt-4 flex flex-row justify-center space-x-8">
        <UFormGroup label="Age*" name="age" class="flex flex-col">
          <UInput v-model="state.age" type="number" />
        </UFormGroup>

        <UFormGroup
          label="How did you hear about this website?*"
          name="how"
          class="flex flex-col"
        >
          <UTextarea v-model="state.how" />
        </UFormGroup>
      </div>
      <div class="flex flex-row">
        <UFormGroup
          label="Did you learn something new?"
          name="learning"
          class="flex w-full flex-col"
        >
          <UTextarea v-model="state.learning" autoresize />
        </UFormGroup>
      </div>
      <div class="flex flex-row">
        <UFormGroup
          label="Did you use the call to action?"
          name="action"
          class="flex w-full flex-col"
        >
          <UTextarea v-model="state.action" autoresize />
        </UFormGroup>
      </div>
      <div class="flex flex-row">
        <UFormGroup
          label="Is there any new content you would like to see? Or any redundant content you would like to remove?"
          name="content"
          class="flex w-full flex-col"
        >
          <UTextarea v-model="state.content" autoresize />
        </UFormGroup>
      </div>
      <div class="flex flex-row">
        <UFormGroup
          label="Are there any stylistic changes you would like to see?"
          name="style"
          class="flex w-full flex-col"
        >
          <UTextarea v-model="state.style" autoresize />
        </UFormGroup>
      </div>
      <div class="flex flex-row">
        <UFormGroup
          label="Any other thoughts or comments?"
          name="other"
          class="flex w-full flex-col"
        >
          <UTextarea v-model="state.other" autoresize />
        </UFormGroup>
      </div>

      <UButton type="submit" block> Submit </UButton>
    </UForm> -->
    <div class="mt-4 text-center">
      <p class="mt-4">
        Created
        <a
          href="/about"
          target="_blank"
          class="font-semibold text-blue-400 hover:text-blue-500"
        >
          with help
        </a>
        by
        <a
          href="https://www.lucaskchang.com/"
          target="_blank"
          class="font-semibold text-blue-400 hover:text-blue-500"
        >
          Lucas Chang
        </a>
        <!-- Illustrations from
        <a
          href="https://storyset.com/"
          target="_blank"
          class="font-semibold text-blue-400 hover:text-blue-500"
        >
          Storyset
        </a>
        and
        <a
          href="https://www.highlights.design/"
          target="_blank"
          class="font-semibold text-blue-400 hover:text-blue-500"
        >
          Highlights
        </a> -->
      </p>
      <p>
        Question? Email
        <a
          href="mailto:lchang24@bayschoolsf.org"
          class="font-semibold text-blue-400 hover:text-blue-500"
        >
          lchang24@bayschoolsf.org
        </a>
      </p>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore';

const submitNotification = useToast();
const db = getFirestore();
const surveyResponsesDoc = doc(
  collection(db, 'survey-responses'),
  'responses-document',
);
const surveyResponses = await getDoc(surveyResponsesDoc);
const surveyResponsesData = ref();

const state = reactive({
  age: undefined,
  how: undefined,
  learning: undefined,
  action: undefined,
  content: undefined,
  style: undefined,
  other: undefined,
});

const index = computed(() => {
  return Object.keys(surveyResponsesData.value).length;
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.age) errors.push({ path: 'age', message: 'Required' });
  if ((state.age && state.age < 0) || state.age > 100)
    errors.push({ path: 'age', message: 'Enter a valid age' });
  if (!state.how) errors.push({ path: 'how', message: 'Required' });
  return errors;
};

function onSubmit(event: FormSubmitEvent<any>) {
  surveyResponsesData.value = surveyResponses.data();
  surveyResponsesData.value[index.value] = event.data;
  setDoc(surveyResponsesDoc, surveyResponsesData.value);
  submitNotification.add({
    title: 'Feedback submitted!',
    timeout: 3000,
  });
  state.age = undefined;
  state.how = undefined;
  state.learning = undefined;
  state.action = undefined;
  state.content = undefined;
  state.style = undefined;
  state.other = undefined;
}
</script> -->
