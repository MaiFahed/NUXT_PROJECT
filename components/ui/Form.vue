<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import SubmitButton from "./SubmitButton.vue";

const toast = useToast();

const formSubmitted = ref(false);

const handleSubmit = (event) => {
  event.preventDefault();

  if (!formSubmitted.value) {
    toast.error("There was an error submitting the form.");
  } else {
    toast.success("Your form has been submitted successfully!");
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
        class="block mb-2 font-mulish text-base font-dark"
      >
        Meno: <span class="mandatoryField">*</span>
      </label>
      <input
        type="text"
        id="first_name"
        class="bg-gray text-sm rounded-lg block w-full p-2.5"
        required
      />
    </div>

    <div class="grid gap-6 mb-4 md:grid-cols-2">
      <div>
        <label for="email" class="block mb-2 font-mulish text-base font-dark">
          E-mail: <span class="mandatoryField">*</span>
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray text-sm rounded-lg block w-full p-2.5"
          required
        />
      </div>
      <div>
        <label for="phone" class="block mb-2 font-mulish text-base font-dark">
          Tel. číslo:
        </label>
        <input
          type="tel"
          id="phone"
          class="bg-gray text-sm rounded-lg block w-full p-2.5"
        />
      </div>
    </div>

    <div class="mb-4">
      <label for="website" class="block mb-2 font-mulish text-base font-dark">
        Webstránka:
      </label>
      <input
        type="url"
        id="website"
        class="bg-gray text-sm rounded-lg block w-full p-2.5"
      />
    </div>

    <div class="mb-4">
      <label for="notes" class="block mb-2 font-mulish text-base font-dark">
        Poznámka: <span class="mandatoryField">*</span>
      </label>

      <textarea
        id="notes"
        rows="4"
        class="bg-gray placeholder-lightGray text-sm rounded-lg block w-full p-2.5"
        placeholder="Je niečo čo by ste sa nás chceli spýtat?"
        required
      ></textarea>
    </div>

    <SubmitButton />
  </form>
</template>
