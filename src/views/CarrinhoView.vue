<template>
  <body>

  <main>
<section class="carrinho">
    <h2>Carrinho</h2>
    <div>
      <ul>
        <span><li>Titulo</li></span>
        <li>Quantidade</li>
        <li>Subtotal</li>
      </ul>
      <hr class="linha-escura">



      <hr class="linha-escura">


    </div>
  </section>
  <section>
    <router-link to="/" class="loja">Voltar para a loja</router-link>
    <div>
      <input type="text" placeholder="Codigo de cupom">
      <button>Inserir cupom</button>
    </div>
    <div>
      <h4>Total da Compra</h4>
      <ul>
        <li>Produtos</li>
        <hr class="linha-escura">
        <li>Frete</li>
        <hr class="linha-escura">
        <li>Total</li>
      </ul>
            <button>Ir para o pagamento</button>
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
  margin: 5vw 10vw 1vw
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
  margin: 2vw 0 5vw 8vw;
  background-color: white;
  cursor: pointer;
  text-align: center;
}
</style>
