<script setup>
defineProps({
  editCountPage: Function,
  countPage: Number
})
import { ref, onMounted } from 'vue'

const slider = ref(0)
const slogans = [
  'Визуализация вашей мечты в онлайн-реальности',
  'Дизайн, который оставит след в виртуальном мире',
  'Создание эстетики в каждом пикселе вашего сайта'
]
const text = ref(slogans[slider.value])

onMounted(() => {
  setInterval(() => {
    slider.value = (1 + slider.value) % 3
    text.value = slogans[slider.value]
  }, 5000)
})
</script>
<template>
  <div
    class="text-white w-5/6 max-[800px]:w-full h-dvh font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]"
  >
    <div class="w-full h-full m-auto flex flex-col justify-center items-center">
      <div class="w-full h-3/5 gap-8 border-b border-white flex justify-between items-end">
        <div class="w-1/2 h-full flex flex-col gap-4 justify-end items-start max-[1050px]:w-full">
          <span
            >Добро пожаловать в нашу веб-студию, где каждая страница — это искусство, а каждый
            проект — уникальная история вашего бренда.</span
          >
          <button
            class="px-4 h-10 bg-[#0f33ff] font-bold tracking-widest mb-4"
            @click="editCountPage(5)"
          >
            Написать нам
          </button>
        </div>
        <img src="/welcome.png" class="w-1/2 max-[1050px]:hidden rounded-tr-[250px]" id="we" />
      </div>
      <div class="w-full h-1/5 flex justify-between items-center 2xl:justify-center">
        <div class="2xl:hidden">
          <span>
            <b>BAit это -</b><span>{{ text }}</span>
            <div class="w-full h-px bg-white animate-[loadText_5s_ease-in-out_infinite] mt-2"></div>
          </span>
        </div>
        <div
          class="flex justify-between items-center [&>span]:flex [&>span]:flex-col [&>span]:gap-2 max-2xl:hidden"
        >
          <span><b>BAit это -</b><span>Визуализация вашей мечты в онлайн-реальности</span></span
          ><span><b>BAit это -</b><span>Дизайн, который оставит след в виртуальном мире</span></span
          ><span
            ><b>BAit это -</b><span>Создание эстетики в каждом пикселе вашего сайта</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
