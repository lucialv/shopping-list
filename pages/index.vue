<template>
  <div class="flex flex-col justify-between min-h-screen ...">
    <client-only
      class="text-white grid grid-cols-1 justify-items-center pt-[25%] text-xl font-['Whitney']"
      placeholder=" Loading..."
    >
      <div
        class="container mx-auto flex px-8 md:pb-16 md:pt-16 py-8 md:flex-row flex-col items-center"
      >
        <div
          class="justify-center md:w-full flex flex-col text-white mb-16 md:mb-0 items-center text-center drop-shadow-xl font-['Whitney']"
        >
          
          <div class="relative h-10 min-w-[200px]">
            <h1 flex text-center pl-5 pr-5 tracking-wide> <strong>Lista de la compra</strong></h1>
            <form @submit.prevent="submit($event)">
              <label id="shop-input"></label>
                <input type="text" ref="text" aria-labelledby="shop-input" v-model="inputText" :maxlength="18"
                  class="peer h-10 w-25 xl:h-10 xl:w-50 rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" Patatas de jamón..."
                />
            </form>
          </div>
          <div class="pt-8 items-center">
            <button
              v-for="(item, index) in list"
              :key="index"
              class="m-2 flex-wrap peer min-w-[20px] h-10 w-25 xl:h-10 xl:w-50 rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 hover:border-2 hover:border-red-500 hover:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              @click="removeItem(index)"
              >
              {{ capitalizeFirstLetter(item) }}
            </button>
          </div>
        </div>
      </div>
      <footer class="body-font">
        <div class="container px-5 py-8 mx-auto flex items-center flex-col">
          <p
            class="text-sm opacity-70 sm:py-2 drop-shadow-xl sm:mt-0 mt-4 text-white font-['Whitney']"
          >
            © 2023 Lucía Álvarez
          </p>
        </div>
      </footer>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const list = reactive<string[]>([]);
const text = ref<HTMLInputElement | null>(null);
const inputText = ref('');

function submit(event: Event) {
  event.preventDefault();
  if (!inputText.value) return;

  const normalizedInput = inputText.value.toLowerCase();
  const existingIndex = list.findIndex((item) => item.toLowerCase() === normalizedInput);
  if (existingIndex !== -1) {
    // If text already exists, update the existing item
    list[existingIndex] = inputText.value;
  } else {
    // Otherwise, add the text as a new item
    list.push(inputText.value);
  }

  inputText.value = '';
}

function removeItem(index: number) {
  list.splice(index, 1);
}
function capitalizeFirstLetter(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
</script>