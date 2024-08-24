<template>
  <button
    :class="[
      'bg-secondary text-white font-muli font-bold py-4 rounded-[5px]',
      width,
    ]"
  >
    Mám záujem o UX audit
  </button>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: "w-full",
  },
});
</script>
