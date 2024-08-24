<script setup lang="ts">
import TwoColumnLayout from "~/layouts/TwoColumnLayout.vue";
import IconListItem from "../ui/IconListItem.vue";
import ButtonCompo from "../ui/ButtonCompo.vue";
import QRcode from "../ui/QRcode.vue";
</script>

<template>
  <TwoColumnLayout :reverseOrder="true">
    <template #section1>
      <div
        class="text-black font-extrabold text-left font-mulish text-[30px] leading-[44px] md:text-[45px] md:leading-[60px] mb-4 mt-4">
        Rýchle <span class="border-b-[14px] border-pink-200">výsledky</span>
        <br />
        pomocou UX <br class="hidden md:block" />
        audit.
      </div>
    </template>
    <template #section2>
      <!-- Content for Section 2 -->
      <div class="flex items-center justify-start gap-1 lg:justify-around">
        <img src="~/assets/images/Google.png" alt="Logo" class="w-[200px] h-auto" />

        <QRcode />
      </div>
    </template>
  </TwoColumnLayout>


  <TwoColumnLayout>
    <template #section1>
      <div class="text-black text-left font-muli text-[20px] leading-[40px] md:text-[24px]">
        UX auditom vášho riešenia lepšie <br />
        pochopíte, ako vaši zákazníci používajú <br />
        váš produkt,
        <span class="font-extrabold">
          zvýšite ich spokojnosť <br />
          a hlavne vaše zisky.</span>
      </div>
    </template>
    <template #section2>
      <div>
        <ul class="space-y-6">
          <IconListItem> Odhalíme nedostatky na vašej stránke </IconListItem>
          <IconListItem>
            Zvýšime konverzný pomer vašich stránok
          </IconListItem>
          <IconListItem> Zvýšime výkon marketingových kampaní </IconListItem>
          <IconListItem> Znížime vaše náklady na vývoj </IconListItem>
          <IconListItem> Zvýšime návštevnosť vašich stránok </IconListItem>
        </ul>
      </div>
    </template>
  </TwoColumnLayout>



  <TwoColumnLayout>
    <template #section1>
      <div class="text-black text-left font-muli text-[20px] leading-[40px] md:text-[22px]">
        Dosiahnite lepšie výsledky vašej webstránky alebo e-shopu
        <span class="font-extrabold">pomocou UX auditu.</span>
      </div>
    </template>
    <template #section2>
      <ButtonCompo />
    </template>
  </TwoColumnLayout>
</template>