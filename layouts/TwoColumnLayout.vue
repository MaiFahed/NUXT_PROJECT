<template>
  <div 
    :class="[
      'flex flex-col lg:flex-row gap-10 mb-10 lg:gap-7 mt-5',
      margin,
    ]"
    >
    <div
      :class="{
        'order-2 lg:order-1': reverseOrder,
        'order-1 lg:order-1': !reverseOrder,
        'hidden lg:block':
          hideArrowSection && computedSection2Slot === 'section1',
          
      }"
      class="w-full lg:w-1/2 flex lg:grid lg:grid-cols-12 items-center justify-center p-4 lg:p-0"
    >
      <div class="w-full lg:col-start-7 lg:col-span-12">
        <slot name="section1"></slot>
      </div>
    </div>

    <div
      :class="{
        'order-1 lg:order-2': reverseOrder,
        'order-2 lg:order-2': !reverseOrder,
        'hidden lg:block':
          hideArrowSection && computedSection2Slot === 'section2',
        'hidden': hideSection2
      }"
      class="w-full lg:w-1/2 flex lg:grid lg:grid-cols-12 items-start justify-start p-4 lg:p-0"
    >
      <div class="w-full lg:col-start-1 lg:col-span-6">
        <slot name="section2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoColumnLayout",
  props: {
    reverseOrder: {
      type: Boolean,
      default: false,
    },
    hideArrowSection: {
      type: Boolean,
      default: false,
    },
    hideSection2: {
      type: Boolean,
      default: false,
    },
    computedSection2Slot: {
      type: String,
      required: false,
    },
    margin: {
      type: String,
      default: "mb-0 mt-0",
    },
  },
};
</script>
