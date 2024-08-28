<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-white bg-opacity-70 flex items-center justify-center"
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
        <p class="text-[30px] leading-[44px] font-bold font-mulish text-center">
          Jednoducho nám napíšte <br />
          a my sa vám ozveme.
        </p>
      </div>
      <Form :close="closeModal" />
    </div>
  </div>
</template>

<script setup>
import Form from "./Form.vue";

const props = defineProps({
  isOpen: Boolean,
  closeModal: Function,
});
</script>
