<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">All Product</h2>
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-2">
                <div v-for="products in getProducts" :key="products.id">
                    <router-link :to="{ name: 'SingleProduct', params: { id: products.id } }" class="group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img :src="products.image"
                                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                class="h-full w-full object-cover object-center group-hover:opacity-75">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">{{ products.title }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">${{ products.price }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('products', ['getProducts']),
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
    },
    created() {
        this.fetchProducts();
    },
}
</script>
