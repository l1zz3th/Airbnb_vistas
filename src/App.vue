<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
    <RouterLink to="/lugar">Lugar</RouterLink>
    <RouterLink to="/reserva">Reserva</RouterLink>
    <RouterLink to="/user">Registrarse</RouterLink>
    <RouterLink to="/">Login</RouterLink>
  </nav>
  </header>

  <div class="wrapper">
  </div>

  <RouterView />
</template>

<style scoped>
body{
  background-color: aliceblue;
}

header{
  background-color: #f68930;
  text-align: center;
  height: 35px;
  width: 1250px;
}

</style>
