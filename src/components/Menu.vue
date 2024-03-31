<script setup>
import { ref } from 'vue'
const items = ref("Get Your Cafe From the list Below")
function getList(newlist) {
  items.value = newlist
  alert(` Here is Your ${items.value} `)
}

</script>

<template>
  <div class="container">
    <h1>{{ items }}</h1>
    <ul class="list">
      <li class="item"><button @click="getList('Cafe form Item 1' )" type="button"  >Item 1</button></li>
      <li class="item"><button @click="getList('cafe form Item 2')" type="button">Item 2</button></li>
      <li class="item"><button @click="getList('cafe form Item 3')" type="button">Item 3</button></li>
    </ul>
  </div>
  <div>

    <button><router-link to="/">Home Page</router-link></button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
li{
  list-style: none;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  }
</style>
