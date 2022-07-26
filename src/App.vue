<script setup lang="ts">
// @ts-nocheck
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { convertIntoAltNodes } from './altNodes/altConversion'
import { htmlMain } from './html/htmlMain'
import { ref } from 'vue'
const token = 'figd_WhYvhA1BFyQCBubAtTsWHyfcjv_9rWnP2v-UTXqT'
const key = 'V6Z1nktYkYOr0QsHfgv2av'
const xxx = ref('')
fetch(`https://api.figma.com/v1/files/${key}`, {
  headers: {
    'X-FIGMA-TOKEN': token,
  }
}).then((res) => res.json()).then((res) => {
  const screens = res.document.children[0].children
  console.log('xxxScreens', screens)
  const converted = convertIntoAltNodes(
      [screens[18]],
      null
  );
  console.log('xxxConverted', converted)
  xxx.value = htmlMain(converted)
})
</script>

<template>
  <div v-html="xxx"></div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
