<script setup>
import Lighting from '../assets/home/Tech_Club_New_Website.png'
import LightingGif from '../assets/home/gifagain.gif'

</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <!-- Hero content -->
      <div class="relative pt-32 pb-10 md:pt-40 md:pb-16">


        <!-- Section header -->
          <VRow>
            <VCol cols='12' class="d-flex justify-center">
              <h1 style=" font-size: 100px; font-family: 'League Spartan', sans-serif; font-weight: bold">BRAINSTORM!</h1>
            </VCol>
            <VCol cols="12" class="d-flex justify-center">
              <div class="image-container">

              <img :src="LightingGif" class="animated-image">
              <img :src="Lighting" class="static-image"/>
              </div>
            </VCol>
          </VRow>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');
.image-container {
  position: relative;
  width: 300px; /* Set this to the size of your images */
  height: 200px; /* Set this to the size of your images */
  /* You can also adjust the container's margin if necessary */
}

h1 {
  color: white;
}

/* Static thunder image */
.static-image{
  height: 200px;
  width: 300px;
  display: block;
  margin: auto;
}

/* Apply the negative margin to all images within the container */
.image-container img {
  margin-top: -30px; /* Adjusts both the static and animated images */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
}

.image-container .animated-image {
  opacity: 0;
}

.image-container:hover .animated-image {
  opacity: 1;
}

.image-container:hover .static-image {
  opacity: 0;
}
</style>
