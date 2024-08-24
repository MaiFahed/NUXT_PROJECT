<script setup>
import TwoColumnLayout from "~/layouts/TwoColumnLayout.vue";
</script>
<template>
  <TwoColumnLayout
    :hideArrowSection="true"
    :computedSection2Slot="computedSection2Slot"
  >
    <template v-slot:[computedSection1Slot]>
      <!-- Content for Section 1 -->
      <div class="flex items-center justify-start gap-4 lg:justify-between">
        <img
          :src="`/images/${imageNumber}`"
          alt="Step number"
          class="w-auto h-auto"
        />
        <div>
          <h1 class="text-[20px] text-black font-bold font-mulish">
            {{ title }}
          </h1>
          <p class="leading-7 font-muli">
            <span v-html="description"></span>
          </p>
        </div>
      </div>
    </template>

    <template v-slot:[computedSection2Slot]>
      <!-- Content for Section 2 -->
      <div
        class="bg-blue-100"
        :class="{
          'flex items-end justify-end': isSwitched,
          'flex items-start justify-start': !isSwitched,
          'hidden': hideArrow,
        }"
      >
        <img
          :class="{
            'transform -scale-x-100': isSwitched,
          }"
          src="~/assets/images/arrow.png"
          alt="arrow"
        />
      </div>
    </template>
  </TwoColumnLayout>
</template>

<script>
export default {
  props: {
    isSwitched: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideArrow: {
      type: Boolean,
      required: false,
      default: false,
    },
    imageNumber: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  computed: {
    computedSection1Slot() {
      return this.isSwitched ? "section2" : "section1";
    },
    computedSection2Slot() {
      return this.isSwitched ? "section1" : "section2";
    },
  },
};
</script>
