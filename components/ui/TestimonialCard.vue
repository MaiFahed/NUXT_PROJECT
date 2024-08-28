<script setup>
import Profile from "./Profile.vue";
</script>
<template>
  <div class="relative border border-lighterGray p-6 rounded-lg mb-5">
    <img
      src="~/assets/images/quote.png"
      alt="Testimonial Image"
      class="absolute top-0 left-1/10 transform -translate-y-1/2"
    />
    <div class="flex items-start">
      <p
        class="font-muli text-dark text-base font-normal leading-8 text-left"
      >
        {{ testimonialText }}
        <span class="text-secondary font-semibold">čítať viac</span>
      </p>
    </div>
  </div>
  <Profile
    :profileImage="profileImage"
    :profileName="profileName"
    :profileJob="profileJob"
    :profileWebsite="profileWebsite"
  />
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    testimonialText: {
      type: String,
      required: true,
    },
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
