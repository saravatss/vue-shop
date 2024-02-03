import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/index.vue';
import Catalog from './pages/catalog/index.vue';
import CatalogCategory from './pages/catalog/category.vue';
import CatalogDetail from './pages/catalog/id.vue';
import Cart from './pages/catalog/Cart.vue';

import App from './App.vue';

import './assets/main.css';

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/catalog', 
        component: Catalog,
        children: [
        { 
            path: ':category', 
            component: CatalogCategory,
            children: 
            { 
                path: ':id', 
                component: CatalogDetail 
            },
        } 
    ]},
    { 
        path: '/cart', 
        component: Cart 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount('#app');