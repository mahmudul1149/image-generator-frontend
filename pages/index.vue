<template>
  <div>


 <div class="bg-[#0F0E0A]  ">
  <div class=" max-w-5xl mx-auto grid grid-cols-2 gap-8 py-12">
    <div>
      <h1 class="text-white  text-5xl leading-[60px] font-bold mr-4">Free AI Image Generator: Turn text to images in seconds</h1>
      <p class="text-white text-base mt-4">Transform text into captivating visuals instantly using our custom AI Image Generator. Input a detailed description, and witness your ideas come to life in stunning and dynamic images. 
</p>
<div class="flex items-center gap-3 mt-6">
  <input class=" text-base w-full py-2 px-2 rounded-lg" type="text" placeholder="Describe what you want to see" name="" id="" v-model="inputText">
<button v-if="store.user" :disabled="inputText == ''" class="bg-[#C209C1] rounded-lg py-2 px-6 font-medium text-base text-white" @click="goToAppPage">Generate</button>
<button  v-else class="bg-[#C209C1] rounded-lg py-2 px-6 font-medium text-base text-white" @click="store.signinWithGoogle">Generate</button>
</div>
<button class=" border border-[#C209C1] text-sm bg-transparent text-[#C209C1] rounded-[20px] py-1.5 px-6 font-bold mt-6" @click="addPromptStyle">Prompt sample</button>
    </div>
    <div>
      <img src="../static/hero-image.png" alt="">
    </div>
  </div>
 </div>
 <div class="bg-white py-12 h-full">
      <div class="w-[90%] max-w-[700px] mx-auto text-center mb-20">
        <h2 class="text-black text-5xl sm:text-[28px] font-bold  leading-9">
          AI images in various styles
        </h2>
        <p class="text-[#666666] text-lg font-medium leading-8 mt-4">
          Explore AI-generated images in diverse styles, unveiling a captivating collection of visuals crafted by AI.
        </p>
      </div>
      <div class="w-[90%] max-w-6xl mx-auto">
        <div class="grid grid-cols-3 gap-4 two-column-grid sm:grid-cols-1 text-center">
         <div>
          <img class="rounded-xl" src="../static/image.webp" alt="">
         </div>
         <div>
          <img class="rounded-xl" src="../static/image2.webp" alt="">
         </div>
         <div>
          <img class="rounded-xl" src="../static/image3.webp" alt="">
         </div>
        </div>
        <div class="mx-auto text-center mt-10">
          <nuxt-link to="/app" class="bg-[#C209C1] rounded-lg py-2 px-6 font-medium text-base text-white">Try text to image</nuxt-link>
        </div> 
      </div>
    </div>

 <div class="bg-white py-24">
      <div class="w-[90%] max-w-5xl mx-auto">
        <div class="flex items-center mb-16 gap-16 sm:gap-8 sm:flex-col-reverse">
          <div class="w-1/2 sm:w-full">
            <h3 class="text-3xl text-[#343434] font-semibold leading-normal mb-4 sm:text-xl sm:font-bold">
            Introducing  AI Image Generator apps
            </h3>
            <p class="text-base text-[#666666] font-medium leading-8">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum, nobis ipsum quidem saepe perspiciatis esse quibusdam consequuntur autem commodi. Delectus quis voluptas velit assumenda soluta beatae incidunt accusamus voluptate!
            </p>
          </div>
          <div class="w-1/2 sm:w-full bg-white py-6 rounded-xl">
            <img  class="h-[300px] w-full rounded-xl" src="../static/feature.png" alt="">
          </div>
        </div>
        <div class="flex items-center  gap-16 sm:gap-8 sm:flex-col-reverse">
        
          <div class="w-1/2  sm:w-full bg-white py-6 rounded-xl">
            <img class="h-[300px] w-full rounded-xl" src="../static/feature2.png" alt="">
          </div>
          <div class="w-1/2 sm:w-full">
            <h3 class="text-3xl text-[#343434] font-semibold leading-normal mb-4 sm:text-xl sm:font-bold">
           Choose your image style with Text to Image
            </h3>
            <p class="text-base text-[#666666] font-medium leading-8">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum, nobis ipsum quidem saepe perspiciatis esse quibusdam consequuntur autem commodi. Delectus quis voluptas velit assumenda soluta beatae incidunt accusamus voluptate!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '../store/index';
const store = useMainStore();
const inputText = ref('');
const promptIndex = ref(0);
 const prompts = reactive([
  "Serene sunset over a mountain lake",
  "Futuristic cityscape with flying cars",
  "Cozy cabin in the snowy woods",
  "Abstract representation of joy and celebration",
  "Steampunk-inspired underwater world",
  "Bustling marketplace in a medieval fantasy town",
  "Alien landscape with strange plants and creatures",
  "Retro-style diner with neon lights",
  "Dreamy seascape with a lighthouse in the distance",
  "Vibrant tropical paradise with exotic birds",
]);
function goToAppPage() {
  store.setInputText(inputText);
  navigateTo('/app')
}
function addPromptStyle() {
  promptIndex.value = (promptIndex.value + 1) % prompts.length;
  inputText.value = prompts[promptIndex.value]
}
</script>

<style>

</style>