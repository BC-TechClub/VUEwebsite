<script setup>
import icon from './img.png'
</script>

<template>
<VCol class="align-center justify-center">
  <VCardTitle class="text-center" style="font-size: 100px; font-weight: 700">
    ABOUT US
  </VCardTitle>
  <VSheet
    class="align-center justify-center flex-wrap text-center mx-12 pb-7"
    color="#061324"
  >
    <VCardText>
      BC Tech Club is a tech community run by students in Bellevue College.
    </VCardText>
    <VCardText>
      This year, we focus on website development and hackathons.
    </VCardText>
    <VBtn class="align-center" color="#555FF7" :prepend-icon="icon">
      <a href="https://discord.gg/4hw2raAgPd"/>
      JOIN US!
    </VBtn>
  </VSheet>
</VCol>
</template>

<style scoped>

</style>
