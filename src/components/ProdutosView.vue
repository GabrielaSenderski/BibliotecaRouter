<script setup>
  import ProdutosView from './ProdutosView.vue';
  import { useProductsStore } from '../stores/produtos';
  const productStore = useProductsStore();
</script>
<template>
  <product-list
    :produtos="productStore.products"
    @remove="productStore.removeProduct"
  />
</template>
