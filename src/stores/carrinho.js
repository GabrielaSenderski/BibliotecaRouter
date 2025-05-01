import { defineStore } from 'pinia';

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    itens: []
  }),
  actions: {
    adicionarItem(produto) {
      const existente = this.itens.find(item => item.id === produto.id);
      if (existente) {
        existente.quantidade++;
      } else {
        this.itens.push({ ...produto, quantidade: 1 });
      }
    },
    removerItem(id) {
      this.itens = this.itens.filter(item => item.id !== id);
    },
    limparCarrinho() {
      this.itens = [];
    }
  }
});
