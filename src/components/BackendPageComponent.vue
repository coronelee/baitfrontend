<script setup>
const techBack = ['java spring', 'я хуй знает сам']
</script>
<template>
  <div
    class="text-white w-5/6 h-dvh font-maintext text-xl flex justify-center gap-4 items-center animate-[openPage_0.5s_ease-in-out]"
  >
    <img src="/bogomdan.png" class="w-1/2 flex items-center" />
    <div class="w-1/2 flex flex-col">
      <b class="text-3xl">Привет!</b>
      <span class="text-5xl"> Меня зовут <span class="text-blue-500">Богдан</span>, <br /> </span>
      <b>Я Backend-разработчик</b>
      <span> Увлеченный сникерсом и акселераторами. </span>
      <div class="mt-4 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <span>Для создания серверной части сайта я использую:</span>
          <div class="flex gap-2 flex-wrap">
            <span
              v-for="j in techBack"
              :key="j"
              class="py-2 px-4 bg-[#0c0c0c33] w-auto rounded-full font-tech text-[15px]"
              >{{ j }}</span
            >
          </div>
        </div>
        <div class="flex [&>a>img]:w-8 gap-4">
          <span>Связь со мной: </span
          ><a href="tg://resolve?domain=@macgoodmonsta"> <img src="/tg.svg" alt="" /></a
          ><a href="https://vk.com/macgoodmonsta"><img src="/vk.svg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
