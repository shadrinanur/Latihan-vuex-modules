import axios from "axios";

const products = {
    namespaced: true,
    state: {
        productsData: [],
    },
    getters: { 
        getProducts: (state) => state.productsData,
        // get single product
        getProductsById: (state) => (productsId) => {
            console.log("ProductsId:", productsId);
            console.log("ProductsData:", state.productsData);
            const products = state.productsData.find((p) => p.id == productsId);
            console.log("Products:", products);
            return products;
        }
    },
    actions: {
      async fetchProducts({ commit }) {
        try {
            const data = await axios.get(
                "https://fakestoreapi.com/products"
            );
            commit("SET_PRODUCTS", data.data);
        } catch (error) {
            alert (error);
            console.log(error);
        }
      },
    },

     // get single product
     async fetchSingleProducts({ commit }, productsId) {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products/${productsId}'
            );
            commit("SET_SINGLE_PRODUCTS", response.data);
        } catch (error) {
            alert (error);
            console.log(error);
        }
    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.productsData = products;
        },
        SET_SINGLE_PRODUCT(state, products) {
            state.singleProducts = products;
        },
    },
};

export default products;