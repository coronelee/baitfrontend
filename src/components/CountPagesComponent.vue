<script setup>
defineProps({
  editCountPage: Function,
  countPage: Number
})
</script>
<template>
  <div
    class="text-white h-[calc(100vh-7rem)] w-1/6 flex flex justify-center items-center font-numbers text-xl"
  >
    <div
      class="h-full flex flex-col justify-center items-center [&>div:nth-child(even)]:-mt-2 [&>div:nth-child(even)]:h-2 [&>div:nth-child(even)>button]:z-10 [&>div:nth-child(even)>button]:bg-white [&>div:nth-child(even)>button]:rounded-full [&>div:nth-child(even)>button]:w-1 [&>div:nth-child(even)>button]:h-1 [&>div:nth-child(odd)]:w-px [&>div:nth-child(odd)]:h-[80px] [&>div:nth-child(odd)]:bg-slate-300"
    >
      <div></div>
      <div><button></button></div>
      <div></div>
      <div><button></button></div>
      <div></div>
      <div><button></button></div>
      <div></div>
      <div><button></button></div>
      <div></div>
      <div><button></button></div>
      <div></div>
    </div>
    <div
      class="text-white h-full flex flex-col justify-center items-center [&>div:nth-child(even)>button]:text-left [&>div:nth-child(even)]:-mt-2 [&>div:nth-child(even)]:h-2 [&>div:nth-child(even)>button]:z-10 [&>div:nth-child(even)>button]:w-[100px] [&>div:nth-child(odd)]:w-px [&>div:nth-child(odd)]:h-[80px]"
    >
      <div></div>
      <div>
        <button @click="editCountPage(0)">
          <span v-if="countPage === 0" class="welcome" max-v></span>
          <span v-else>00</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(1)">
          <span v-if="countPage === 1" class="front"></span>
          <span v-else>01</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(2)">
          <span v-if="countPage === 2" class="back"></span>
          <span v-else>02</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(3)">
          <span v-if="countPage === 3" class="contacts"></span>
          <span v-else>03</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(4)">
          <span v-if="countPage === 4" class="hire"></span>
          <span v-else>04</span>
        </button>
      </div>
      <div></div>
    </div>
  </div>
</template>
