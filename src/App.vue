<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <header>
        <nav>

          <routerLink to="/"><img src="/public/img/Logo.png" alt="Logo IFBooks"></routerLink>
        <div class="search">
            <input type="text" placeholder="   Pesquisar">
            <img src="/public/img/lupa.svg" alt="lupa">
        </div>
        <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Devoluções</a></li>
            <li><RouterLink to="/carrinho" class="botao-carrinho">
            <span class="fa-solid fa-cart-shopping" style="color: #33d17a; font-size: 1vw;"></span></RouterLink></li>
            <div class="linha-vertical"></div>
            <li><button><span class="fa-solid fa-heart" style="color: #33d17a; font-size: 1vw;"></span></button></li>
            <div class="linha-vertical"></div>
            <li><button><span class="fa-solid fa-user" style="color: #33d17a; font-size: 1vw;"></span></button></li>
        </ul>
        </nav>
        <hr>
    </header>

    <RouterView />
    <footer>
      <div class="todas">
        <div class="icone">
    <p>IFbooks</p>
        </div>
<div class="contato">
  <p>Contato</p>
  <ul>
    <li>+55 47 40045263</li>
    <li>8h às 23h - Seg a Sex</li>
    <li>Contato@ifbooks.com</li>
  </ul>
</div>
      </div>
     <hr style="border: 1px solid white;">
<p class="copy">&copy; Alguns direitos reservados. IFbooks 2025.</p>
</footer>
</template>

<style scoped>
footer{
  background-color: #27AE60;
}
footer p{
  color: white;
}
footer li{
  color: rgba(255, 255, 255, 80%);
  margin: 1vw 0 ;
}
.todas {
  display: flex;
}
.icone{
  margin: 2vw 0 4vw 6vw;
}
.contato{
  margin: 2vw 4vw 0 73vw;
}
footer .copy{
  text-align: center;
  margin: 1.5vw;
  font-size: 1rem;
  color: rgba(255, 255, 255, 60%);
}
</style>
