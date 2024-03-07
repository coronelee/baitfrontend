<template>
  <div
    class="text-white w-5/6 h-dvh font-maintext text-xl flex justify-center items-center animate-[openPage_0.5s_ease-in-out]"
  >
    <div class="w-full m-auto flex flex-col gap-8">
      <div class="text-center flex flex-col">
        <span class="text-2xl">У вас остались вопросы или хотите с нами сотрудничать?</span>
        <span><b>напишите</b> нам</span>
      </div>

      <div
        class="flex [&>input:focus]:bg-white/5 [&>input]:transition-colors [&>input]:w-1/2 [&>input]:px-2 gap-12 max-[800px]:flex-col max-[800px]:[&>input]:w-full m-auto [&>input]:h-10 [&>input]:bg-transparent [&>input]:text-white [&>input]:outline-none [&>input]:border-b [&>input]:border-white"
      >
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Email" />
      </div>
      <button
        class="px-4 h-10 bg-[#0f33ff] m-auto font-bold uppercase tracking-widest active:bg-[#0f33ffcc] transition-colors"
      >
        Связаться
      </button>
    </div>
    <!-- <img src="/me.jpg" class="w-1/2 flex items-center" /> -->
  </div>
</template>
