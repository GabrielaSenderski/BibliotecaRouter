import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBuscaStore = defineStore('busca', () => {
  const termo = ref('')

  function atualizarBusca(novoTermo) {
    termo.value = novoTermo
  }

  return { termo, atualizarBusca }
})
