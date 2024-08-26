<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const formSubmitted = ref(false);

const handleSubmit = (event) => {
  event.preventDefault();

  if (!formSubmitted.value) {
    toast.error('There was an error submitting the form.');
  } else {
    toast.success('Your form has been submitted successfully!');
    props.close();
  }

  formSubmitted.value = true;

};


const props = defineProps({
  close: Function,
});
</script>

<template>
  <form @submit="handleSubmit">
    <div class="mb-4">
      <label
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Meno <span class="mandatoryField">*</span>
      </label>
      <input
        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      />
    </div>

    <div class="grid gap-6 mb-4 md:grid-cols-2">
      <div>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          E-mail <span class="mandatoryField">*</span>
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div>
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone number <span>*</span>
        </label>
        <input
          type="tel"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123-45-678"
          required
        />
      </div>
    </div>

    <div class="mb-4">
      <label
        for="website"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Webstránka <span class="mandatoryField">*</span>
      </label>
      <input
        type="url"
        id="website"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="flowbite.com"
        required
      />
    </div>

    <div class="mb-4">
      <label
        for="notes"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Poznámka
      </label>
      
      <textarea
        id="notes"
        rows="4"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Je niečo čo by ste sa nás chceli spýtat?"
      ></textarea>
    </div>

    

    <button
      type="submit"
      class="bg-secondary text-white font-muli font-bold py-4 w-full rounded-[5px] hover:bg-pink-500 w-full text-center"
    >
      Kontaktujte ma
    </button>

  </form>
</template>
