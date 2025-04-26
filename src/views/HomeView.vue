<script setup>
import TemplateLivro from '@/components/TemplateLivro.vue'
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
      <section class="lançamentos">
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
