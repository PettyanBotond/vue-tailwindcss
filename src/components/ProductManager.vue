<script setup></script>

<script>
export default {
    name: "ProductManager",
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async loadProducts() {
            this.products = await getProducts();
        },

        async addProduct(product) {
            await createProducts(product);
            await this.loadProducts();
        }
    },
    mounted() {
        this.loadProducts();
    },
};
</script>

<template>
    <main class="flex justify-center items-center flex-col">
        <h1 class="">Termékek</h1>

        <table class="">
            <thead class="">
                <tr class="flex justify-around">
                    <th class="">Id</th>
                    <th class="">Név</th>
                    <th class="">Ár</th>
                    <th class="">Raktáron</th>
                    <th class="">Műveletek</th>
                </tr>
            </thead>
            <tbody class="w-full">
                <td class="">{{ product.id }}</td>
                <td class="">{{ product.name }}</td>
                <td class="">{{ product.price }}</td>
                <td class="">{{ product.inStock ? 'Igen' : 'Elfogyott' }}</td>
                <td class=""><button type="button" @click="deleteProducts(product.id)">Törlés</button></td>
            </tbody>
        </table>
    </main>
</template>