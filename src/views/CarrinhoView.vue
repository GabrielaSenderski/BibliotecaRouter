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
    <div class="mae">
    <div class="esquerdo">
      <input type="text" placeholder="Codigo de cupom">
      <button class="cupom">Inserir cupom</button>
    </div>
    <div class="direito">
  <h4>Total da Compra</h4>
  <ul class="detalhes">
   <li>Produtos</li>
   <li>Frete</li>
    <li>Total</li>
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
  margin: 0 0 16vw 19vw;
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
</style>
