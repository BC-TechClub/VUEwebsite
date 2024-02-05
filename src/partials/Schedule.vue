<script setup>
  // Script setup area can be used for defining component logic and state.
  import { ref } from 'vue';

  // Define a reactive variable for the selected day
  let selectedDay = ref(1);

  // Define functions to set the selected day
  const selectDay1 = () => selectedDay.value = 1;
  const selectDay2 = () => selectedDay.value = 2;
</script>

<template>
  <section class="bg-gray-900">
    <VCol cols="12" class="justify-center pl-9">
      <VCol class="header">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-4">
          <h2 class="h2 font-cabinet-grotesk">SCHEDULE</h2>
        </div>
        <div class="nav">
          <button class="nav-button" :class="{ 'selected': selectedDay === 1 }" @click="selectDay1">Day 1</button>
          <button class="nav-button" :class="{ 'selected': selectedDay === 2 }" @click="selectDay2">Day 2</button>
        </div>
      </VCol>
      <div id="content_1" class="main-content" v-show="selectedDay === 1">
        <div class="schedule">
          <h1>Saturday, 1/13</h1>
          <div class="event">
            <div class="event-time">9:00 AM - 9:30 AM</div>
            <div class="event-title">Opening Ceremony</div>
          </div>
          <div class="event">
            <div class="event-time">9:30 AM - 10:00 AM</div>
            <div class="event-title">Team Formation and Networking</div>
          </div>
          <div class="event">
            <div class="event-time">10:00 AM - 12:00 PM</div>
            <div class="event-title">Workshop 1: AI</div>
          </div>
          <div class="event">
            <div class="event-time">12:00 PM - 1:00 PM</div>
            <div class="event-title">Lunch Break</div>
          </div>
          <div class="event">
            <div class="event-time">1:00 PM - 3:00 PM</div>
            <div class="event-title">Hackathon Begins - Coding Session</div>
          </div>
          <div class="event">
            <div class="event-time">3:15 PM - 5:00 PM</div>
            <div class="event-title">Workshop 2: GITHUB</div>
          </div>
          <div class="event">
            <div class="event-time">5:00 PM - 6:00 PM</div>
            <div class="event-title">Dinner Break</div>
          </div>
          <div class="event">
            <div class="event-time">6:00 PM - 8:00 PM</div>
            <div class="event-title">Mentor Circulation</div>
          </div>
          <div class="event">
            <div class="event-time">8:00 PM - 10:00 PM</div>
            <div class="event-title">Evening Coding Session</div>
          </div>
          <div class="event">
            <div class="event-time">10:00 PM - 12:00 AM</div>
            <div class="event-title">Optional Overnight Coding</div>
          </div>
        </div>
        <div class="image-box">
          <img src="../images/schedule_day1.jpg" alt="Event Image">
        </div>
      </div>
      <div id="content_2" class="main-content" v-show="selectedDay === 2">
        <div class="schedule">
          <h1>Sunday, 1/14</h1>
          <div class="event">
            <div class="event-time">9:00 AM - 12:00 PM</div>
            <div class="event-title">Morning Coding Session</div>
          </div>
          <div class="event">
            <div class="event-time">12:00 PM - 1:00 PM</div>
            <div class="event-title">Lunch Break</div>
          </div>
          <div class="event">
            <div class="event-time">1:00 PM - 2:00 PM</div>
            <div class="event-title">Project Submissions and Preparations for Presentations</div>
          </div>
          <div class="event">
            <div class="event-time">2:00 PM - 3:00 PM</div>
            <div class="event-title">Closing Ceremony</div>
          </div>
        </div>
        <div class="image-box">
          <img src="../images/schedule_day2.jpg" alt="Event Image">
        </div>
      </div>
    </VCol>
  </section>
</template>

<style scoped>

.header {
  width: calc(100% - 2rem); /* Account for padding */
  padding: 1rem;
  background-color: #D4ADFC;
  box-sizing: border-box;
  margin-bottom: 1rem; /* Add some margin between header and content */
  border-radius: 10px;
}

.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.nav-button {
  background-color: #0A0F47;
  border: none;
  padding: 0.5rem 2rem; /* Increase horizontal padding for a flatter look */
  margin: 0 0.5rem;
  border-radius: 20px; /* Increase border-radius for a more oval shape */
  cursor: pointer;
  color: white;
}

.nav-button:hover {
  background-color: #FF90C2;
}

.nav-button.selected {
  background-color: #FF90C2;
}

.main-content {
  display: flex;
  width: calc(100% - 2rem); /* Account for padding, matching the header width */
  box-sizing: border-box;
  gap: 1rem; /* This adds space between the schedule and image box */
}

.schedule {
  flex: 2.5; /* Takes 3 parts of the available space */
  padding: 1rem;
  background-color: #D4ADFC;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Enables scrolling for overflow content */
  text-align: center;
}

.image-box {
  flex:2; /* Takes 2 parts of the available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #D4ADFC;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-box img {
  max-width: 100%;
  height: auto; /* Maintain aspect ratio of images */
  border-radius: 5px;
}

h1 {
  color: #0A0F47;
  font-size: larger;
  font-weight: bold;
  text-decoration: underline;
}

.event {
  margin: 1rem 0;
}

time {
  color: #0A0F47;
}

.event-time {
  font-weight: bold;
  color: #0A0F47;
}

/* Add additional styles and responsive design as needed */
</style>
