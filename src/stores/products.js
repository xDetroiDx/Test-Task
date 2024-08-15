import { defineStore } from 'pinia';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Гиалуроновая сыворотка',
        shortDescription: 'Интенсивное увлажнение для вашей кожи с гиалуроновой сывороткой.',
        fullDescription: 'Гиалуроновая сыворотка предназначена для глубокого увлажнения и восстановления кожи. Благодаря высокой концентрации гиалуроновой кислоты, сыворотка проникает в глубокие слои кожи, обеспечивая длительное увлажнение и улучшая текстуру кожи. Подходит для всех типов кожи, особенно для сухой и чувствительной. Рекомендуется использовать утром и вечером перед нанесением крема.',
        price: 45
      },
      {
        id: 2,
        name: 'Антивозрастной крем с ретинолом',
        shortDescription: 'Сократите признаки старения с нашим кремом с ретинолом.',
        fullDescription: 'Антивозрастной крем с ретинолом помогает уменьшить видимость морщин и тонких линий, восстанавливая упругость и эластичность кожи. Ретинол стимулирует обновление клеток кожи, уменьшая пигментацию и улучшая общий тон кожи. Крем рекомендуется использовать на ночь, избегая области вокруг глаз. Подходит для зрелой кожи, а также для тех, кто хочет предупредить появление первых признаков старения.',
        price: 60
      }
    ],
    favorites: [],
    selectedProduct: null,
  }),
  actions: {
    addToFavorites(product) {
      if (!this.favorites.find(p => p.id === product.id)) {
        this.favorites.push(product);
      }
    },
    removeFromFavorites(productId) {
      this.favorites = this.favorites.filter(product => product.id !== productId);
    },
    selectProduct(product) {
      this.selectedProduct = product;
    },
  },
});
