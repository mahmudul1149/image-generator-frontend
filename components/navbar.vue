<template>
    <div class="px-7 py-[.9rem] sm:px-5 bg-[#0F0E0A] border-b border-gray-800">
      <div class="max-w-6xl m-auto flex justify-between align-middle items-center">
        <div>
          <nuxt-link to="/" class="nav-logo text-center items-center justify-center leading-3 flex text-[#73FFEC] font-bold text-lg">
            <h1>Image Generate</h1>
          </nuxt-link>
        </div>
        <div>
          <ul class="flex justify-between items-center">
            <li class="text-white text-opacity-80 mr-8 sm:mr-5 ">
                
                <nuxt-link class="font-medium text-white sm:text-base sm:text-[1.1rem] hover:text-[#A6E22E] py-4 transition"
                  to="/">
                  Home
                </nuxt-link>
              </li>
            <li class="text-white text-opacity-80 mr-8 sm:mr-5 ">
                
              <nuxt-link class=" font-medium text-white sm:text-base hover:text-[#A6E22E] py-4 transition"
                to="/app">
                App
              </nuxt-link>
            </li>
            <li class="text-white text-opacity-80 mr-8 sm:mr-5 ">
                
                <button class="border border-[#C209C1] text-white py-2 px-4 rounded-lg">Log in or sign up</button>
              </li>
            
          </ul>
        </div>
      
      </div>
      
    </div>
  </template>
  
  <style scoped>
  .link:active {
    border-bottom: 2px solid #9030ed;
  }
  </style>
  ``