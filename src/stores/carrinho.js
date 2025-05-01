
import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    itens: [], 
  }),
  actions: {
    adicionarItem(produto) {
      this.itens.push(produto);
    },
    removerItem(index) {
      this.itens.splice(index, 1);
    },
    limparCarrinho() {
      this.itens = [];
    },
  },
});
