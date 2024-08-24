<script setup>
import StepCard from "../ui/StepCard.vue";
</script>
<template>
  <div class="flex justify-start p-4 lg:justify-center lg:items-center">
    <div
      class="text-black font-extrabold text-left lg:text-center font-mulish text-[32px] leading-[44px] md:text-[40px] md:leading-[60px]"
    >
      Rýchla a jednoduchá <br />
      cesta k
      <span class="border-b-[14px] border-pink-200">výsledkom.</span>
    </div>
  </div>

  <StepCard
    imageNumber="1.png"
    title="Ciele auditu"
    description="Určíme si <span class='font-bold'>spoločné ciele</span>, nastavíme očakávania a definujeme <span class='font-bold'>cieľovú skupinu a jej potreby.</span>"
  />

  <StepCard
    imageNumber="2.png"
    title="Zbieranie dát"
    description="Zvolíme vhodné metodiky a nástroje <span class='font-bold'>na sledovanie správania používateľov a zbieranie dát.</span>"
    :isSwitched="true"
  />

  <StepCard
    imageNumber="3.png"
    title="Vyhodnotenie"
    description="Vyhodnotíme <span class='font-bold'>nazbierané dáta</span>, zosumarizujeme všetky naše zistenia a <span class='font-bold'>navrhneme riešenia.</span>"
  />

  <StepCard
    imageNumber="4.png"
    title="Výsledky auditu"
    description="<span class='font-bold'>Osobná prezentácia výsledkov a navrhnutých riešení</span> s podrobnou dokumentáciou."
    :isSwitched="true"
    :hideArrow="true"
  />
</template>
