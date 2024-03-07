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
const techBack = ['java spring', 'я хуй знает сам']
</script>
<template>
  <div
    class="text-white w-5/6 h-dvh font-maintext text-xl flex justify-between items-center gap-4 animate-[openPage_0.8s_ease-in-out]"
  >
    <img src="/bogomdan.png" class="w-1/2 flex items-center max-[1300px]:hidden" />

    <div class="w-1/2 flex flex-col max-[1300px]:w-full">
      <b class="text-3xl">Привет!</b>
      <span class="text-5xl"> Меня зовут <span class="text-blue-500">Богдан</span>, <br /> </span>
      <b>Я Backend-разработчик</b>
      <span>Увлеченный сникерсами и акселераторами. </span>
      <div class="mt-4 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <span>Для создания cерверной части сайта я использую:</span>
          <div
            class="flex gap-2 justify-start items-center flex-wrap max-[510px]:overflow-y-hidden max-[510px]:flex-nowrap"
            id="tech"
          >
            <span
              v-for="t in techBack"
              :key="t"
              class="py-2 px-4 bg-[#0c0c0c33] rounded-full text-center font-tech text-[15px] whitespace-nowrap"
              >{{ t }}</span
            >
          </div>
        </div>
        <div class="flex [&>a>img]:w-8 gap-4">
          <span>Связь со мной: </span
          ><a href="tg://resolve?domain=macgoodmonsta"> <img src="/tg.svg" alt="" /></a
          ><a href="https://vk.com/macgoodmonsta"><img src="/vk.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
