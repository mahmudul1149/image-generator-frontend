<template>
  <div v-if="store.user" class="bg-[#303850] shadow-lg text-left rounded z-50 max-h-[315px]">
    <div class="p-4">
      <div class="flex items-center gap-4">
        <div
          v-if="store?.user?.photoURL"
          class="w-10 h-10 sm:w-8 sm:h-8 mt-2 text-white"
        >
          <img
            class="rounded-full cursor-pointer"
            :src="store?.user?.photoURL"
            :alt="`${store?.user?.name} profile picture`"
          />
        </div>
        <div v-else class="w-10 h-10 sm:w-8 sm:h-8 mt-2 text-white">
          <img
            class="rounded-full cursor-pointer"
            src="https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
            :alt="`${store?.user?.name} profile picture`"
          />
        </div>
        <div>
          <h2 class="text-[#060609] text-base font-semibold">
            {{ store?.user?.name }}
          </h2>
          <p
            class="text-[#FF6B00] text-base font-normal w-60 overflow-hidden whitespace-nowrap overflow-ellipsis"
          >
            {{ store?.user?.email }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <div
        class="flex flex-col items-center justify-center space-x-2 space-y-0 sm:space-x-0 sm:space-y-2 mx-4 pb-4"
      >
        <button
        @click="store.logout"
          class="bg-gray-800 cursor-pointer flex w-full min-w-max flex-row items-center justify-center space-x-2 rounded-lg  px-4 text-base font-medium text-white sm:bg-medium-blue sm:px-5 sm:py-3 sm:shadow-button-secondary sm:transition-all sm:duration-100 sm:hover:bg-medium-blueHover sm:active:bg-medium-blue"
        >
          <img
            src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11%2020C11%2019.4477%2011.4477%2019%2012%2019L15.2%2019C16.0566%2019%2016.6389%2018.9992%2017.089%2018.9624C17.5274%2018.9266%2017.7516%2018.8617%2017.908%2018.782C18.2843%2018.5903%2018.5903%2018.2843%2018.782%2017.908C18.8617%2017.7516%2018.9266%2017.5274%2018.9624%2017.089C18.9992%2016.6389%2019%2016.0566%2019%2015.2L19%208.8C19%207.94342%2018.9992%207.36113%2018.9624%206.91104C18.9266%206.47262%2018.8617%206.24842%2018.782%206.09202C18.5903%205.71569%2018.2843%205.40973%2017.908%205.21799C17.7516%205.1383%2017.5274%205.07337%2017.089%205.03755C16.6389%205.00078%2016.0566%205%2015.2%205L12%205C11.4477%205%2011%204.55228%2011%204C11%203.44772%2011.4477%203%2012%203L15.2413%203C16.0463%202.99999%2016.7106%202.99998%2017.2518%203.04419C17.8139%203.09012%2018.3306%203.18868%2018.816%203.43597C19.5686%203.81947%2020.1805%204.43139%2020.564%205.18404C20.8113%205.66937%2020.9099%206.18608%2020.9558%206.74817C21%207.28937%2021%207.95374%2021%208.75872V15.2413C21%2016.0463%2021%2016.7106%2020.9558%2017.2518C20.9099%2017.8139%2020.8113%2018.3306%2020.564%2018.816C20.1805%2019.5686%2019.5686%2020.1805%2018.816%2020.564C18.3306%2020.8113%2017.8139%2020.9099%2017.2518%2020.9558C16.7106%2021%2016.0463%2021%2015.2413%2021H12C11.4477%2021%2011%2020.5523%2011%2020Z'%20fill='%23F2F2F2'/%3e%3cpath%20d='M7.70711%2014.2929C8.09763%2014.6834%208.09763%2015.3166%207.70711%2015.7071C7.31658%2016.0976%206.68342%2016.0976%206.29289%2015.7071L3.29289%2012.7071C2.90237%2012.3166%202.90237%2011.6834%203.29289%2011.2929L6.29289%208.29289C6.68342%207.90237%207.31658%207.90237%207.70711%208.29289C8.09763%208.68342%208.09763%209.31658%207.70711%209.70711L6.41421%2011H15C15.5523%2011%2016%2011.4477%2016%2012C16%2012.5523%2015.5523%2013%2015%2013H6.41421L7.70711%2014.2929Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e"
            alt="Logout icon"
            height="24"
            width="24"
            class="mb-2 mt-2 sm:mb-0"
          />
          <p>Sign Out</p>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { useMainStore } from "../store/index";

const store = useMainStore();
</script>