<script setup>
import { useProductsStore } from '../stores/produtos'
import { useCarrinhoStore } from '../stores/carrinho'
import { useRouter } from 'vue-router'
import { useBuscaStore } from '../stores/busca'
import { computed } from 'vue'


const { products } = useProductsStore()
const carrinho = useCarrinhoStore()
const router = useRouter()
const buscaStore = useBuscaStore()

function adicionarAoCarrinho(produto) {
  carrinho.adicionarItem(produto)
  router.push('/carrinho')
}

const produtosFiltrados = computed(() => {
  return products.filter((produto) =>
    produto.titulo.toLowerCase().includes(buscaStore.termo.toLowerCase())
  )
})
</script>

<template>
  <main>
    <section class="banner">
    <div class="gran">
      <div class="ladoEsquerdo">
        <span class="abril"><h3>Autor de abril</h3></span>
        <h1>Taylor Jenkins Reid</h1>
        <p>
          Taylor Jenkins Reid é uma autora best-seller do The New York Times, conhecida por obras
          como Os Sete Maridos de Evelyn Hugo e Daisy Jones & The Six. Seus livros já foram
          traduzidos para dezenas de idiomas, adaptados para TV e receberam diversos prêmios, como
          o Goodreads Choice Awards.
        </p>
        <button><a href="https://pt.wikipedia.org/wiki/Os_Sete_Maridos_de_Evelyn_Hugo" target="_blank">Acessar página do livro</a></button>
      </div>
      <div class="direito">
          <img src="../../public/img/setemaridos.svg" alt="Exemplar do livro 'Os sete maridos de Evelyn Hugo'" />
        </div>
      </div>
    </section>
    <section class="fileira">
      <hr />
      <ul>
        <li>
          <span class="fa-solid fa-truck-fast" style="color: #241f31"></span>
          <h3>Frete grátis para SC</h3>
        </li>
         <div class="linha-vertical"></div>
        <li>
          <span class="fa-solid fa-star" style="color: #241f31"></span>
          <h3>Livros recomendados</h3>
        </li>
         <div class="linha-vertical"></div>
        <li>
          <span class="fa-solid fa-book-open" style="color: #241f31"></span>
          <h3>Mais vendidos</h3>
        </li>
      </ul>
      <hr>
    </section>
    <section class="usandoPinia">
      <h2 class="lancamento">Lançamentos</h2>
      <div class="product-list">

        <div v-for="product in produtosFiltrados" :key="product.id" class="exibicaoLivro">
          <img :src="product.image" :alt="product.titulo" class="capaLivro" />
          <h2 class="tituloLivro">{{ product.titulo }}</h2>
          <p class="autorLivro">{{ product.autor }}</p>
           <div class="like">
          <p class="precoLivro">R$ {{ product.preco.toFixed(2) }}</p>
            <button @click="product.curtido = !product.curtido">
              <span v-if="!product.curtido" class="fa-regular fa-heart" style="color: #33d17a"></span>
              <span v-else class="fa-solid fa-heart" style="color: #33d17a"></span>
            </button>
          </div>
          <button class="compra" @click="adicionarAoCarrinho(product)">
            <span class="fa-solid fa-cart-shopping" style="color: #fff"></span> Comprar
          </button>
        </div>
        
      </div>
    </section>
  </main>
</template>

<style scoped>
.gran {
  display: flex;
}

.abril {
  font-size: 0.8rem;
  padding: 0.8rem 0.8rem;
  border: 2px solid #27AE60;
  border-radius: 4px;
  display: inline-block;
  color: #27AE60;
  font-weight: bold;
  margin: 3rem 0 0 3rem;
}
.banner h1{
  font-size: 3rem;
  margin: 2.5rem 0 2rem 3rem;
}
.banner p{
  font-size: 1.2rem;
  padding: 0 23rem 0 3rem;
 margin: 0 0 1.5rem;
}
.banner button{
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: 2px solid #27AE60;
  border-radius: 4px;
  display: inline-block;
  color:#FFFFFF;
  font-weight: bold;
  margin: 0 0 0 3rem;
  background-color: #27AE60 ;
}
.ladoEsquerdo a {
  text-decoration: none;
  color: inherit;
}
.ladoEsquerdo{
  margin: 6rem 0 4rem 6rem;
}
.direito{
  margin: 0 6rem 0 0;
}
.fileira ul{
  display: flex;
  text-align: center;
}
.fileira ul li{
  display: flex;
  margin: 5rem 8rem;
}
.fileira ul li h3{
  font-size: 1.7rem;
  font-weight: bold;
}
.fileira ul li span{
  font-size: 2rem;
  color: #2a2d30;
  margin: 0 1rem;
}
.fileira div{
  color: red;
}
.linha-vertical {
  height: 100px;
  width: 1.2px;
  background-color: #937DC2;
  margin: 45px 0 ;
}
.lancamento{
  margin: 6rem 0 4rem 8rem;
  font-size: 2.3rem;
}
.product-list{
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 7rem;

}
.product-list img{
  margin: 0 3rem 1.2rem 0;
}
.tituloLivro{
  font-size: 1.6rem;
}
.autorLivro{
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #4F4C57;
}
.like {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 0 2rem 0;
}
.like button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  font-size: 1.6rem;
}
.precoLivro{
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0 2rem;
}
.compra{
  font-size: 1.2rem;
  padding: 0.8rem 5rem;
  border: 2px solid #27AE60;
  border-radius: 4px;
  display: inline-block;
  color:#FFFFFF;
  font-weight: bold;
  background-color: #27AE60 ;
  cursor: pointer;
  margin: 0 0 8rem 0;
}

@media (max-width: 1281px) {

  .gran {
    flex-direction: row;

    justify-content: center;
    gap: 1rem;
  }

  .abril {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
    margin: 1.5rem auto;
    text-align: center;
  }

  .banner h1 {
    font-size: 2.4rem;
    margin: 1rem 1rem 0.5rem;
    text-align: center;
  }

  .banner p {
    font-size: 1.3rem;
    padding: 0 2rem;
    margin: 0 0 2rem;
    text-align: center;
  }

  .banner button {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
    margin: 0 auto;
    display: block;
  }

  .ladoEsquerdo,
  .direito {
    margin: 1rem 2rem;
  }

  .fileira ul {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0;
    margin: 0;
  }

  .fileira ul li {
    margin: 2rem 1rem;
    align-items: center;
  }

  .linha-vertical {
    display: none;
  }

  .lancamento {
    font-size: 2.2rem;
    margin: 3rem 1rem;
    text-align: center;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 2rem;
  }

  .product-list img {
    width: 220px;
    height: auto;
    margin: 1rem;
  }

  .exibicaoLivro {
    margin: 0 1rem;
    max-width: 250px;
  }

  .tituloLivro {
    font-size: 1.3rem;
    margin: 0.5rem 1.2rem;
  }

  .autorLivro {
    font-size: 1rem;
    margin: 0.5rem 1.2rem;
  }

  .like {
    width: 100%;
  }

  .like button {
    margin: 0.5rem 1rem;
  }

  .precoLivro {
    font-size: 1.1rem;
   margin: 0.5rem 1.2rem;;
  }

  .compra {
    width: 90%;
    font-size: 1rem;
    padding: 1rem;
    margin: 0 1rem 2rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .gran {
    flex-direction: column;
    align-items: center;
  }

  .abril {
    font-size: 1.2rem;
    padding: 0.6rem;
    margin: 2rem auto;
    display: block;
    text-align: center;
  }

  .banner h1 {
    font-size: 2rem;
    margin: 1.5rem 1rem 1rem;
    text-align: center;
  }

  .banner p {
    font-size: 1.2rem;
    padding: 0 1rem;
    margin: 0 0 2rem;
    text-align: center;
  }

  .banner button {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
    margin: 0 auto;
    display: block;
  }

  .ladoEsquerdo,
  .direito {
    margin: 1rem 1rem;
  }

  .fileira ul {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .fileira ul li {
    margin: 2rem auto;
    align-items: center;
  }

  .linha-vertical {
    display: none;
  }
  .lancamento {
    font-size: 2rem;
    margin: 3rem 1rem;
    text-align: center;
  }

  .product-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 3.5rem;
  }

  .product-list img {
    width: 100%;
    height: auto;
    margin: 1rem 0;
  }
  .exibicaoLivro{
    margin: 0 1.5rem;
  }

  .tituloLivro {
    font-size: 1.4rem;
    text-align: center;
  }

  .autorLivro {
    font-size: 1rem;
    text-align: center;
  }

  .like {
    width: 100%;
  }

  .like button {
    margin: 0.5rem 0;
  }

  .precoLivro {
    font-size: 1.2rem;
  }

  .compra {
    width: 85%;
    font-size: 1rem;
    padding: 1rem;
    margin: 2rem auto;
    display: block;
    text-align: center;
  }
}


</style>
