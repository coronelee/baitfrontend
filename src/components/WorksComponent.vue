<template>
  <div
    class="text-white w-5/6 h-[calc(100vh-7rem)] font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]"
  >
    <div class="w-full h-full m-auto grid grid-cols-4 [&>div]:bg-white/50 gap-4" id="gridSection">
      <!-- <div style="grid-area: a"></div>
      <div style="grid-area: b"></div>
      <div style="grid-area: c"></div> -->
    </div>
  </div>
</template>

<style scoped>
#gridSection {
  grid-template-areas:
    'a a b b'
    '. c c .';
}
</style>
