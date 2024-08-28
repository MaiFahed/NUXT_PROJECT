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
      <p class="font-muli text-base font-black leading-tight text-dark">{{ profileName }}</p>
      <p class="font-muli text-base font-normal leading-tight text-dark">
        {{ profileJob }}
        <span class="text-secondary font-bold"> {{ profileWebsite }}</span>
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
