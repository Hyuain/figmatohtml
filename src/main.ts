import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createFigma } from 'figma-api-stub'
const figma = createFigma({
  simulateErrors: true,
  isWithoutTimeout: false,
});

// @ts-ignore for some reason, need to override this for figma.mixed to work
window.figma = figma;


createApp(App).mount('#app')
