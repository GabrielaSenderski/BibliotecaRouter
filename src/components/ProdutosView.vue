<script setup>
  import ProductList from '../components/ProductList.vue';
  import { useProductsStore } from '../stores/produtos';
  const productStore = useProductsStore();
</script>
<template>
  <product-list
    :produtos="productStore.products"
    @remove="productStore.removeProduct"
    @add="productStore.addProduct"
  />
</template>
