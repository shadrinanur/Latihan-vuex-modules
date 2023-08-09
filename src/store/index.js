import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/user";
import berita from "./modules/berita";
import products from "./modules/products";
import kategori from "./modules/kategori";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        users,
        berita,
        products,
        kategori
   },
});

export default store;
