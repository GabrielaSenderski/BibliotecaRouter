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
  margin: 14rem 0 2rem 9rem;
  color: #27AE60;
}
.carrinho ul{
  display: flex;
}
.carrinho li{
  font-size: 1.5rem;
  margin: 5rem 10rem 1rem;
  font-weight: bolder;
}
span{
  margin: 0 19rem 0 0;
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
  margin: 2rem 0 6rem 8rem;
  background-color: white;
  cursor: pointer;
  text-align: center;
}
input{
  width: 18rem;
  height: 3.8rem;
  margin: 0 1rem 0 8rem;
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
  margin: 0 0 10rem 19rem;
  gap: 1.2rem;
}

.direito h4 {
  font-size: 1.4rem;
  margin: 0 0 0 2rem;
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
  margin: 0 0 0 2rem;
  font-size: 1rem;
  line-height: 3rem;
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
  text-align: center;
  margin: 3rem 0;
  font-size: 1rem;
  font-style: italic;
}
.item{
  display: flex;
}
.item img{
  width: 200px;
  height: 150px;
  margin: 3rem 0rem 2rem 6rem ;
}
.info{
 line-height: 2.5rem;
 margin: 3rem 0 0 0;
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
  margin: 6rem 2rem 8rem 16rem;
  padding: 1.2rem 1.5rem;
  border: 1px solid black;
  font-size: 1.2rem;
  font-weight: bold;
}
.controle span{
  margin: 1.5rem;
}
.controle button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.6rem;
}
.valor{
  font-size: 1.6rem;
  font-weight: bold;
  margin: 6rem 3rem 0 17rem;
}

@media (max-width: 1281px) {
  .carrinho h2 {
    font-size: 2rem;
    margin: 10rem 0 2rem 5rem;
  }

  .carrinho ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .carrinho li {
    font-size: 1.3rem;
    margin: 3rem 6rem 1rem;
  }

  span {
    margin: 0 20rem 0 2rem;
  }

  .loja {
    font-size: 1rem;
    margin: 2rem 0 4rem 5rem;
  }

  input {
    width: 16rem;
    margin: 0 1rem 0 5rem;
  }

  .mae {
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .direito {
    padding: 2rem;
    margin: 0 2rem 6rem;
    width: 100%;
    max-width: 500px;
  }

  .detalhes {
    width: 100%;
  }

  .pagar-wrapper {
    width: 100%;
    justify-content: flex-start;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }

  .item img {
    width: 150px;
    height: auto;
    margin: 2rem 0 2rem 4rem;
  }

  .info {
    margin: 0;
    line-height: 2rem;
  }

  .info h3 {
    font-size: 1.3rem;
  }

  .info p {
    font-size: 1rem;
  }

  .info span p {
    font-size: 1.1rem;
  }

  .controle {
    margin: 4rem 4rem 6rem 10rem;
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }

  .valor {
    font-size: 1.4rem;
    margin: 2rem 4rem 4rem 8rem;
  }
}

@media (max-width: 768px) {
  .carrinho h2 {
    font-size: 1.8rem;
    margin: 4rem 1rem 2rem;
    text-align: center;
  }

  .carrinho ul {

  }

  .carrinho li {
    font-size: 1.2rem;
    margin: 2rem 2rem;

  }

  span {
    margin: 0 11rem 0 1rem;
  }

  .loja {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
    margin: 2rem auto;
    display: block;
    width: 50%;
  }

  input {
    width: 100%;
    margin: 1rem auto;
    display: block;
    height: 3rem;
    font-size: 1rem;
  }

  .cupom {
    display: block;
    width: 80%;
    margin: 1rem auto;
    font-size: 1.2rem;
    padding: 0.8rem 0;
    text-align: center;
  }

  .mae {
    flex-direction: column;
    align-items: center;
  }

  .direito {
    width: 90%;
    margin: 2rem auto;
    padding: 1.5rem;
  }

  .direito h4 {
    font-size: 1.4rem;
    margin: 0 0 1rem 0;
    text-align: center;
  }

  .detalhes {
    width: 100%;
  }

  .detalhes li {
    font-size: 1.2rem;
    margin-left: 0;
    text-align: left;
    line-height: 2.5rem;
  }

  .pagar-wrapper {
    width: 100%;
    justify-content: center;
  }

  .pagar {
    font-size: 1.3rem;
    width: 80%;
    padding: 1rem;
  }

  .item {
    align-items: center;
  }

  .item img {
    width: 40%;
    height: auto;
    margin: 1.5rem 0 1.5rem 1.5rem ;
  }

  .info {
    margin: -3rem 1rem 1rem -8rem;
    line-height: 2rem;
  }

  .info h3 {
    font-size: 1.4rem;
  }

  .info p {
    font-size: 1.2rem;
  }

  .info span p {
    font-size: 1.4rem;
  }

  .controle {
    margin: 2rem -2rem;
    padding: 0.1rem 1rem;
    font-size: 1.4rem;
    text-align: center;
  }

  .controle span {
    margin: 1rem;
    display: inline-block;
  }

  .valor {
    font-size: 1.3rem;
    margin: 2rem 0 2rem 6.5rem;
    text-align: center;
  }
}


</style>

