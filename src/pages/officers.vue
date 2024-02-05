<script>
import Abraham_pic from "../assets/Officer Photos/1.png"
import Thomas_pic from "../assets/Officer Photos/2.png"
import Joseph_pic from "../assets/Officer Photos/3.png"
import Yunseo_pic from "../assets/Officer Photos/4.png"
import Officer_card from "../components/officer_card.vue";

export default{
  components: {Officer_card},
  data(){
    return{
      officers:[
        {name:"Abraham Guan", position:"President", photo:Abraham_pic, socials:[]},
        {name:"Thomas Suen", position:"President", photo:Thomas_pic, socials:[]},
        {name:"Joseph Chamdani", position:"President", photo:Joseph_pic, socials:[]},
        {name:"Yunseo Kim", position:"President", photo:Yunseo_pic, socials:[]},
      ]
    }
  }
}
</script>

<template>
<VSheet>
  <officer_card
      v-for="(officer, index) in officers"
      :socials="null"
      :position="officer.position"
      :name="officer.name"
      :photo="officer.photo"
  />
</VSheet>
</template>

<style scoped>

</style>