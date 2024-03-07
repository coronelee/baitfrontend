<script setup>
const props = defineProps({
  editScrollTech: Function
})
import { onMounted, ref } from 'vue'

const touch = ref(false)
let oldMove = 0
onMounted(() => {
  document.getElementById('slider').addEventListener('touchstart', (event) => {
    touch.value = !touch.value
    props.editScrollTech(touch.value)
  })
  document.getElementById('slider').addEventListener('touchend', (event) => {
    touch.value = !touch.value
    props.editScrollTech(touch.value)
  })
  document.getElementById('slider').addEventListener('mousedown', (event) => {
    touch.value = !touch.value
    props.editScrollTech(touch.value)
    oldMove = event.movementX
    touch.value = true
    touchmove(event)
  })
  function touchmove(event) {
    setTimeout(() => {
      if (touch.value) {
        document.getElementById('slider').addEventListener('mousemove', (event) => {
          document.getElementById('slider').scrollLeft += oldMove - event.movementX
          props.editScrollTech(touch.value)
          document.getElementById('slider').addEventListener('mouseup', (event) => {
            touch.value = false
            props.editScrollTech(touch.value)
          })
        })
      }
    }, 100)
  }
  document.getElementById('slider').addEventListener('mouseup', (event) => {
    touch.value = false
    props.editScrollTech(touch.value)
  })
  document.getElementById('slider').addEventListener('touchend', (event) => {
    touch.value = false
    props.editScrollTech(touch.value)
  })
})
</script>
<template>
  <div
    class="text-white w-5/6 h-dvh flex-col font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]"
  >
    <span class="text-2xl">Hаши выполненные проекты</span>
    <div
      class="w-full h-auto flex justify-start items-center scrollbar-auto overflow-y-hidden"
      id="slider"
    >
      <div
        class="flex [&>div]:w-[600px] max-[1200px]:[&>div]:w-[400px] max-[650px]:[&>div]:w-[300px] gap-4 [&>div]:h-[400px] [&>div]:bg-slate-300"
        id="works"
      >
        <div v-for="i in 5" :key="i" class="flex justify-center items-center text-black">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
