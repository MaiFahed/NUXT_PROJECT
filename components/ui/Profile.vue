<template>
  <div class="flex items-center">
    <div class="rounded-full p-2">
      <img
        :src="`/images/${profileImage}`"
        alt="Profile Image"
        class="w-12 h-12 rounded-full"
      />
    </div>
    <div class="ml-4">
      <p class="text-black font-semibold">{{ profileName }}</p>
      <p class="text-gray-500">
        {{ profileJob }}
        <span class="text-pink-500"> {{ profileWebsite }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    profileImage: {
      type: String,
      required: true,
    },
    profileName: {
      type: String,
      required: false,
    },
    profileJob: {
      type: String,
      required: false,
    },
    profileWebsite: {
      type: String,
      required: false,
    },
  },
};
</script>
