<template>
  <div id="app">
    <header>
      <div class="centerbox">
        <nav>
          <router-link to="/" exact-active-class="active">Products</router-link>
          <router-link to="/favorites" exact-active-class="active">Favorites</router-link>
          <router-link to="/about" exact-active-class="active">About Us</router-link>
        </nav>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style scoped>

header {
  background-color: #343a40;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.centerbox {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #f8f9fa;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #ced4da;
}

nav a.active {
  color: #ffc107;
  border-bottom: 2px solid #ffc107;
}

</style>
