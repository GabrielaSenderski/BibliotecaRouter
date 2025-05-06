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
            <li><a href="#"><span class="fa-solid fa-heart" style="color: #33d17a; font-size: 1vw;"></span></a></li>
            <div class="linha-vertical"></div>
            <li><a href="#"><span class="fa-solid fa-user" style="color: #33d17a; font-size: 1vw;"></span></a></li>
        </ul>
        </nav>
        <hr>
    </header>

    <RouterView />
    <footer>
      <div class="todas">
        <div class="icone">
    <p>IFbooks</p>
    <span class="fa-brands fa-square-facebook"></span>
    <span class="fa-brands fa-square-instagram"></span>
    <span class="fa-brands fa-square-twitter"></span>
        </div>
<div class="contato">
  <p>Contato</p>
  <ul>
    <li> <span class="fa-solid fa-phone"></span>  +55 47 40045263</li>
    <li> <span class="fa-solid fa-clock"></span>  8h às 23h - Seg a Sex</li>
    <li> <span class="fa-solid fa-envelope"></span>  contato@ifbooks.com</li>
  </ul>
  <img src="../public/img/ways to pay.png" alt="pague">
</div>
      </div>
     <hr style="border: 1px solid white;">
<p class="copy">&copy; Alguns direitos reservados. IFbooks 2025.</p>
</footer>
</template>

<style scoped>
footer{
  background-color: #27AE60;
  margin: 8vw 0 0 0;
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
  font-size: 1rem;
  color: rgba(255, 255, 255, 60%);
  padding: 1vw;
}
footer .icone span{
  color: white;
  font-size: 2rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
.contato img{
  margin: 5rem 0 4rem;
}
.contato p{
  font-weight: bold;
}
</style>
