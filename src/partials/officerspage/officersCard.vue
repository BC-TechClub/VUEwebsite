<script setup>
const props = defineProps({
  photo:{
    required:true,
  },
  name:{
    required:true
  },
  position:{
    required:true
  },
  socials:{
    required:true
  }
})
</script>

<template>
  <v-icon
    size="large"
    color="green-darken-2"
    icon="mdi-domain"
  ></v-icon>
  <VCard height="350" width="200" class="mr-6 mb-5">
    <div>
      <VImg :src="props.photo" cover/>
      <div>
      <VCardTitle>
        {{props.name}}
      </VCardTitle>
      <VCardSubtitle>
        {{props.position}}
      </VCardSubtitle>
      <VCardActions>
        <VIcon icon="mdi-linkedin"/>
        <p>{{props.socials}}</p>
        <li v-for="(socialPlatform, socialLink) in props.socials" :key="socialLink">
        <a :href="socialLink">{{ socialLink }}</a>
      </li>
      </VCardActions>
      </div>
    </div>
  </VCard>
</template>

<style scoped>

</style>
