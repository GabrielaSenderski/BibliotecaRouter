<script setup>
import { useCarrinhoStore } from '../stores/carrinho'
import { reactive, computed, ref } from 'vue'

const carrinho = useCarrinhoStore()
const quantidades = reactive({})
const cupom = ref('')
const desconto = ref(0)

carrinho.itens.forEach((item) => {
  if (!(item.id in quantidades)) {
    quantidades[item.id] = item.quantidade || 1
  }
})

function adicionarLivro(id) {
  quantidades[id]++
}

function removerLivro(id) {
  if (quantidades[id] > 1) {
    quantidades[id]--
  } else {
    carrinho.removerItem(id)
  }
}

const total = computed(() =>
  carrinho.itens.reduce((soma, item) => {
    const qtd = quantidades[item.id] || 1
    return soma + item.preco * qtd
  }, 0),
)

const totalComDesconto = computed(() => total.value * (1 - desconto.value))

function aplicarCupom() {
  if (cupom.value.trim() === 'Kennedy10') {
    desconto.value = 0.1
  } else {
    desconto.value = 0
  }
}
</script>

<template>
  <body>
    <main>
      <section class="carrinho">
        <h2>Carrinho</h2>

        <div v-if="carrinho.itens.length === 0">
          <p>O carrinho está vazio.</p>
          <router-link to="/">Voltar para a loja</router-link>
        </div>

        <div v-else>
          <ul>
            <li>Título</li>
            <li>Quantidade</li>
            <li>Subtotal</li>
          </ul>
          <hr />

          <div v-for="item in carrinho.itens" :key="item.id">
            <div>
              <img v-if="item.image" :src="item.image" :alt="item.titulo" />
            </div>
            <div>
              <h3>{{ item.titulo }}</h3>
              <p>Autor: {{ item.autor }}</p>
              <p>Preço: R$ {{ item.preco.toFixed(2) }}</p>
            </div>
            <div>
              <button @click="removerLivro(item.id)">-</button>
              <span>{{ quantidades[item.id] }}</span>
              <button @click="adicionarLivro(item.id)">+</button>
            </div>
            <div>
              <p>R$ {{ (quantidades[item.id] * item.preco).toFixed(2) }}</p>
            </div>
            <hr />
          </div>
        </div>
      </section>

      <section v-if="carrinho.itens.length > 0">
        <router-link to="/">Voltar para a loja</router-link>
        <div>
          <input v-model="cupom" type="text" placeholder="Código de cupom" />
          <button @click="aplicarCupom">Inserir cupom</button>
        </div>
        <div>
          <h4>Total da Compra</h4>
          <ul>
            <li>Produtos: R$ {{ total.toFixed(2) }}</li>
            <hr />
            <li>Frete: Grátis</li>
            <hr />
            <li>
              Total:
              <strong>R$ {{ totalComDesconto.toFixed(2) }}</strong>
            </li>
          </ul>
          <button>Ir para o pagamento</button>
        </div>
      </section>
    </main>
  </body>
</template>

<style scoped></style>
