<template>
  <div class="product-list">
    <h1>Список товаров</h1>
    <ul>
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="flex-container">
          <div class="product-info">
            <h2 @click="selectProduct(product)" class="product-name">{{ product.name }}</h2>
            <p class="product-description">{{ product.shortDescription }}</p>
            <p class="product-price">{{ product.price }}$</p>
            <button @click="addToFavorites(product)" class="favorite-button">Добавить в избранное</button>
          </div>
          <div class="product-image" v-if="getImageUrl(product.id)">
            <img :src="getImageUrl(product.id)" :alt="product.name" />
          </div>
        </div>
      </li>
    </ul>

    <div v-if="selectedProduct" class="product-details">
      <button class="close-button" @click="closeDetails">✖</button>
      <h2>{{ selectedProduct.name }}</h2>
      <p class="full-description">{{ selectedProduct.fullDescription }}</p>
      <p class="product-price">Цена: {{ selectedProduct.price }}$</p>
      <button @click="addToFavorites(selectedProduct)" class="favorite-button">Добавить в избранное</button>
    </div>

    <div v-if="showNotification" class="notification">
      Товар добавлен в избранное!
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useProductStore } from '../stores/products';

export default {
  setup() {
    const store = useProductStore();
    const selectedProduct = ref(null);
    const showNotification = ref(false);

    const selectProduct = (product) => {
      selectedProduct.value = product;
    };

    const addToFavorites = (product) => {
      store.addToFavorites(product);
      showNotification.value = true;
      setTimeout(() => {
        showNotification.value = false;
      }, 2000);
    };

    const closeDetails = () => {
      selectedProduct.value = null;
    };

    const getImageUrl = (productId) => {
      try {
        const imagePng = require(`../assets/images/image${productId}.png`);
        return imagePng;
      } catch (pngError) {
        try {
          const imageJpg = require(`../assets/images/image${productId}.jpg`);
          return imageJpg;
        } catch (jpgError) {
          return null;
        }
      }
    };

    return {
      products: computed(() => store.products),
      selectedProduct,
      selectProduct,
      addToFavorites,
      closeDetails,
      getImageUrl,
      showNotification,
    };
  },
};
</script>

<style scoped>
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

.product-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.product-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s;
}

.product-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-name {
  cursor: pointer;
  color: #333;
  transition: color 0.3s;
}

.product-name:hover {
  color: #007BFF;
}

.product-description {
  margin: 10px 0;
  color: #666;
}

.product-price {
  font-weight: bold;
  color: #000;
}

.favorite-button {
  padding: 8px 12px;
  border: none;
  background-color: #007BFF;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.favorite-button:hover {
  background-color: #0056b3;
}

.product-details {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 1000;
}

.product-details h2 {
  margin-bottom: 15px;
  color: #333;
}

.full-description {
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

.product-details .product-price {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}

.product-details .favorite-button {
  background-color: #28a745;
}

.product-details .favorite-button:hover {
  background-color: #218838;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

/* Стили для информационного окна */
.notification {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1100;
  animation: fadeInOut 2s ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
