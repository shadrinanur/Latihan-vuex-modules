import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Berita from "../views/Berita.vue";
import Products from "../views/Product.vue";
import SingleProducts from "../views/SingleProducts.vue";
import Kategori from "../views/Kategori.vue";

const routes = [ 
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
    },
    {
        path: "/berita",
        name: "Berita",
        component: Berita, 
    },
    {
        path: "/product",
        name: "Product",
        component: Products, 
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProducts,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori, 
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router;