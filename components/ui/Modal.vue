<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-white bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white p-5 w-full md:w-1/3">
      <div class="flex items-end justify-end">
        <button @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#EE325C"
            class="size-8 transition-colors duration-200 hover:fill-pink-500 hover:cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div class="flex items-center justify-center p-4">
        <h2 class="text-2xl font-bold font-mulish text-center">
          Jednoducho nám napíšte <br />
          a my sa vám ozveme.
        </h2>
      </div>
      <Form :close="closeModal" />
    </div>
  </div>
</template>

<!-- <template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 flex justify-center items-center"
  >
    <div class="bg-white rounded-lg p-6 w-1/2">
      <h2 class="text-xl font-bold mb-4">Modal Title</h2>
      <p>Modal content goes here.</p>
      <Form :close="closeModal" />
      <button
        @click="closeModal"
        class="mt-4 bg-secondary text-white py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </div>
</template> -->

<script setup>
import { ref } from "vue";
import Form from "./Form.vue";

const props = defineProps({
  isOpen: Boolean,
  closeModal: Function,
});
</script>

<!-- <script setup>
import { ref } from "vue";

const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};
</script> 

<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 bg-white bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white p-5 w-full md:w-1/3">
      <div class="flex items-end justify-end">
        <button @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#EE325C"
            class="size-8 transition-colors duration-200 hover:fill-pink-500 hover:cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  show: Boolean,
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script> -->
