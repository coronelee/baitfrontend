<script setup>
import FrontendPageComponent from './components/FrontendPageComponent.vue'
import BackendPageComponent from './components/BackendPageComponent.vue'
import ContactsPageComponent from './components/ContactsPageComponent.vue'
import HireUsPageComponent from './components/HireUsPageComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import CountPagesComponent from './components/CountPagesComponent.vue'
import WelcomePage from './components/WelcomePage.vue'
import { onMounted, ref } from 'vue'
const countPage = ref(0)
const hamburger = ref(false)
const editCountPage = (page) => {
  countPage.value = page
  letters(text[countPage.value])
}
const text = [
  {
    selector: '.welcome',
    text: 'Welcome'
  },
  {
    selector: '.front',
    text: 'Frontend'
  },
  {
    selector: '.back',
    text: 'Backend'
  },
  {
    selector: '.contacts',
    text: 'Contacts'
  },
  {
    selector: '.hire',
    text: 'Hire us'
  }
]

const letters = (text) => {
  for (let i = 0; i < text.text.length; i++) {
    setTimeout(() => {
      document.querySelector(text.selector).innerHTML += text.text.charAt(i)
    }, 100 * i)
  }
}
onMounted(() => {
  window.addEventListener('wheel', (event) => {
    if (hamburger.value) {
      return
    } else if (!hamburger.value && countPage.value === 0 && event.deltaY < 0) {
      countPage.value = 4
      letters(text[countPage.value])
    } else if (!hamburger.value && countPage.value === 4 && event.deltaY > 0) {
      countPage.value = 0
      letters(text[countPage.value])
    } else {
      countPage.value += Math.sign(event.deltaY)
      letters(text[countPage.value])
    }
  })
  letters(text[countPage.value])
})

const toggleHamburger = () => {
  const el = document.querySelector('#mainWindow')
  hamburger.value = !hamburger.value
  if (hamburger.value) {
    el.classList.remove('animate-[closeHamburger_1s_ease-in-out]')
    el.classList.add('animate-[openHamburger_1s_ease-in-out]')

    el.style.border = '8px solid #0a24b5'
    setTimeout(() => {
      document.getElementById('menu').style.opacity = 1
    }, 1000)
    setTimeout(() => {
      el.style.transform =
        'matrix3d(3.894348, 0.638783, 0, 0.002261,  0, 2.82, 0, 0,  0, 0, 1, 0, 101, 109, 0, 1) scaleY(0.2) scaleX(0.15)'
    }, 1000)
  } else if (!hamburger.value) {
    el.classList.remove('animate-[openHamburger_1s_ease-in-out]')
    el.classList.add('animate-[closeHamburger_1s_ease-in-out]')
    el.style.border = 'none'

    document.getElementById('menu').style.opacity = 0

    setTimeout(() => {
      el.style.transform = 'matrix3d(1, 0, 0, 0,  0, 1, 0, 0,  0, 0, 1, 0, 0, 0, 0, 1) scale(1)'
    }, 1000)
  }
}
</script>
<template>
  <div class="relative bg-[#0c0c0c]">
    <div class="bg-[#0c0c0c] h-screen" id="mainWindow">
      <HeaderComponent :toggleHamburger="toggleHamburger" />
      <div class="h-full flex justify-start items-end w-8/12 m-auto">
        <CountPagesComponent :editCountPage="editCountPage" :countPage="countPage" />
        <WelcomePage v-if="countPage === 0" />
        <FrontendPageComponent v-if="countPage === 1" />
        <BackendPageComponent v-if="countPage === 2" />
        <ContactsPageComponent v-if="countPage === 3" />
        <HireUsPageComponent v-if="countPage === 4" />
      </div>
    </div>
    <div
      v-if="hamburger"
      class="absolute top-1/3 right-1/3 flex flex-col justify-center opacity-0 items-center text-white text-4xl gap-4 font-numbers animate-[openMenu_1s_ease-in-out]"
      id="menu"
      @click="toggleHamburger"
    >
      <span
        :style="countPage == 0 ? 'animation: pulse 1s infinite' : ''"
        @click="editCountPage(0), toggleHamburger"
        >Welcome</span
      >
      <span
        :style="countPage == 1 ? 'animation: pulse 1s infinite' : ''"
        @click="editCountPage(1), toggleHamburger"
        >Frontend</span
      >
      <span
        :style="countPage == 2 ? 'animation: pulse 1s infinite' : ''"
        @click="editCountPage(2), toggleHamburger"
        >Backend</span
      >
      <span
        :style="countPage == 3 ? 'animation: pulse 1s infinite' : ''"
        @click="editCountPage(3), toggleHamburger"
        >Contacts</span
      >
      <span
        :style="countPage == 4 ? 'animation: pulse 1s infinite' : ''"
        @click="editCountPage(4), toggleHamburger"
        >Hire us</span
      >
    </div>
  </div>
</template>
<style scope>
#mainWindow {
  transform-origin: 0px 0px 0px;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
