<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useBuscaStore } from './stores/busca'

const buscaStore = useBuscaStore()
</script>

<template>
  <header>
    <nav>
      <routerLink to="/"><img src="/public/img/Logo.png" alt="Logo IFBooks" /></routerLink>
      <div class="search">
        <input v-model="buscaStore.termo" type="text" placeholder="   Pesquisar" />
        <img src="/public/img/lupa.svg" alt="lupa" />
      </div>
      <ul>
        <li><a href="#">Termos</a></li>
        <li><a href="#">Equipe</a></li>
        <li><a href="#">Envio</a></li>
        <li><a href="#">Devoluções</a></li>
        <li>
          <RouterLink to="/carrinho" class="botao-carrinho">
            <span class="fa-solid fa-cart-shopping" style="color: #33d17a; font-size: 1vw"></span
          ></RouterLink>
        </li>
        <div class="linha-vertical"></div>
        <li>
          <a href="#"
            ><span class="fa-solid fa-heart" style="color: #33d17a; font-size: 1vw"></span
          ></a>
        </li>
        <div class="linha-vertical"></div>
        <li>
          <a href="#"
            ><span class="fa-solid fa-user" style="color: #33d17a; font-size: 1vw"></span
          ></a>
        </li>
      </ul>
    </nav>
    <hr />
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
    </div>
      <div class="contato">
        <p>Contato</p>
        <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Devoluções</a></li>
            <li><RouterLink to="/carrinho" class="botao-carrinho">
            <span class="fa-solid fa-cart-shopping" style="color: #33d17a; font-size: 1rem;"></span></RouterLink></li>
            <div class="linha-vertical"></div>
            <li><a href="#"><span class="fa-solid fa-heart" style="color: #33d17a; font-size: 1rem;"></span></a></li>
            <div class="linha-vertical"></div>
            <li><a href="#"><span class="fa-solid fa-user" style="color: #33d17a; font-size: 1rem;"></span></a></li>
        </ul>
         </div>
        <hr>
        </footer>
    <RouterView />
</template>

<style scoped>
footer {
  background-color: #27ae60;
  margin: 8vw 0 0 0;
}
footer p {
  color: white;
}
footer li {
  color: rgba(255, 255, 255, 80%);
  margin: 1rem 0 ;

}
.todas {
  display: flex;
}

.icone{
  margin: 3rem 2rem 4rem 6rem;
}
.contato{
  margin: 3rem 4rem 0 60rem;

}
footer .copy {
  text-align: center;
  font-size: 1rem;
  color: rgba(255, 255, 255, 60%);
  padding: 1rem;
}
footer .icone span {
  color: white;
  font-size: 2rem;
  margin: 0.5rem 0.8rem 0.5rem 0;
}
.contato img {
  margin: 5rem 0 4rem;
}
.contato p {
  font-weight: bold;
}
.contato ul li{
  line-height: 1.2rem;
}

@media (max-width: 1281px) {
  footer {
    margin: 3rem 0 0 0;
  }

  .todas {
    display: flex;
    gap: 2rem;
  }

  .icone {
    margin: 2rem 2rem 0 10rem;
  }

  footer .icone span {
    font-size: 2rem;
    margin: 0.4rem 0.6rem 0 0;
  }

  .contato {
    margin: 2rem 2rem 1rem 40rem;
  }

  .contato img {
    margin: 1.5rem auto;
    width: 160px;
    height: auto;
    display: block;
  }

  .contato p {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .contato ul li {
    line-height: 1.6rem;
    font-size: 1rem;
  }

  footer p {
    font-size: 1.3rem;
    text-align: center;
  }

  footer .copy {
    font-size: 1.1rem;
    padding: 1rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  footer {
    margin: 4rem 0 0 0;

  }

  .icone {
    margin: 2rem 2rem ;
  }

  footer .icone span {
    font-size: 2.4rem;
    margin: 0.5rem 0.8rem 0 0;
  }

  .contato {
    margin: 2rem 1rem 1rem 20rem;
  }

  .contato img {
    margin: 2rem auto;
    width: 180px;
    height: auto;
    display: block;
  }

  .contato p {
    font-size: 1.4rem;
  }

  .contato ul li {
    line-height: 1.5rem;
    font-size: 0.95rem;
  }

  footer p {
    font-size: 1.4rem;
  }

  footer .copy {
    font-size: 1.2rem;
    padding: 1rem 1rem 2rem;
  }
}
</style>
