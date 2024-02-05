<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <img style="height: 30px; width: 30px" src="../assets/Tech Club.png"/>
          </router-link>

        </div>
        <span style="font-family: 'League Spartan', sans-serif; font-weight: bold; color: white">BC TECH CLUB</span>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link to="/about" class="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">About</router-link>
            </li>
            <li>
              <router-link to="/journey" class="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Journey</router-link>
            </li>
            <li>
              <router-link to="/hackathons" style="background-color: #FBC646" class="btn-sm text-black hover:bg-yellow-200 ml-3">Hackathons</router-link>
            </li>
          </ul>

        </nav>

        <!-- Mobile menu -->
        <div class="md:hidden">

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav id="mobile-nav" ref="mobileNav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" :style="[ mobileNavOpen ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 } : { maxHeight: 0, opacity: .8 } ]">
            <ul class="bg-gray-800 px-4 py-2">
              <li>
                <router-link to="/features" class="flex text-gray-300 hover:text-gray-200 py-2">Features</router-link>
              </li>
              <li>
                <router-link to="/pricing" class="flex text-gray-300 hover:text-gray-200 py-2">Pricing</router-link>
              </li>
              <li>
                <router-link to="/blog" class="flex text-gray-300 hover:text-gray-200 py-2">Blog</router-link>
              </li>
              <li>
                <router-link to="/about" class="flex text-gray-300 hover:text-gray-200 py-2">About us</router-link>
              </li>
              <li class="py-2 my-2 border-t border-b border-gray-700">
                <span class="flex text-gray-300 py-2">Support</span>
                <ul class="pl-4">
                  <li>
                    <router-link to="/contact" class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Contact us</router-link>
                  </li>
                  <li>
                    <router-link to="/help" class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Help center</router-link>
                  </li>
                  <li>
                    <router-link to="/404" class="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">404</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/signin" class="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</router-link>
              </li>
              <li>
                <router-link to="/signup" class="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</router-link>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from './../utils/Dropdown.vue'

export default {
  name: 'Header',
  components: {
    Dropdown
  },
  data: function () {
    return {
      mobileNavOpen: false
    }
  },
  methods: {
    clickOutside(e) {
      if (!this.mobileNavOpen || this.$refs.mobileNav.contains(e.target) || this.$refs.hamburger.contains(e.target)) return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    }    
  },  
  mounted() {
    document.addEventListener('click', this.clickOutside)    
    document.addEventListener('keydown', this.keyPress)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyPress)
  }
};
</script>