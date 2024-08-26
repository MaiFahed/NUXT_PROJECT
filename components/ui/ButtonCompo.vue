<template>
  <button
    :class="[
      'bg-secondary hover:bg-pink-500 text-white font-muli font-bold py-4 rounded-[5px]',
      width,
    ]"
    @click="toggleModal"
  >
    Mám záujem o UX audit
  </button>


  <Modal :isOpen="isModalOpen" :closeModal="toggleModal" />
</template>


<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

defineProps({
  width: {
    type: String,
    default: "w-full",
  },
});
</script>

