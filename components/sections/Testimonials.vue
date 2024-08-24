<script setup lang="ts">
import TwoColumnLayout from "~/layouts/TwoColumnLayout.vue";
import TestimonialCard from "~/components/ui/TestimonialCard.vue";
</script>

<template>
    <TwoColumnLayout>
      <template #section1>
        <TestimonialCard
          testimonialText="S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich know-how pre nás od samého začiatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu, ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou ..."
          profileImage="profileImage1.png"
          profileName="Jozef Korman Konateľ"
          profileJob="Konateľ"
          profileWebsite="SvetNápojov.sk"
        />
      </template>
      <template #section2>
        <TestimonialCard
          testimonialText="S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich know-how pre nás od samého začiatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu, ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou ..."
          profileImage="profileImage2.png"
          profileName="Richard Wohlstein"
          profileJob=" Retail manager"
          profileWebsite="AlainDelon.sk"
        />
      </template>
    </TwoColumnLayout>
</template>