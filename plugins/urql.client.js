import { defineNuxtPlugin } from '#app'
import urql from '@urql/vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(urql, {
        url: 'https://rickandmortyapi.com/api',
    });
});
