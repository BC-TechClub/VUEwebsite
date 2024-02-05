<template>
  <section class="bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <div class="relative">
          <!-- Section header -->
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 class="h2 font-cabinet-grotesk text-gray-100">OUR JUDGES & TEAM</h2>
          </div>

          <!-- Grid -->
          <div class="max-w-2xl mx-auto grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:max-w-none items-start">
            <JudgeCard v-for="(Judge, index) in Judges" :desciption="Judge.description" :name="Judge.name" :photo="Judge.photo"/>
          </div>


        </div>


      </div>
    </div>
  </section>
</template>

<script setup>
import JudgeCard from "@/components/Judges and Teams/JudgeCard.vue";

const Judges = [{
  name:"Judge 1",
  photo:"Random Shit",
  description: "My name is Judge 1. I defy the odds. Ratahhtahhtahhtahhh. Peaky Blinders"
  },
  {
    "name": "Judge 2",
    "photo": "Eccentric Elegance",
    "description": "I am Judge 2, the silent guardian of order. With a gaze that pierces through falsehood, I uphold the scales of justice. In the whisper of my verdict, truth finds its voice. Like a shadow in the night, I observe, deliberate, and ensure that justice whispers truth."
  },
  {
    "name": "Judge 3",
    "photo": "Vintage Valor",
    "description": "As Judge 3, I am the keeper of time-honored traditions. With a hammer that echoes in the halls of justice, I blend the wisdom of the past with the challenges of the present. My voice is the bridge between eras, ensuring that every decree is a testament to enduring principles."
  },
  {
    "name": "Judge 4",
    "photo": "Futuristic Foresight",
    "description": "Judge 4 stands at the crossroads of innovation and law. With a vision set far beyond the horizon, I navigate the complexities of tomorrow. My rulings pave the way for progress, ensuring that the future is anchored in fairness and foresight."
  },
  {
    "name": "Judge 5",
    "photo": "Whimsical Wisdom",
    "description": "In the realm of justice, I am Judge 5, the embodiment of whimsy and wisdom. My laughter fills the court, reminding all that justice, while stern, is also human. My judgments are a blend of levity and gravity, ensuring that the scales balance not just the letter, but the spirit of the law."
  },
]
</script>
