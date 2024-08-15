import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../components/ProductList.vue';
import FavoritesPage from '../components/FavoritesPage.vue';
import AboutPage from '../components/AboutPage.vue';

const routes = [
    { path: '/', component: ProductList },
    { path: '/favorites', component: FavoritesPage },
    { path: '/about', component: AboutPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
