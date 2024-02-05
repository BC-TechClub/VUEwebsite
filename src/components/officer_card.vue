<script setup>
import default_png from "../assets/icons/Square.png"
const props = defineProps({
  photo:{
    required:true,
    default:default_png
  },
  name:{
    required:true
  },
  position:{
    required:true
  },
  socials:{
    type:Array,
  }
})
</script>

<template>
<div class="ma-10">
  <VCard>
    <VImg :src="props.photo" aspect-ratio="1"/>
    <VCardTitle>
      {{props.name}}
    </VCardTitle>
    <VCardText>
      {{props.position}}
    </VCardText>
    <VList>

    </VList>
  </VCard>
</div>
</template>

<style scoped>

</style>