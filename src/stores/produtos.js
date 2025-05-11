import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    { id: 1, image: '/img/anjos.svg', titulo: 'Anjos e Demônios', autor: 'Dan Brown', preco: 56.70, curtido: false },
    { id: 2, image: '/img/verity.svg', titulo: 'Verity', autor: 'Colleen Hoover', preco: 42.01, curtido: false },
    { id: 3, image: '/img/caraval.svg', titulo: 'Caraval', autor: 'Stephanie Garber', preco: 42.90, curtido: false },
    { id: 4, image: '/img/battle.svg', titulo: 'Battle Royale', autor: 'Koushun Takami', preco: 54.10, curtido: false },
    { id: 5, image: '/img/principe.svg', titulo: 'O Príncipe Cruel', autor: 'Holly Black', preco: 41.29, curtido: false },
    { id: 6, image: '/img/alice.svg', titulo: 'Alice in Wonderland', autor: 'Lewis Carroll', preco: 48.93, curtido: false },
    { id: 7, image: '/img/selecao.svg', titulo: 'A Seleção', autor: 'Kiera Cass', preco: 40.26, curtido: false },
    { id: 8, image: '/img/homemgiz.svg', titulo: 'O Homem de Giz', autor: 'C. J. Tudor', preco: 43.99, curtido: false },  
    { id: 9, image: '/img/aristoteles.svg', titulo: 'Aristoteles e Dante', autor: 'Benjamin Sáenz', preco: 41.31, curtido: false },
    { id: 10, image: '/img/1984.svg', titulo: '1984', autor: 'George Orwell', preco: 16.59, curtido: false },
    { id: 11, image: '/img/cirurgia.svg', titulo: 'A Cirurgiã', autor: 'Leslie Wolfe', preco: 21.95, curtido: false },
    { id: 12, image: '/img/estilhacame.svg', titulo: 'Estilhaça-me', autor: 'Tahereh Mafi', preco: 19.90, curtido: false },
    { id: 13, image: '/img/imperfeitos.svg', titulo: 'Imperfeitos', autor: 'Christina Lauren', preco: 12.35, curtido: false },
    { id: 14, image: '/img/jantar.svg', titulo: 'Jantar Secreto', autor: 'Raphael Montes', preco: 46.36, curtido: false },
    { id: 15, image: '/img/mentirosos.svg', titulo: 'Mentirosos', autor: 'E. Lockhart', preco: 41.02, curtido: false },
    { id: 16, image: '/img/pipas.svg', titulo: 'O Caçador de Pipas', autor: 'Khaled Hosseini', preco: 49.00, curtido: false }
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
