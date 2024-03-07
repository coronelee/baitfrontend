<script setup>
const props = defineProps({
  editScrollTech: Function
})
import { onMounted, ref } from 'vue'

const touch = ref(false)
onMounted(() => {
  document.getElementById('slider').addEventListener('touchstart', (event) => {
    touch.value = !touch.value
    props.editScrollTech(touch.value)
  })
  document.getElementById('slider').addEventListener('touchend', (event) => {
    touch.value = !touch.value
    props.editScrollTech(touch.value)
  })
})
</script>
<template>
  <div
    class="text-white w-5/6 h-dvh flex-col font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]"
  >
    <span class="text-2xl">Вот наши выполненные проекты</span>
    <div class="w-full h-auto flex justify-start items-center overflow-y-hidden" id="slider">
      <div
        class="flex [&>div]:w-[600px] max-[1200px]:[&>div]:w-[400px] max-[650px]:[&>div]:w-[200px] gap-4 [&>div]:h-[400px] [&>div]:bg-slate-300"
      >
        <div v-for="i in 5" :key="i" class="flex justify-center items-center text-black">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
