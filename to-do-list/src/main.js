import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faCircle } from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faPlus, faCheckCircle, faCircle, faTrashAlt);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon) // Register the FontAwesomeIcon component globally
  .mount('#app');