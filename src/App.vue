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
const scrollTech = ref(false)

const editScrollTech = (touch) => {
  scrollTech.value = touch
  console.log(touch)
}
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
const bgGradient = [
  {
    color: 'background-image: radial-gradient(85% 80% at 90% 5%,  #0fffbe 0%, #0c0c0c 100%)'
  },
  {
    color: 'background-image: radial-gradient(85% 80% at 90% 5%, #790fff 0%, #0c0c0c 100%)'
  },
  {
    color: 'background-image: radial-gradient(85% 80% at 90% 5%, #faff0f 0%, #0c0c0c 100%)'
  },
  {
    color: 'background-image: radial-gradient(85% 80% at 90% 5%, #c40fff 0%, #0c0c0c 100%)'
  },
  {
    color: 'background-image: radial-gradient(85% 80% at 90% 5%, #0f33ff 0%, #0c0c0c 100%)'
  },
  {
    color: 'background-image: radial-gradient(85% 80% at 90% 5%, #ff8d0f 0%, #0c0c0c 100%)'
  }
]

let fl = 0

const letters = (name) => {
  if (fl == 0) {
    for (let i = 0; i < name.text.length; i++) {
      setTimeout(() => {
        document.getElementById(name.selector).innerHTML += name.text.charAt(i)
      }, 100 * i)
    }
  }
}
let oldTouch
let touch = false

onMounted(() => {
  if (window.innerWidth < 450) {
    document.getElementById('wrapper').style.height = '100dvh'
    console.log('hello')
  }
  document.getElementById('mainWindow').addEventListener('wheel', (event) => {
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

  document.getElementById('mainWindow').addEventListener('touchstart', touchstart)
  function touchstart(event) {
    oldTouch = event.changedTouches.item(0).clientY
    document.getElementById('mainWindow').addEventListener('touchmove', touchend)
  }
  function touchend(event) {
    if (scrollTech.value) {
      return
    } else {
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
    el.classList.add('animate-[openHamburger_0.4s_ease-in-out]')
    el.classList.remove('animate-[closeHamburger_0.4s_ease-in-out]')
    setTimeout(() => {
      el.style.transform =
        'matrix3d(3.894348, 0.638783, 0, 0.002261,  0, 2.82, 0, 0,  0, 0, 1, 0, 101, 109, 0, 1) scaleY(0.2) scaleX(0.15)'
      document.getElementById('menu').style.opacity = 1
      el.style.outline = '15px solid #0f33ff'
    }, 400)
  } else if (!hamburger.value) {
    document.getElementById('menu').style.opacity = 0
    el.classList.remove('animate-[openHamburger_0.4s_ease-in-out]')
    el.classList.add('animate-[closeHamburger_0.4s_ease-in-out]')
    el.style.outline = 'none'
    setTimeout(() => {
      el.style.transform = 'matrix3d(1, 0, 0, 0,  0, 1, 0, 0,  0, 0, 1, 0,  0, 0, 0, 1) scale(1)'
    }, 400)
  }
}
</script>
<template>
  <div
    class="relative h-screen bg-[length:200%_200%] flex justify-center items-center overflow-hidden animate-[backgroundRadial_15s_ease-in-out_infinite]"
    :style="bgGradient[countPage].color"
    id="wrapper"
  >
    <div
      class="h-full w-full bg-cover bg-no-repeat bg-contain overflow-hidden transition-all duration-600"
      :style="hamburger ? 'background-color: #0c0c0c' : ' '"
      id="mainWindow"
    >
      <HeaderComponent :toggleHamburger="toggleHamburger" :editCountPage="editCountPage" />
      <div class="h-full flex justify-start items-center w-8/12 max-[800px]:w-10/12 m-auto">
        <CountPagesComponent :editCountPage="editCountPage" :countPage="countPage" />
        <WelcomePage v-if="countPage === 0" :editCountPage="editCountPage" :countPage="countPage" />
        <FrontendPageComponent v-if="countPage === 1" :editScrollTech="editScrollTech" />
        <BackendPageComponent v-if="countPage === 2" :editScrollTech="editScrollTech" />
        <WorksComponent v-if="countPage === 3" :editScrollTech="editScrollTech" />
        <ContactsPageComponent v-if="countPage === 4" />
        <HireUsPageComponent v-if="countPage === 5" />
      </div>
    </div>
    <div
      v-if="hamburger"
      class="absolute w-full h-full backdrop-blur-[1.5px] flex flex-col justify-center opacity-0 items-center text-white [&>span>div]:w-[calc(100%+4rem)] [&>span>div]:absolute [&>span>div]:h-3.5 [&>span>div]:bg-[#0f33ff] [&>span>div]:z-10 text-6xl gap-4 font-numbers animate-[openMenu_0.5s_ease-in-out] [&>span]:cursor-pointer [&>span]:flex [&>span]:justify-center [&>span]:items-center [&>span]:relative"
      id="menu"
    >
      <span v-for="i in text.length" :key="i" @click="editCountPage(i - 1), toggleHamburger()">
        <div v-if="countPage === i - 1"></div>
        <span>{{ text[i - 1].text }}</span>
      </span>
    </div>
  </div>
</template>
<style scope>
#mainWindow {
  transform-origin: 0 25% 0;
  background-position: 0px 0px;
}
</style>
