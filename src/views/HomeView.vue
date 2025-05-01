<script setup>
import { useProductsStore } from '../stores/produtos'
import { useCarrinhoStore } from '../stores/carrinho'

const { products } = useProductsStore()
const carrinho = useCarrinhoStore()
import { useRouter } from 'vue-router'
const router = useRouter()

function adicionarAoCarrinho(produto) {
  carrinho.adicionarItem(produto)
  router.push('/carrinho')
}
</script>

<template>
  <body>
    <main>
      <section class="banner">
        <div class="ladoEsquerdo">
          <p>Autor de Abril</p>
          <h1>Taylor Jenkins Reid</h1>
          <p>
            Taylor Jenkins Reid é uma autora best-seller do The New York Times, conhecida por obras
            como Os Sete Maridos de Evelyn Hugo e Daisy Jones & The Six. Seus livros já foram
            traduzidos para dezenas de idiomas, adaptados para TV e receberam diversos prêmios, como
            o Goodreads Choice Awards.
          </p>
          <a href="https://pt.wikipedia.org/wiki/Os_Sete_Maridos_de_Evelyn_Hugo"
            >Acessar página do livro</a
          >
        </div>
        <div>
          <img src="../../public/img/setemaridos.svg" alt="" />
        </div>
      </section>
      <section class="fileira">
        <hr />
        <ul>
          <li>
            <span class="fa-solid fa-truck-fast" style="color: #241f31"></span>
            <p>Frete grátis para SC</p>
          </li>
          <li>
            <span class="fa-solid fa-star" style="color: #241f31"></span>
            <p>Livros recomendados</p>
          </li>
          <li>
            <span class="fa-solid fa-book-open" style="color: #241f31"></span>
            <p>Mais vendidos</p>
          </li>
        </ul>
      </section>
      <section class="usandoPinia">
        <div class="product-list">
          <div v-for="product in products" :key="product.id" class="exibicaoLivro">
            <img :src="product.image" :alt="product.titulo" class="capaLivro" />
            <h2 class="tituloLivro">{{ product.titulo }}</h2>
            <p class="autorLivro">Autor: {{ product.autor }}</p>
            <p class="precoLivro">Preço: R$ {{ product.preco.toFixed(2) }}</p>
            <div class="like">
              <button @click="curtido = !curtido">
                <span v-if="!curtido" class="fa-regular fa-heart" style="color: #33d17a"></span>
                <span v-else class="fa-solid fa-heart" style="color: #33d17a"></span>
              </button>
            </div>
            <button @click="adicionarAoCarrinho(product)">
              <span class="fa-solid fa-cart-shopping" style="color: #fff"></span> Comprar
            </button>
          </div>
        </div>
      </section>
     
    </main>
  </body>
</template>
