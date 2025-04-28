<script setup>
import TemplateLivro from '@/components/TemplateLivro.vue'
</script>

<template>
  <body>
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
         <button><a href="https://pt.wikipedia.org/wiki/Os_Sete_Maridos_de_Evelyn_Hugo"
            >Acessar página do livro</a></button>
        </div>
        <div class="direito">
          <img src="../../public/img/setemaridos.svg" alt="" />
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
      </section>
      <section class="lançamentos">
      <hr>
      <h2>Lançamentos</h2>
        <div class="divMae">
            <div class="superior">
        <TemplateLivro
          imagem="/img/anjos.svg"
          titulo="Anjos e Demônios"
          autor="Dan Brown"
          preco="R$56.70"
        />
        <TemplateLivro
          imagem="/img/verity.svg"
          titulo="Verity"
          autor="Colleen Hoover"
          preco="R$42.01"
        />
        <TemplateLivro
          imagem="/img/caraval.svg"
          titulo="Caraval"
          autor="Stephanie Garber"
          preco="R$42.90"
        />
        <TemplateLivro
          imagem="/img/battle.svg"
          titulo="Battle Royale"
          autor="Koushun Takami"
          preco="R$54.10"
        />
    </div>
    <div class="inferior">
        <TemplateLivro
          imagem="/img/principe.svg"
          titulo="O Príncipe Cruel"
          autor="Holly Black"
          preco="R$41.29"
        />
        <TemplateLivro
          imagem="/img/alice.svg"
          titulo="Alice in Wonderland"
          autor="Lewis Carroll"
          preco="R$48.93"
        />
        <TemplateLivro
          imagem="/img/selecao.svg"
          titulo="A Seleção"
          autor="Kiera Cass"
          preco="R$40.26"
        />
        <TemplateLivro
          imagem="/img/homemgiz.svg"
          titulo="O Homem de Giz"
          autor="c. J. Tudor"
          preco="R$43.99"
        />
    </div>
    </div>
      </section>
    </main>
  </body>
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
  margin: 3vw 0 0 3vw;
}
.banner h1{
  font-size: 3rem;
  margin: 2.5vw 0 2vw 3vw;
}
.banner p{
  font-size: 1.2rem;
  padding: 0 10vw 0 3vw;
 margin: 0 0 1.5vw;
}
.banner button{
  font-size: 0.8rem;
  padding: 0.8rem 0.8rem;
  border: 2px solid #27AE60;
  border-radius: 4px;
  display: inline-block;
  color:#FFFFFF;
  font-weight: bold;
  margin: 0 0 0 3vw;
  background-color: #27AE60 ;
}
.ladoEsquerdo a {
  text-decoration: none;
  color: inherit;
}
.ladoEsquerdo{
  margin: 6vw 0 4vw 6vw;
}
.direito{
  margin: 0 6vw;
}
.fileira ul{
  display: flex;
  text-align: center;
}
.fileira ul li{
  display: flex;
  margin: 5vw 6vw;
}
.fileira ul li h3{
  font-size: 1.7rem;
  font-weight: bold;
}
.fileira ul li span{
  font-size: 2rem;
  color: #2a2d30;
  margin: 0 1vw;
}
.fileira div{
  color: red;
}
.linha-vertical {
  height: 100px;
  width: 1.2px;
  background-color: #937DC2;
  margin: 40px 0 ;
}
.lançamentos h2{
  font-size: 2.3rem;
  margin: 5vw 0 0 7vw;
}


</style>
