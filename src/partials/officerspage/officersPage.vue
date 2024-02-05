<script>
import Abraham_pic from "../../assets/Officer Photos/1.png"
import Thomas_pic from "../../assets/Officer Photos/2.png"
import Joseph_pic from "../../assets/Officer Photos/3.png"
import Yunseo_pic from "../../assets/Officer Photos/4.png"
import Yejin_pic from "../../assets/Officer Photos/5.png"
import Officer_card from "./officersCard.vue";
import AboutUs from "@/components/about/AboutUs.vue";
export default{
  components: {AboutUs, Officer_card},
  data(){
    return{
      officers:[
        {name:"Abraham Guan", position:"President", photo:Abraham_pic, socials:{"linkedin":"https://www.linkedin.com/in/abraham-guan/"}},
        {name:"Thomas Suen", position:"Lead Developer", photo:Thomas_pic, socials:{"linkedin":"https://www.linkedin.com/in/thomas-suen-84776a262/","website":"owenisas.com"}},
        {name:"Joseph Chamdani", position:"Front End", photo:Joseph_pic, socials:{"linkedin":"https://www.linkedin.com/in/joseph-davis-chamdani/", "website" :"https://joechamdani.com/"}},
        {name:"Yunseo Kim", position:"Back End", photo:Yunseo_pic, socials:{"linkedin":"https://www.linkedin.com/in/yunseo/"}},
        {name:"Yejin", position:"Creative Media", photo:Yejin_pic, socials:{"linkedin":"https://www.linkedin.com/in/yejin-hwang-3b6035281/"}},
      ]
    }
  }
}
</script>

<template>
  <VRow style="background-color: white">
    <VCol cols="5" md="12">
      <AboutUs/>
    </VCol>
    <VCol cols="7" md="12">
      <VRow>
      <VCol
        v-for="(officer, index) in officers"
        cols="4"
      >
        <officer_card
          class="justify-start align-center"
          :socials="officer.socials"
          :position="officer.position"
          :name="officer.name"
          :photo="officer.photo"
        />
      </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>

<style scoped>

</style>
