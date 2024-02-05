<template>
  <div class="custom-bg-blue flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
      </div>

      <!-- Page sections -->
      <brainstorm/>
      <officers-page/>
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from './../partials/PageIllustration.vue'
import HeroHome from './../partials/HeroHome.vue'
import Process from './../partials/Process.vue'
import FeaturesHome from './../partials/FeaturesHome.vue'
import Tabs from './../partials/Tabs.vue'
import Target from './../partials/Target.vue'
import News from './../partials/News.vue'
import Newsletter from './../partials/Newsletter.vue'
import Footer from './../partials/Footer.vue'
import Brainstorm from "./brainstorm.vue";
import Stats from "../partials/Stats.vue";
import OfficersPage from "@/partials/officerspage/officersPage.vue";


export default {
  name: 'Home',
  components: {
    OfficersPage,
    Stats,
    Brainstorm,
    Header,
    PageIllustration,
    HeroHome,
    Process,
    FeaturesHome,
    Tabs,
    Target,
    News,
    Newsletter,
    Footer,
  },
};
</script>
<style>
.custom-bg-blue{
  background-color: #061324;
}
</style>
