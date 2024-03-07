<script setup>
defineProps({
  editCountPage: Function,
  countPage: Number
})
</script>
<template>
  <div
    class="text-white h-dvh w-1/6 flex flex justify-center items-center font-numbers text-xl z-50"
  >
    <div
      class="h-full flex flex-col justify-center items-center [&>div:nth-child(even)]:-mt-2 [&>div:nth-child(even)]:h-2 [&>div:nth-child(even)>button]:z-10 [&>div:nth-child(even)>button]:bg-[#252525] [&>div:nth-child(even)>button]:rounded-full [&>div:nth-child(even)>button]:w-2 [&>div:nth-child(even)>button]:h-2 [&>div:nth-child(odd)]:w-px [&>div:nth-child(odd)]:h-[80px] [&>div:nth-child(odd)]:bg-[#252525]"
    >
      <div></div>
      <div>
        <button
          @click="editCountPage(0)"
          :style="countPage === 0 ? 'background: #e3e3e3' : ''"
        ></button>
      </div>
      <div></div>
      <div>
        <button
          @click="editCountPage(1)"
          :style="countPage === 1 ? 'background: #e3e3e3' : ''"
        ></button>
      </div>
      <div></div>
      <div>
        <button
          @click="editCountPage(2)"
          :style="countPage === 2 ? 'background: #e3e3e3' : ''"
        ></button>
      </div>
      <div></div>
      <div>
        <button
          @click="editCountPage(3)"
          :style="countPage === 3 ? 'background: #e3e3e3' : ''"
        ></button>
      </div>
      <div></div>
      <div>
        <button
          @click="editCountPage(4)"
          :style="countPage === 4 ? 'background: #e3e3e3' : ''"
        ></button>
      </div>
      <div></div>
      <div>
        <button
          @click="editCountPage(5)"
          :style="countPage === 5 ? 'background: #e3e3e3' : ''"
        ></button>
      </div>
      <div></div>
    </div>
    <div
      class="text-[#545454] h-full flex flex-col justify-center items-center [&>div:nth-child(even)>button]:text-left [&>div:nth-child(even)]:-mt-2 [&>div:nth-child(even)]:h-2 [&>div:nth-child(even)>button]:z-10 [&>div:nth-child(even)>button]:w-[100px] [&>div:nth-child(odd)]:w-px [&>div:nth-child(odd)]:h-[80px]"
    >
      <div></div>
      <div>
        <button @click="editCountPage(0)">
          <span
            v-if="countPage === 0"
            id="welcome"
            :style="countPage === 0 ? 'color: #e3e3e3' : ''"
          ></span>
          <span v-else>00</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(1)">
          <span
            v-if="countPage === 1"
            id="front"
            :style="countPage === 1 ? 'color: #e3e3e3' : ''"
          ></span>
          <span v-else>01</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(2)">
          <span
            v-if="countPage === 2"
            id="back"
            :style="countPage === 2 ? 'color: #e3e3e3' : ''"
          ></span>
          <span v-else>02</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(3)">
          <span
            v-if="countPage === 3"
            id="works"
            :style="countPage === 3 ? 'color: #e3e3e3' : ''"
          ></span>
          <span v-else>03</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(4)">
          <span
            v-if="countPage === 4"
            id="contacts"
            :style="countPage === 4 ? 'color: #e3e3e3' : ''"
          ></span>
          <span v-else>04</span>
        </button>
      </div>
      <div></div>
      <div>
        <button @click="editCountPage(5)">
          <span
            v-if="countPage === 5"
            id="hire"
            :style="countPage === 5 ? 'color: #e3e3e3' : ''"
          ></span>
          <span v-else>05</span>
        </button>
      </div>
      <div></div>
    </div>
  </div>
</template>
