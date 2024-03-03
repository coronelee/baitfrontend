<script setup>
defineProps({
  toggleHamburger: Function
})
</script>
<template>
  <header class="w-full h-28 fixed top-0 flex justify-center">
    <div class="flex justify-between items-center w-8/12 h-full">
      <img src="/logo.svg" class="w-16 h-16" alt="" />
      <button @click="toggleHamburger" class="w-14 h-14" alt="">
        <img src="/hamb.svg" alt="" />
      </button>
    </div>
  </header>
</template>
