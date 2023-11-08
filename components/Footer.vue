<template>
  <div class="mx-auto w-fit p-8 text-center text-lg">
    <p>Forms Submitted: {{ index }}</p>
    <UForm :validate="validate" :state="state" @submit="onSubmit">
      <div class="mt-4 flex flex-row justify-center space-x-8">
        <UFormGroup label="Age" name="age" class="flex flex-col">
          <UInput v-model="state.age" type="number" />
        </UFormGroup>

        <UFormGroup
          label="How did you hear about this website?"
          name="how"
          class="flex flex-col"
        >
          <UTextarea v-model="state.how" />
        </UFormGroup>
      </div>
      <div class="mt-4 flex flex-row">
        <UFormGroup
          label="Any thoughts or comments?"
          name="thoughts"
          class="flex w-full flex-col"
        >
          <UTextarea v-model="state.thoughts" autoresize />
        </UFormGroup>
      </div>

      <UButton type="submit" class="mt-4" block> Submit </UButton>
    </UForm>
    <p class="mt-4">
      By
      <a
        href="https://www.lucaskchang.com/"
        target="_blank"
        class="font-semibold text-blue-400 hover:text-blue-500"
      >
        Lucas Chang
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
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
surveyResponsesData.value = surveyResponses.data();
console.log(surveyResponsesData.value);

const state = reactive({
  age: undefined,
  how: undefined,
  thoughts: undefined,
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
  if (!state.thoughts) errors.push({ path: 'thoughts', message: 'Required' });
  return errors;
};

function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  surveyResponsesData.value[index.value] = event.data;
  setDoc(surveyResponsesDoc, surveyResponsesData.value);
  submitNotification.add({
    title: 'Feedback submitted!',
    timeout: 3000,
  });
}
</script>
