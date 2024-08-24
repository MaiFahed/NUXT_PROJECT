<script setup lang="ts">
import IconListItem from "~/components/ui/IconListItem.vue";
import TwoColumnLayout from "~/layouts/TwoColumnLayout.vue";
import ButtonCompo from "~/components/ui/ButtonCompo.vue";
</script>

<template>
    
    <TwoColumnLayout>
      <template #section1>
        <!-- Content for Section 1 -->
        <div
          class="text-black font-extrabold text-left font-mulish text-[32px] leading-[44px] md:text-[40px] md:leading-[60px] mb-4 mt-4"
        >
          Zameriame sa na to
          <span class="border-b-[14px] border-pink-200">najdôležitejšie.</span>
        </div>
      </template>
      <template #section2>
        <div></div>
      </template>
    </TwoColumnLayout>

    <TwoColumnLayout :reverseOrder="true">
      <template #section1>
        <!-- Content for Section 1 -->
        <div class="flex flex-col gap-10">
          <div
            class="text-black text-left font-muli text-[26px] leading-[40px]"
          >
            Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu pomocou UX
            auditu.
          </div>
          <ButtonCompo />
        </div>
      </template>
      <template #section2>
        <!-- Content for Section 2 -->
        <div>
          <ul class="space-y-6">
            <IconListItem> Informačnú architektúru a štruktúru </IconListItem>
            <IconListItem> Správanie návštevníkov na kľúčových </IconListItem>
            <IconListItem> Rýchlosť a dostupnosť stránok </IconListItem>
            <IconListItem> Váš biznis a vašich zákazníkov </IconListItem>
            <IconListItem> Ciele, ktoré chcete dosiahnuť </IconListItem>
            <IconListItem> Webovú analytiku </IconListItem>
          </ul>
        </div>
      </template>
    </TwoColumnLayout>
</template>