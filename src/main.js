import  '@/services/HttpCore';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/css/app.css'
import './assets/css/offcanvas.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { tooltip } from './directives/tooltip.js'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, far, fab)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.directive('tooltip', tooltip);

app.mount('#app');
