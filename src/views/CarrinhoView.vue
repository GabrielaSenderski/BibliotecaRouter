<script setup>
import { useCarrinhoStore } from '../stores/carrinho'

const carrinho = useCarrinhoStore()
</script>
<template>
  <body>
    <main>
      <section class="carrinho">
        <h2>Carrinho</h2>
        <div>
          <ul>
            <li>Titulo</li>
            <li>Quantidade</li>
            <li>Subtotal</li>
          </ul>
          <hr />
          <div v-for="(item, index) in carrinho.itens" :key="index">
  <p>{{ item.titulo }}</p>
  <p>Autor: {{ item.autor }}</p>
  <p>Preço: R$ {{ item.preco.toFixed(2) }}</p>
  <button @click="carrinho.removerItem(index)">Remover</button>
</div>
        </div>
        <hr />
      </section>
      <section>
        <router-link to="/">Voltar para a loja</router-link>
        <div>
          <input type="text" placeholder="Codigo de cupom" />
          <button>Inserir cupom</button>
        </div>
        <div>
          <h4>Total da Compra</h4>
          <ul>
            <li>Produtos</li>
            <hr />
            <li>Frete</li>
            <hr />
            <li>Total</li>
          </ul>
          <button>Ir para o pagamento</button>
        </div>
      </section>
    </main>
  </body>
</template>

<style></style>
