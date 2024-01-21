<template>
  <div class="bg-[#2A3742] h-[calc(100vh-72px)] overflow-auto">
    <div class="max-w-4xl mx-auto py-10">
      <div>
        <div class="flex gap-4">
          <input
            class="bg-[#222839] rounded-lg py-3 px-3 border-none outline-none text-white w-full"
            type="text"
            name=""
            id=""
            placeholder="Describe what you want to see"
            v-model="inputText"
          />
          <button
            @click="generateImage"
            :disabled="inputText === ''"
            class="flex items-center gap-2 rounded-lg py-2 px-6 font-medium text-base text-white"
            style="background: linear-gradient(to right, #7a4ced, #9266f0)"
          >
            <svg fill="white" width="24" height="24">
              <path
                d="M16.106 5.611c.204.117.406.29.525.488.374.627.707 1.277 1.057 1.917.094.17.194.337.321.555.407-.745.794-1.431 1.157-2.13.2-.383.42-.703.836-.907.758-.372 1.487-.804 2.284-1.24-.48-.267-.916-.514-1.356-.753-.362-.198-.72-.407-1.096-.579-.472-.216-.573-.694-.8-1.078-.359-.606-.679-1.235-1.032-1.884-.462.843-.9 1.66-1.36 2.464-.098.174-.247.35-.417.448-.671.389-1.36.747-2.043 1.118-.143.078-.283.158-.468.261.828.453 1.618.874 2.392 1.32zm6.999 13.463c.865.867 1.126 2.1.682 3.172-.441 1.062-1.473 1.744-2.656 1.754-.935.001-1.646-.454-2.281-1.092-3.713-3.723-7.432-7.44-11.148-11.16-.552-.552-1.112-1.098-1.656-1.659-1.045-1.08-1.197-2.587-.385-3.724a2.852 2.852 0 014.376-.367c1.645 1.638 3.284 3.284 4.925 4.926 2.715 2.717 5.43 5.432 8.143 8.15zM7.295 9.31l3.78 3.788c.079.078.146.167.25.29.346-1.038.996-1.699 2.003-2.029-.059-.071-.095-.125-.14-.17C11.833 9.832 10.482 8.47 9.12 7.12c-.679-.67-1.636-.611-2.182.11a1.41 1.41 0 00.004 1.678c.109.141.227.276.353.401zM4.21 13.363c-.4.225-.825.4-1.015.896-.15.397-.402.755-.63 1.17-.262-.484-.482-.926-.738-1.348a1.41 1.41 0 00-.44-.453C.95 13.358.49 13.125 0 12.855c.515-.284 1-.542 1.475-.82a.906.906 0 00.303-.318c.27-.462.52-.934.793-1.431.267.488.503.944.766 1.385.091.154.23.301.382.394.455.274.928.52 1.424.793-.333.18-.635.337-.933.505zm2.712 5.772a.835.835 0 00-.28-.299c-.477-.28-.965-.54-1.5-.835.454-.248.866-.482 1.288-.7a1.22 1.22 0 00.573-.565c.211-.43.459-.842.715-1.307.252.464.464.89.712 1.292.118.193.282.38.47.5.439.28.903.515 1.386.784-.343.185-.641.354-.946.508-.446.226-.85.472-1.049.983-.141.366-.371.698-.578 1.075-.277-.506-.527-.975-.791-1.436z"
                fill-rule="evenodd"
                fill="white"
              ></path>
            </svg>
            <span>Generate</span>
          </button>
        </div>
        <div></div>
      </div>
      <div>
        <h1 class="text-gray-300 text-lg my-1">Style</h1>
        <div class="flex gap-4">
          <div class="flex flex-col items-center gap-1">
            <button @click="selectStyle('vivid')">
              <img
              :class="{'active-border': selectedStyle === 'vivid'}"
                class="w-14 h-14 rounded-lg border-2 border-gray-500"
                src="../static/badman-viivid.png"
                alt=""
              />
            </button>
            <span class="text-[#a1b8ca] mt-0.5 text-center text-sm">Vivid</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <button @click="selectStyle('natural')">
              <img
              :class="{'active-border': selectedStyle === 'natural'}"
                class="w-14 h-14 rounded-lg border-2 border-gray-500"
                src="../static/badman-nat.png"
                alt=""
              />
            </button>
            <span class="text-[#a1b8ca] mt-0.5 text-center text-sm">Natural</span>
          </div>
        </div>
      </div>
      <div class="mt-1">
        <h1 class="text-gray-300 leading-7 mb-1 text-lg">Choose a size</h1>
        <div class="grid grid-cols-3 max-w-[250px] gap-4">
          <button class="flex flex-col" @click="selectSize('large')">
            <div
              :class="{ 'active-border': selectedSize === 'large' }"
              class="p-4 border-item flex bg-slate-600 justify-center items-center rounded-lg cursor-pointer flex-grow"
            >
              <div
                class="w-[50px] h-[40px] border-2 border-white rounded-lg"
              ></div>
            </div>
          </button>
          <button class="flex flex-col ml-1" @click="selectSize('small')">
            <div
              :class="{ 'active-border': selectedSize === 'small' }"
              class="p-4 bg-slate-600 border-item flex justify-center items-center rounded-lg cursor-pointer flex-grow"
            >
              <div
                class="w-[40px] h-[40px] border-2 border-white rounded-lg"
              ></div>
            </div>
          </button>
          <button class="flex flex-col" @click="selectSize('medium')">
            <div
              :class="{ 'active-border': selectedSize === 'medium' }"
              class="p-4 flex bg-slate-600 border-item justify-center items-center rounded-lg cursor-pointer flex-grow"
            >
              <div
                class="w-[40px] h-[50px] border-2 border-white rounded-lg"
              ></div>
            </div>
          </button>
         
        </div>
      </div>
      <div v-if="showImageError" class="flex items-center justify-center mt-6">
         <p class="text-red-500 text-lg">{{ showImageError }}</p>
      </div>
      <div v-if="loading" class="flex items-center justify-center mt-6">
        <img
          class="w-80 h-80"
          src="https://usagif.com/wp-content/uploads/loading-36.gif"
          alt=""
        />
      </div>
      <div class="mt-10 relative group" v-if="displayImage">
    <img class="rounded-lg main-image" :src="displayImage" alt="" />
    <div class="hidden absolute inset-0 bg-black opacity-50 transition duration-300 group-hover:block rounded-lg"></div>
<div>
  <button @click="downloadImage">
    <svg  class="hidden cursor-pointer absolute top-4 right-4 small-image" width="25px" height="25px" fill="#fff" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M117.173 78.583h-12.167a1.75 1.75 0 0 0-1.75 1.75v31.98H24.744v-31.98a1.75 1.75 0 0 0-1.75-1.75H10.827a1.75 1.75 0 0 0-1.75 1.75v45.9a1.75 1.75 0 0 0 1.75 1.75h106.346a1.75 1.75 0 0 0 1.75-1.75v-45.9a1.75 1.75 0 0 0-1.75-1.75zm-1.75 45.9H12.577v-42.4h8.667v31.98a1.75 1.75 0 0 0 1.75 1.75h82.013a1.75 1.75 0 0 0 1.75-1.75v-31.98h8.667z"/><path d="M62.763 90.018a1.771 1.771 0 0 0 2.475 0L97.764 57.49a1.771 1.771 0 0 0 0-2.475l-8.6-8.6a1.749 1.749 0 0 0-2.475 0L71.833 61.266V1.73a1.75 1.75 0 0 0-1.75-1.75H57.917a1.75 1.75 0 0 0-1.75 1.75v59.536L41.313 46.413a1.749 1.749 0 0 0-2.475 0l-8.6 8.6a1.771 1.771 0 0 0 0 2.475zM40.076 50.125l16.6 16.6a1.75 1.75 0 0 0 2.987-1.237V3.48h8.667v62.01a1.75 1.75 0 0 0 2.987 1.237l16.6-16.6 6.128 6.128L64 86.306 33.948 56.253z"/></svg>

  </button>
</div>
</div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "../store/index";
const { $axios } = useNuxtApp();
const store = useMainStore();
const inputText = ref("");
const displayImage = ref(null);
const loading = ref(false);
const selectedSize = ref("large");
const selectedStyle = ref("vivid");
const showImageError = ref('')
function selectSize(size) {
  selectedSize.value = size;
}
function selectStyle(style) {
selectedStyle.value = style;
console.log(selectedStyle.value);
}
async function generateImage() {
  loading.value = true;
  try {
    const res = await $axios.post("/openai/generateimage", {
      prompt: inputText.value,
      size: selectedSize.value,
      style: selectedStyle.value,
    });
    console.log(selectedStyle.value);
    console.log(res.data);
    displayImage.value = res.data.data;
  } catch (error) {
    console.log(error);
    showImageError.value = ' Unable to generate the image. Please check your input parameters and try again.'
  } finally {
    loading.value = false;
  }
}
async function downloadImage() {
  try {
    if (displayImage.value) {
      const link = document.createElement('a');
      link.href = displayImage.value;
      link.download = 'generated_image.png';
      link.click();
      document.body.removeChild(link);
    } else {
      console.error('No image available for download.');
    }
  } catch (error) {
    console.error('Error downloading image:', error);
  }
}
onMounted(() => {
  if (store.input) {
    inputText.value = store.input;
    generateImage();
  }
});
</script>
<style>
.border-item {
  border: 2px solid transparent;
}
.active-border {
  border: 2px solid rgb(3, 127, 3);
}
.group:hover .small-image {
    display: block;
}

</style>