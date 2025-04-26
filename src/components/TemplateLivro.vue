<script setup>
import { defineProps, ref } from 'vue'

const curtido = ref(false)
defineProps(['imagem', 'titulo', 'autor', 'preco'])


</script>
<template>
  <div>
   <img :src="imagem" alt="">
    <h3>{{ titulo }}</h3>
    <p>{{ autor }}</p>
    <h5>{{ preco }}</h5>

    <div class="like">
      <button @click="curtido = !curtido">
        <span v-if="!curtido" class="fa-regular fa-heart" style="color: #33d17a"></span>
        <span v-else class="fa-solid fa-heart" style="color: #33d17a"></span>
      </button>
    </div>
    <RouterLink to="/carrinho"><span class="fa-solid fa-cart-shopping" style="color: #ffff;"></span> Comprar</RouterLink>
  </div>
</template>
<style>
</style>
