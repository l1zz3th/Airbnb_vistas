<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
    <a class="navegar">
      <RouterLink to="/lugar">Lugar</RouterLink>
    <RouterLink to="/reserva">Reserva</RouterLink>
    <RouterLink to="/user">Registrarse</RouterLink>
    <RouterLink to="/">Login</RouterLink>
    </a>
    <button class="burguer" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </nav>
  </header>

  <div class="wrapper">
  </div>

  <RouterView />
</template>

<style scoped>
template {
  background-color: aliceblue;
}

header{
  background-color: #f68930;
  text-align: left;
  height: 35px;
  width: 1250px;
}

.navegar
{
  color: aliceblue;
}

button .burguer{
  background-color: aquamarine;
}

</style>

<!-- 
    <RouterLink to="/lugar">Lugar</RouterLink>
    <RouterLink to="/reserva">Reserva</RouterLink>
    <RouterLink to="/user">Registrarse</RouterLink>
    <RouterLink to="/">Login</RouterLink>
-->