import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';

// Create Vue application
const app = createApp(App);

// Mount the app to the element with id="app" in your blade file
app.mount('#app-vue');
