import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue"),
    },
    {
        path: "/menu",
        name: "Menu",
        component: () => import("../components/Menu.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

