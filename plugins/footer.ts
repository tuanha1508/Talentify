import { defineNuxtPlugin } from '#app';
import TheFooter from '../components/TheFooter.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('TheFooter', TheFooter);
}); 