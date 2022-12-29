import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/home/HomeComponent.vue'
import AtomHelpComponent from './components/atom-help/AtomHelpComponent.vue'

import { defineCustomElements } from '@atom/components/dist/loader';

import '@atom/components/dist/atom/atom.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeComponent
        },
        {
            path: '/atom-help',
            component: AtomHelpComponent
        }
    ]
});

const app = createApp(App)
app.use(router)

app.mount('#app')

defineCustomElements(window);