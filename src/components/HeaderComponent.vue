<script setup>
defineProps({
  toggleHamburger: Function,
  editCountPage: Function
})
</script>
<template>
  <header class="w-full h-28 top-0 flex justify-center fixed">
    <div class="flex justify-between items-center w-8/12 h-full max-[800px]:w-10/12">
      <img src="/logo.svg" class="w-14 h-14 cursor-pointer" alt="" @click="editCountPage(0)" />
      <button
        @click="toggleHamburger"
        class="group w-10 h-6 cursor-pointer [&>div]:h-1/6 [&>div]:bg-white [&>div]:rounded-full flex flex-col justify-between hover:items-end"
        alt=""
      >
        <div class="w-full"></div>
        <div class="w-1/2"></div>
        <div class="w-1/3"></div>
      </button>
    </div>
  </header>
</template>
