<template>
    <div class="favorites-page">
      <h1>Избранные товары</h1>
      <ul v-if="favorites.length">
        <li v-for="(product, index) in favorites" :key="product.id" class="favorite-item">
          <div class="flex-container">
            <div class="product-info">
              <h2>{{ product.name }}</h2>
              <p class="product-description">{{ product.shortDescription }}</p>
              <p class="product-price">{{ product.price }}$</p>
              <button @click="removeFromFavorites(product.id)" class="remove-button">Удалить из избранного</button>
            </div>
            <div class="product-image" v-if="getImageUrl(index)">
              <img :src="getImageUrl(index)" :alt="product.name" />
            </div>
          </div>
        </li>
      </ul>
      <p v-else>Ваш список избранных товаров пуст.</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useProductStore } from '../stores/products';
  
  export default {
    setup() {
      const store = useProductStore();
      const favorites = computed(() => store.favorites);
  
      const removeFromFavorites = (productId) => {
        store.removeFromFavorites(productId);
      };
  

      const getImageUrl = (index) => {
        try {
          const imagePath = index === 0 
            ? require('../assets/images/image.png') 
            : require(`../assets/images/image${index}.jpg`);
          return imagePath;
        } catch (error) {
          return null; 
        }
      };
  
      return {
        favorites,
        removeFromFavorites,
        getImageUrl,
      };
    },
  };
  </script>
  
  <style scoped>
  .favorites-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .favorite-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s;
  }
  
  .favorite-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .product-info {
    flex: 1;
  }
  
  .product-image {
    margin-left: 15px;
  }
  
  .product-image img {
    max-width: 100px;
    height: auto;
  }
  
  .product-description {
    margin: 10px 0;
    color: #666;
  }
  
  .product-price {
    font-weight: bold;
    color: #000;
  }
  
  .remove-button {
    padding: 8px 12px;
    border: none;
    background-color: #dc3545;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .remove-button:hover {
    background-color: #c82333;
  }
  </style>
  