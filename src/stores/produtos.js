import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    { id: 1, image: '/img/anjos.svg', titulo: 'Anjos e Demônios', autor: 'Dan Brown', preco: 56.70 },
    { id: 2, image: '/img/verity.svg', titulo: 'Verity', autor: 'Colleen Hoover', preco: 42.01 },
    { id: 3, image: '/img/caraval.svg', titulo: 'Caraval', autor: 'Stephanie Garber', preco: 42.90 },
    { id: 4, image: '/img/battle.svg', titulo: 'Battle Royale', autor: 'Koushun Takami', preco: 54.10 },
    { id: 5, image: '/img/principe.svg', titulo: 'O Príncipe Cruel', autor: 'Holly Black', preco: 41.29 },
    { id: 6, image: '/img/alice.svg', titulo: 'Alice in Wonderland', autor: 'Lewis Carroll', preco: 48.93 },
    { id: 7, image: '/img/selecao.svg', titulo: 'A Seleção', autor: 'Kiera Cass', preco: 40.26 },
    { id: 8, image: '/img/homemgiz.svg', titulo: 'O Homem de Giz', autor: 'C. J. Tudor', preco: 43.99 }
  ]);

  function addProduct(id) {
    const index = products.value.findIndex((product) => product.id === id);
    products.value.push(index, 1);
  }

  function removeProduct(id) {
    const index = products.value.findIndex((product) => product.id === id);
    products.value.splice(index, 1);
  }

  return { products, removeProduct, addProduct };
});
