<template>
    <div class="px-7 py-[.9rem] sm:px-5 bg-[#0F0E0A] border-b border-gray-800">
      <div class="max-w-6xl m-auto flex justify-between sm:flex-col sm:gap-1 align-middle items-center">
        <div>
          <nuxt-link to="/" class="logo text-center items-center justify-center leading-3 flex   font-bold text-4xl sm:text-lg">
            <h1>Image Generator</h1>
          </nuxt-link>
        </div>
        <div>
          <ul class="flex justify-between items-center">
            <li class="text-white text-opacity-80 mr-8 sm:mr-5 ">
                
                <nuxt-link class="font-medium text-white sm:text-base sm:text-[1.1rem] hover:text-[#A6E22E]  transition"
                  to="/">
                  Home
                </nuxt-link>
              </li>
            <li v-if="store.user" class="text-white text-opacity-80 mr-8 sm:mr-5 ">
                
              <nuxt-link  class=" font-medium text-white sm:text-base hover:text-[#A6E22E]  transition"
                to="/app">
                App
              </nuxt-link>
            </li>
            <li v-if="!store.user" class="text-white text-opacity-80 mr-8 sm:mr-5 ">
                
                <button class="border border-[#c6abc6] text-white py-2 px-4 rounded-lg" @click="store.signinWithGoogle">Sign in</button>
              </li>
              <li v-else>
                   <img @click.stop="showPopupProfile = !showPopupProfile" class="w-10 h-10 sm:w-10 sm:h-10 rounded-full border-2 border-[#C209C1] cursor-pointer" :src="store.user.photoURL" alt="">
              </li>
            
          </ul>
          <div v-show="showPopupProfile" class=" absolute top-0 right-0 mt-16 mr-6">
            <popup-profile></popup-profile>
          </div>
          
        </div>
      
      </div>
      
    </div>
  </template>
  <script setup>
  import { useMainStore } from '../store/index';
  const store = useMainStore();
  const showPopupProfile = ref(false)
</script>
  <style scoped>
  .link:active {
    border-bottom: 2px solid #9030ed;
  }
 



.logo {
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  color: #121212;
  text-align: center;
  letter-spacing: 5px;
  text-shadow: -1px 1px 0 #41ba45,
          1px 1px 0 #c63d2b,
         1px -1px 0 #42afac,
        -1px -1px 0 #c6c23f;
}

  </style>
  ``