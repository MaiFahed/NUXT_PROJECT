<script setup>
import companyLogo from "~/components/ui/companyLogo.vue";
import ButtonCompo from "~/components/ui/ButtonCompo.vue";
</script>
<template>
  <section
    class="bg-custom-gradient h-[60vh] w-full flex flex-col p-8 md:flex-row"
  >
    <div
      class="flex-1 flex justify-start items-start md:justify-end md:items-start"
    >
      <companyLogo />
    </div>

    <div
      class="flex-1 justify-center items-center flex md:justify-center md:items-end text-white font-extrabold text-center font-mulish text-[30px] leading-[45px] md:text-[50px] md:leading-[80px]"
    >
      Zvýšte svoje zisky <br />
      optimalizáciou vášho <br />
      eshopu.
    </div>

    <div
      class="flex-1 flex justify-center items-center md:justify-start md:items-start"
    >
      <ButtonCompo width="w-1/2" />
    </div>
  </section>
</template>
