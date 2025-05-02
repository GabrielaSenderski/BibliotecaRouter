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

        <div class="vazio" v-if="carrinho.itens.length === 0">
          <p>O carrinho está vazio.</p>
          <router-link class="loja" to="/">Voltar para a loja</router-link>
        </div>

        <div v-else>
          <ul>
           <span><li>Título</li></span>
            <li>Quantidade</li>
            <li>Subtotal</li>
          </ul>
          <hr class="linha-escura">

          <div class="item" v-for="item in carrinho.itens" :key="item.id">
            <div>
              <img v-if="item.image" :src="item.image" :alt="item.titulo" />
            </div>
            <div class="info">
              <h3>{{ item.titulo }}</h3>
              <p>{{ item.autor }}</p>
              <span><p>R$ {{ item.preco.toFixed(2) }}</p></span>
            </div>
            <div class="controle">
               <button class="menos" @click="removerLivro(item.id)">-</button>
               <span>{{ quantidades[item.id] }}</span>
               <button class="mais" @click="adicionarLivro(item.id)">+</button></div>
            <div class="valor">
              <p>R$ {{ (quantidades[item.id] * item.preco).toFixed(2) }}</p>
            </div>
          </div>
          <hr class="linha-escura">
        </div>
      </section>

      <section v-if="carrinho.itens.length > 0">
        <router-link class="loja" to="/">Voltar para a loja</router-link>
        <div class="mae">
        <div class="esquerdo">
          <input v-model="cupom" type="text" placeholder="Código de cupom" />
          <button class="cupom" @click="aplicarCupom">Inserir cupom</button>
        </div>
        <div class="direito">
          <h4>Total da Compra</h4>
          <ul class="detalhes">
            <li>Produtos: R$ {{ total.toFixed(2) }}</li>
            <li>Frete: Grátis</li>
            <li>
              Total:
              <strong>R$ {{ totalComDesconto.toFixed(2) }}</strong>
            </li>
          </ul>
          <div class="pagar-wrapper">
            <button class="pagar">Ir para o pagamento</button>
          </div>
        </div>
      </div>
      </section>
    </main>
  </body>
</template>

<style scoped>
.carrinho h2{
  font-size: 2.3rem;
  margin: 14vw 0 2vw 9vw;
  color: #27AE60;
}
.carrinho ul{
  display: flex;
}
.carrinho li{
  font-size: 1.5rem;
  margin: 5vw 10vw 1vw;
  font-weight: bolder;
}
span{
  margin: 0 19vw 0 0;
}
.linha-escura {
  border: none;
  height: 1.2px;
  background-color: rgba(200, 200, 200, 1);
}
.loja {
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: 2px solid gray;
  border-radius: 4px;
  color: black;
  margin: 2vw 0 6vw 8vw;
  background-color: white;
  cursor: pointer;
  text-align: center;
}
input{
  width: 18vw;
  height: 3.8vw;
  margin: 0 1vw 0 8vw;
  font-size: 1.2rem;
  border-color: black;
  border-radius: 4px;
}
.cupom{
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: 2px solid #27AE60;
  border-radius: 4px;
  display: inline-block;
  color:#FFFFFF;
  background-color: #27AE60 ;
  cursor: pointer;
}
.mae{
  display: flex;
}
.direito {
  display: flex;
  flex-direction: column;
  padding: 2rem 16rem 2rem 0;
  border: 2px solid gray;
  border-radius: 4px;
  background-color: white;
  margin: 0 0 10vw 19vw;
  gap: 1.2rem;
}

.direito h4 {
  font-size: 1.4rem;
  margin: 0 0 0 2vw;
  gap: 1rem;
}

.detalhes {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 200%;
}

.detalhes li {
  position: relative;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  margin: 0 0 0 2vw;
  font-size: 1.2;
  line-height: 3vw;
}


.detalhes li:not(:last-child)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0%;
  right: 5%;
  height: 1px;
  background-color: rgba(200, 200, 200, 1);
}

.pagar-wrapper {
  display: flex;
  justify-content: center;
  width: 200%;
}
.pagar {
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #27AE60;
  cursor: pointer;
}
.vazio p{
  margin: 3vw 0 0 9vw;
  font-size: 1.2rem;
  font-weight: bold;
}
.item{
  display: flex;
}
.item img{
  width: 200px;
  height: 150px;
  margin: 3vw 0vw 2vw 7vw ;
}
.info{
 line-height: 2.5rem;
 margin: 3vw 0 0 0;
}
.info h3{
  font-size: 1.5rem;
}
.info p{
  font-size: 1rem;
}
.info span p{
  font-size: 1.3rem;
  font-weight: bold;
}
.controle {
  margin: 5vw 2vw 7vw 14vw;
  padding: 1.2vw 1.5vw;
  border: 1px solid black;
  font-size: 1.2rem;
  font-weight: bold;
}
.controle span{
  margin: 1.5vw;
}
.controle button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.6rem;
}
.valor{
  font-size: 1.6vw;
  font-weight: bold;
  margin: 6vw 2vw 0 17.5vw;
}


</style>

