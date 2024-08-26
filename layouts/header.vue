<script setup>
import companyLogo from "~/components/ui/companyLogo.vue";
import ButtonCompo from "~/components/ui/ButtonCompo.vue";
</script>
<template>
  <section
    class="bg-custom-gradient h-[60vh] w-full flex flex-col p-8 lg:flex-row"
  >
    <div
      class="flex-1 flex justify-start items-start lg:justify-end lg:items-start"
    >
      <companyLogo />
    </div>

    <div
      class="flex-1 justify-center items-center flex lg:justify-center lg:items-end text-white font-extrabold text-center font-mulish text-[30px] leading-[45px] lg:text-[50px] lg:leading-[80px]"
    >
      Zvýšte svoje zisky <br />
      optimalizáciou vášho <br />
      eshopu.
    </div>

    <div
      class="flex-1 flex justify-center items-center lg:justify-start lg:items-start"
    >
      <ButtonCompo width="w-1/2" />
    </div>
  </section>
</template>
