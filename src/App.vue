<script setup>
import FrontendPageComponent from './components/FrontendPageComponent.vue'
import BackendPageComponent from './components/BackendPageComponent.vue'
import ContactsPageComponent from './components/ContactsPageComponent.vue'
import HireUsPageComponent from './components/HireUsPageComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import CountPagesComponent from './components/CountPagesComponent.vue'
import WelcomePage from './components/WelcomePage.vue'
import WorksComponent from './components/WorksComponent.vue'
import { onMounted, ref } from 'vue'
const countPage = ref(0)
const hamburger = ref(false)
const editCountPage = (page) => {
  if (page == countPage.value) {
    return
  } else {
    countPage.value = page
    letters(text[countPage.value])
  }
}
const text = [
  {
    selector: 'welcome',
    text: 'Welcome'
  },
  {
    selector: 'front',
    text: 'Frontend'
  },
  {
    selector: 'back',
    text: 'Backend'
  },
  {
    selector: 'works',
    text: 'Works'
  },
  {
    selector: 'contacts',
    text: 'Contacts'
  },
  {
    selector: 'hire',
    text: 'Hire us'
  }
]
let fl = 0

const letters = (text) => {
  if (fl == 0) {
    for (let i = 0; i < text.text.length; i++) {
      setTimeout(() => {
        document.getElementById(text.selector).innerHTML += text.text.charAt(i)
      }, 100 * i)
    }
  }
}
let oldTouch
let touch = false

onMounted(() => {
  window.addEventListener('wheel', (event) => {
    if (fl === 0) {
      if (hamburger.value) {
        return
      } else if (!hamburger.value && countPage.value === 0 && event.deltaY < 0) {
        countPage.value = 5
        letters(text[countPage.value])
      } else if (!hamburger.value && countPage.value === 5 && event.deltaY > 0) {
        countPage.value = 0
        letters(text[countPage.value])
      } else {
        countPage.value += Math.sign(event.deltaY)
        letters(text[countPage.value])
      }
      fl = 1
      setTimeout(() => {
        fl = 0
      }, 500)
    }
  })
  letters(text[countPage.value])

  document.addEventListener('touchstart', touchstart)
  function touchstart(event) {
    oldTouch = event.changedTouches.item(0).clientY
    document.addEventListener('touchmove', touchend)
  }
  function touchend(event) {
    if (!touch) {
      touch = true
      setTimeout(() => {
        if (hamburger.value) {
          return
        } else if (
          !hamburger.value &&
          countPage.value === 0 &&
          oldTouch < event.changedTouches.item(0).clientY
        ) {
          countPage.value = 5
          letters(text[countPage.value])
        } else if (
          !hamburger.value &&
          countPage.value === 5 &&
          oldTouch > event.changedTouches.item(0).clientY
        ) {
          countPage.value = 0
          letters(text[countPage.value])
        } else {
          countPage.value += Math.sign(oldTouch - event.changedTouches.item(0).clientY)
          letters(text[countPage.value])
        }
      }, 50)
    }

    setTimeout(() => {
      touch = false
    }, 100)
  }
})

const toggleHamburger = () => {
  const el = document.querySelector('#mainWindow')
  hamburger.value = !hamburger.value
  if (hamburger.value) {
    el.classList.remove('animate-[closeHamburger_0.4s_ease-in-out]')
    el.classList.add('animate-[openHamburger_0.4s_ease-in-out]')

    el.style.outline = '30px solid #0f33ff'
    setTimeout(() => {
      document.getElementById('menu').style.opacity = 1
    }, 400)
    setTimeout(() => {
      el.style.transform =
        'matrix3d(3.894348, 0.638783, 0, 0.002261,  0, 2.82, 0, 0,  0, 0, 1, 0, 101, 109, 0, 1) scaleY(0.2) scaleX(0.15)'
    }, 400)
  } else if (!hamburger.value) {
    el.classList.remove('animate-[openHamburger_0.4s_ease-in-out]')
    el.classList.add('animate-[closeHamburger_0.4s_ease-in-out]')
    el.style.outline = 'none'

    document.getElementById('menu').style.opacity = 0

    setTimeout(() => {
      el.style.transform = 'matrix3d(1, 0, 0, 0,  0, 1, 0, 0,  0, 0, 1, 0, 0, 0, 0, 1) scale(1)'
    }, 400)
  }
}
</script>
<template>
  <div
    class="relative bg-[#0c0c0c] flex justify-center items-center overflow-hidden animate-[backgroundRadial_5s_ease-in-out_infinite]"
    :style="countPage === 5 || countPage === 4 ? 'background: #0c0c0c' : ''"
    id="wrapper"
  >
    <div class="h-screen w-screen bg-cover bg-no-repeat bg-contain overflow-hidden" id="mainWindow">
      <HeaderComponent :toggleHamburger="toggleHamburger" :editCountPage="editCountPage" />
      <div class="h-full flex justify-start items-end w-8/12 max-[800px]:w-10/12 m-auto">
        <CountPagesComponent :editCountPage="editCountPage" :countPage="countPage" />
        <WelcomePage v-if="countPage === 0" :editCountPage="editCountPage" :countPage="countPage" />
        <FrontendPageComponent v-if="countPage === 1" />
        <BackendPageComponent v-if="countPage === 2" />
        <WorksComponent v-if="countPage === 3" />
        <ContactsPageComponent v-if="countPage === 4" />
        <HireUsPageComponent v-if="countPage === 5" />
      </div>
    </div>
    <div
      v-if="hamburger"
      class="absolute w-screen h-screen backdrop-blur-[1.5px] flex flex-col justify-center opacity-0 items-center text-white [&>span>div]:w-[calc(100%+4rem)] [&>span>div]:absolute [&>span>div]:h-3.5 [&>span>div]:bg-[#0f33ff] [&>span>div]:z-10 text-6xl gap-4 font-numbers animate-[openMenu_0.5s_ease-in-out] [&>span]:cursor-pointer [&>span]:flex [&>span]:justify-center [&>span]:items-center [&>span]:relative"
      id="menu"
    >
      <span @click="editCountPage(0), toggleHamburger()">
        <div v-if="countPage === 0"></div>
        <span class="">Welcome</span>
      </span>
      <span @click="editCountPage(1), toggleHamburger()">
        <div v-if="countPage === 1"></div>
        <span>Frontend</span></span
      >
      <span @click="editCountPage(2), toggleHamburger()">
        <div v-if="countPage === 2"></div>
        <span>Backend</span></span
      >
      <span @click="editCountPage(3), toggleHamburger()">
        <div v-if="countPage === 3"></div>
        <span>Works</span></span
      >
      <span @click="editCountPage(4), toggleHamburger()">
        <div v-if="countPage === 4"></div>
        <span>Contacts</span></span
      >
      <span @click="editCountPage(5), toggleHamburger()">
        <div v-if="countPage === 5"></div>
        <span>Hire us</span>
      </span>
    </div>
  </div>
</template>
<style scope>
#mainWindow {
  transform-origin: 0 25% 0;
}
#wrapper {
  background-image: radial-gradient(85% 80% at 90% 5%, #0f33ff 0%, #0c0c0c 100%);
  background-size: 200% 200%;
  background-position: 0px 0px;
}
</style>
