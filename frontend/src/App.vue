<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/new-year-surprise">新年惊喜</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
}

nav a:hover {
  background-color: #555;
  border-radius: 4px;
}

main {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>