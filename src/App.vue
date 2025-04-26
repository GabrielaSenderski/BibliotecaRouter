<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <header>
        <nav>
          <routerLink to="/"><img src="/public/img/Logo.png" alt="Logo IFBooks"></routerLink>
        <div class="search">
            <input type="text" placeholder="Pesquisar">
            <img src="/public/img/lupa.svg" alt="lupa">
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
    <footer>
  <div>
  IFBooks
</div>
<div>
  Contato
  <ul>
    <li>+55 47 40045263</li>
    <li>8h às 23h - Seg a Sex</li>
    <li>Contato@ifbooks.com</li>
  </ul>
</div>
<hr>
<p>&copy; Alguns direitos reservados. IFbooks 2025.</p>
</footer>
</template>

<style scoped>

</style>
