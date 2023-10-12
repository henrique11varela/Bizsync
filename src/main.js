import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import pages
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";
import Contacts from "./views/Contacts.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: About},
        {path: '/services', component: Services},
        {path: '/contacts', component: Contacts},
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
