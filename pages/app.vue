<template>
  <div class="bg-gradient-to-b from-[#1A202C] to-[#0F172A] min-h-[calc(100vh-72px)] overflow-auto">
    <div class="w-[95%] mx-auto py-8">
      <!-- Header Section -->
      <h1 class="text-white text-3xl font-bold mb-8 text-center">AI Image Generator</h1>
      
      <!-- Two-column layout -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Left Column - Input Properties -->
        <div class="w-full lg:w-[400px]">
          <!-- Input Section -->
          <div class="bg-[#1E293B] rounded-xl p-6 shadow-lg mb-8">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                class="bg-[#111827] rounded-lg py-3 px-4 border border-gray-700 outline-none text-white w-full focus:border-purple-500 transition-all duration-200"
                type="text"
                placeholder="Describe what you want to see..."
                v-model="inputText"
              />
              <button
                @click="generateImage"
                :disabled="inputText === ''"
                :class="{'opacity-50 cursor-not-allowed': inputText === '', 'hover:bg-gradient-to-r hover:from-[#8A5CF7] hover:to-[#9E7BF4] hover:shadow-lg hover:shadow-purple-500/30': inputText !== ''}"
                class="flex items-center justify-center gap-2 rounded-lg py-3 px-6 font-medium text-white transition-all duration-300 whitespace-nowrap relative overflow-hidden group"
                style="background: linear-gradient(to right, #7a4ced, #9266f0)"
              >
                <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                <svg fill="white" width="20" height="20" class="relative z-10">
                  <path
                    d="M16.106 5.611c.204.117.406.29.525.488.374.627.707 1.277 1.057 1.917.094.17.194.337.321.555.407-.745.794-1.431 1.157-2.13.2-.383.42-.703.836-.907.758-.372 1.487-.804 2.284-1.24-.48-.267-.916-.514-1.356-.753-.362-.198-.72-.407-1.096-.579-.472-.216-.573-.694-.8-1.078-.359-.606-.679-1.235-1.032-1.884-.462.843-.9 1.66-1.36 2.464-.098.174-.247.35-.417.448-.671.389-1.36.747-2.043 1.118-.143.078-.283.158-.468.261.828.453 1.618.874 2.392 1.32zm6.999 13.463c.865.867 1.126 2.1.682 3.172-.441 1.062-1.473 1.744-2.656 1.754-.935.001-1.646-.454-2.281-1.092-3.713-3.723-7.432-7.44-11.148-11.16-.552-.552-1.112-1.098-1.656-1.659-1.045-1.08-1.197-2.587-.385-3.724a2.852 2.852 0 014.376-.367c1.645 1.638 3.284 3.284 4.925 4.926 2.715 2.717 5.43 5.432 8.143 8.15zM7.295 9.31l3.78 3.788c.079.078.146.167.25.29.346-1.038.996-1.699 2.003-2.029-.059-.071-.095-.125-.14-.17C11.833 9.832 10.482 8.47 9.12 7.12c-.679-.67-1.636-.611-2.182.11a1.41 1.41 0 00.004 1.678c.109.141.227.276.353.401zM4.21 13.363c-.4.225-.825.4-1.015.896-.15.397-.402.755-.63 1.17-.262-.484-.482-.926-.738-1.348a1.41 1.41 0 00-.44-.453C.95 13.358.49 13.125 0 12.855c.515-.284 1-.542 1.475-.82a.906.906 0 00.303-.318c.27-.462.52-.934.793-1.431.267.488.503.944.766 1.385.091.154.23.301.382.394.455.274.928.52 1.424.793-.333.18-.635.337-.933.505zm2.712 5.772a.835.835 0 00-.28-.299c-.477-.28-.965-.54-1.5-.835.454-.248.866-.482 1.288-.7a1.22 1.22 0 00.573-.565c.211-.43.459-.842.715-1.307.252.464.464.89.712 1.292.118.193.282.38.47.5.439.28.903.515 1.386.784-.343.185-.641.354-.946.508-.446.226-.85.472-1.049.983-.141.366-.371.698-.578 1.075-.277-.506-.527-.975-.791-1.436z"
                    fill-rule="evenodd"
                    fill="white"
                  ></path>
                </svg>
                <span class="relative z-10">Generate</span>
              </button>
            </div>
          </div>
          
          <!-- Style Selection Section -->
          <div class="bg-[#1E293B] rounded-xl p-6 shadow-lg mb-8">
            <h2 class="text-white text-xl font-semibold mb-4">Select Style</h2>
            <div class="grid grid-cols-2 gap-6 mb-2">
              <div class="flex flex-col items-center">
                <button 
                  @click="selectStyle('vivid')" 
                  class="style-button transition-all duration-200 hover:scale-105"
                >
                  <img
                    :class="{'active-style': selectedStyle === 'vivid'}"
                    class="w-24 h-24 rounded-lg border-2 border-gray-600 object-cover"
                    src="../static/badman-viivid.png"
                    alt="Vivid style"
                  />
                </button>
                <span class="text-[#a1b8ca] mt-3 text-center text-sm font-medium">Vivid</span>
              </div>
              <div class="flex flex-col items-center">
                <button 
                  @click="selectStyle('natural')" 
                  class="style-button transition-all duration-200 hover:scale-105"
                >
                  <img
                    :class="{'active-style': selectedStyle === 'natural'}"
                    class="w-24 h-24 rounded-lg border-2 border-gray-600 object-cover"
                    src="../static/badman-nat.png"
                    alt="Natural style"
                  />
                </button>
                <span class="text-[#a1b8ca] mt-3 text-center text-sm font-medium">Natural</span>
              </div>
            </div>
          </div>
          
          <!-- Layout Selection Section -->
          <div class="bg-[#1E293B] rounded-xl p-6 shadow-lg mb-8">
            <h2 class="text-white text-xl font-semibold mb-4">Choose Layout</h2>
            <div class="grid grid-cols-3 gap-4 mb-2">
              <div class="flex flex-col items-center">
                <button 
                  @click="selectSize('large')" 
                  class="style-button transition-all duration-200 hover:scale-105 w-full"
                >
                  <div
                    :class="{'active-style': selectedSize === 'large'}"
                    class="w-full h-20 rounded-lg border-2 border-gray-600 flex items-center justify-center bg-[#111827]"
                  >
                    <div class="w-16 h-10 bg-white rounded-md flex items-center justify-center">
                      <span class="text-slate-800 text-[10px] font-medium">Landscape</span>
                    </div>
                  </div>
                </button>
                <span class="text-[#a1b8ca] mt-2 text-center text-xs font-medium">Landscape</span>
                <span class="text-[#8a9aa8] text-xs">1792×1024</span>
              </div>
              
              <div class="flex flex-col items-center">
                <button 
                  @click="selectSize('medium')" 
                  class="style-button transition-all duration-200 hover:scale-105 w-full"
                >
                  <div
                    :class="{'active-style': selectedSize === 'medium'}"
                    class="w-full h-20 rounded-lg border-2 border-gray-600 flex items-center justify-center bg-[#111827]"
                  >
                    <div class="w-10 h-16 bg-white rounded-md flex items-center justify-center">
                      <span class="text-slate-800 text-[10px] font-medium rotate-90">Portrait</span>
                    </div>
                  </div>
                </button>
                <span class="text-[#a1b8ca] mt-2 text-center text-xs font-medium">Portrait</span>
                <span class="text-[#8a9aa8] text-xs">1024×1792</span>
              </div>
              
              <div class="flex flex-col items-center">
                <button 
                  @click="selectSize('small')" 
                  class="style-button transition-all duration-200 hover:scale-105 w-full"
                >
                  <div
                    :class="{'active-style': selectedSize === 'small'}"
                    class="w-full h-20 rounded-lg border-2 border-gray-600 flex items-center justify-center bg-[#111827]"
                  >
                    <div class="w-12 h-12 bg-white rounded-md flex items-center justify-center">
                      <span class="text-slate-800 text-xs font-medium">Square</span>
                    </div>
                  </div>
                </button>
                <span class="text-[#a1b8ca] mt-2 text-center text-xs font-medium">Square</span>
                <span class="text-[#8a9aa8] text-xs">1024×1024</span>
              </div>
            </div>
          </div>
          
          <!-- Error Message -->
          <div v-if="showImageError" class="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-8">
             <p class="text-red-400 text-base flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
               </svg>
               {{ showImageError }}
             </p>
          </div>
        </div>
        
        <!-- Right Column - Output Image -->
        <div class="w-full lg:flex-1 lg:sticky lg:top-8 lg:self-start">
          <div class="bg-[#1E293B] rounded-xl p-6 shadow-lg h-full flex flex-col border border-[#334155]/30">
            <h2 class="text-white text-xl font-semibold mb-4">Generated Image</h2>
            
            <!-- Loading Indicator -->
            <div v-if="loading" class="flex-1 flex items-center justify-center">
              <div class="relative w-20 h-20">
                <div class="absolute inset-0 rounded-full border-4 border-t-4 border-purple-500 border-t-transparent animate-spin"></div>
                <div class="absolute inset-2 rounded-full border-4 border-t-4 border-indigo-400 border-t-transparent animate-spin animation-delay-150"></div>
                <div class="absolute inset-4 rounded-full border-4 border-t-4 border-blue-300 border-t-transparent animate-spin animation-delay-300"></div>
              </div>
            </div>
            
            <!-- Empty State -->
            <div v-if="!loading && !displayImage" class="flex-1 flex flex-col items-center justify-center text-center p-8">
              <svg class="w-20 h-20 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
              </svg>
              <p class="text-gray-400 text-lg font-medium">Your generated image will appear here</p>
              <p class="text-gray-500 mt-2">Fill in the details on the left and click Generate</p>
            </div>
            
            <!-- Generated Image Display -->
            <div class="relative group flex-1 flex items-center justify-center" v-if="!loading && displayImage">
              <img class="rounded-xl max-h-[70vh] object-contain shadow-xl main-image" :src="displayImage" alt="Generated image" />
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center">
                <button @click="downloadImage" class="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
                  <svg width="20" height="20" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path d="M117.173 78.583h-12.167a1.75 1.75 0 0 0-1.75 1.75v31.98H24.744v-31.98a1.75 1.75 0 0 0-1.75-1.75H10.827a1.75 1.75 0 0 0-1.75 1.75v45.9a1.75 1.75 0 0 0 1.75 1.75h106.346a1.75 1.75 0 0 0 1.75-1.75v-45.9a1.75 1.75 0 0 0-1.75-1.75zm-1.75 45.9H12.577v-42.4h8.667v31.98a1.75 1.75 0 0 0 1.75 1.75h82.013a1.75 1.75 0 0 0 1.75-1.75v-31.98h8.667z"/>
                    <path d="M62.763 90.018a1.771 1.771 0 0 0 2.475 0L97.764 57.49a1.771 1.771 0 0 0 0-2.475l-8.6-8.6a1.749 1.749 0 0 0-2.475 0L71.833 61.266V1.73a1.75 1.75 0 0 0-1.75-1.75H57.917a1.75 1.75 0 0 0-1.75 1.75v59.536L41.313 46.413a1.749 1.749 0 0 0-2.475 0l-8.6 8.6a1.771 1.771 0 0 0 0 2.475zM40.076 50.125l16.6 16.6a1.75 1.75 0 0 0 2.987-1.237V3.48h8.667v62.01a1.75 1.75 0 0 0 2.987 1.237l16.6-16.6 6.128 6.128L64 86.306 33.948 56.253z"/>
                  </svg>
                  Download Image
                </button>
              </div>
            </div>
          </div>
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
  showImageError.value = '';
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
<style scoped>
.border-item {
  border: 2px solid transparent;
}
.active-border {
  border: 2px solid rgb(3, 127, 3);
}
.active-style {
  border: 3px solid #7a4ced;
  box-shadow: 0 0 15px rgba(122, 76, 237, 0.6);
  transform: scale(1.05);
}
.active-size {
  border: 3px solid #7a4ced;
  background-color: rgba(122, 76, 237, 0.2);
}
.size-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;
}
.size-option:hover {
  transform: translateY(-2px);
}
.style-button {
  position: relative;
  overflow: hidden;
}
.group:hover .small-image {
    display: block;
}
.animation-delay-150 {
  animation-delay: 150ms;
}
.animation-delay-300 {
  animation-delay: 300ms;
}
</style>