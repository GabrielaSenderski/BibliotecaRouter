<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <header>
        <nav>
          <link rel="stylesheet" href="../src/assets/main.css">
          <routerLink to="/"><img src="/public/Logo.png" alt="Logo IFBooks"></routerLink>
        <div class="search">
            <input type="text" placeholder="Pesquisar  ">
            <img src="/public/lupa.svg" width="15" height="13" alt="lupa">
        </div>
        <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Devoluções</a></li>
            <li><RouterLink to="/carrinho" class="botao-carrinho">
  <span class="fa-solid fa-cart-shopping" style="color: #33d17a;"></span>
</RouterLink>
</li>
            <li><button><span class="fa-solid fa-heart" style="color: #33d17a;"></span></button></li>
            <li><button><span class="fa-solid fa-user" style="color: #33d17a;"></span></button></li>
        </ul>
        </nav>
        <hr>
    </header>

    <RouterView />
</template>

<style scoped>

</style>
