<script setup>
const props = defineProps({
  editScrollTech: Function
})
import { onMounted, ref } from 'vue'

const touch = ref(false)
onMounted(() => {
  document.getElementById('tech').addEventListener('touchstart', (event) => {
    touch.value = !touch.value
    props.editScrollTech(touch.value)
  })
  document.getElementById('tech').addEventListener('touchend', (event) => {
    touch.value = !touch.value
    props.editScrollTech(touch.value)
  })
})
const techFront = [
  {
    img: '/front/react.svg',
    link: 'https://reactjs.org/'
  },
  {
    img: '/front/vue.svg',
    link: 'https://vuejs.org/'
  },
  {
    img: '/front/next.svg',
    link: 'https://nextjs.org/'
  },
  {
    img: '/front/scss.svg',
    link: 'https://sass-lang.com/'
  },
  {
    img: '/front/tailwindcss.svg',
    link: 'https://tailwindcss.com/'
  },
  {
    img: '/front/js.svg',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript'
  },
  {
    img: '/front/ts.svg',
    link: 'https://www.typescriptlang.org/'
  },
  {
    img: '/front/git.svg',
    link: 'https://github.com/'
  },
  {
    img: '/front/vite.svg',
    link: 'https://vitejs.dev/'
  }
]
</script>
<template>
  <div
    class="text-white w-5/6 h-dvh font-maintext text-xl flex justify-between items-center gap-4 animate-[openPage_0.8s_ease-in-out]"
  >
    <div class="w-1/2 flex flex-col max-[1300px]:w-full">
      <b class="text-3xl">Привет!</b>
      <span class="text-5xl"> Меня зовут <span class="text-red-500">Антон</span>, <br /> </span>
      <b>Я Frontend-разработчик</b>
      <span>Увлеченный созданием интерактивных, доступных и адаптивных веб-сайтов. </span>
      <div class="mt-4 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <span>Для создания клиентской части сайта я использую:</span>
          <div
            class="flex gap-2 justify-start items-center flex-wrap max-[510px]:overflow-y-hidden max-[510px]:flex-nowrap"
            id="tech"
          >
            <a
              v-for="t in techFront"
              :key="t"
              class="p-2 bg-white/15 rounded-full text-center font-tech text-[15px] whitespace-nowrap [&>img]:w-8"
              :href="t.link"
            >
              <img :src="t.img" alt="" />
            </a>
          </div>
        </div>
        <div class="flex [&>a>img]:w-8 gap-4">
          <span>Связь со мной: </span
          ><a href="tg://resolve?domain=yourantosha"> <img src="/tg.svg" alt="" /></a
          ><a href="https://vk.com/6old6"><img src="/vk.svg" alt="" /></a>
        </div>
      </div>
    </div>
    <div class="w-1/2 flex items-center max-[1300px]:hidden [&>img]:w-8"></div>
  </div>
</template>
