<script>

</script>

<template>
<!-- Inicio de Navbar -->
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

</nav>

  <!-- Contenedor 1, abarca el buscador -->
  <div class="container-1">
    <nav class="navbar">
    <form class="form-buscar">
      <input
        class="buscar"
        type="search"
        placeholder="Buscar un lugar"
        aria-label="Search"
      />
      <button class="btn" type="submit">
        Search
      </button>
    </form>
  </nav>

    <pre>
        <p class="texto1">¿Qué estas buscando? </p>
    </pre>

    <div class="imag-busqueda">
        
    </div>

  </div>

  <!-- Contenedor 2, abarca  espacios para lugares-->
  <div class="container-2"></div>


  <!-- Contenedor 3, abarca espacio de informacion y derechos reservados -->
  <footer>
    <div class="container-3">
    <p>
        <a class="info" href="https://www.lipsum.com"> 
            Sobre Nosotros
        </a>
    </p>
    <p>
        <a class="info" href="https://www.lipsum.com"> 
            Contactanos
        </a>
    </p>
    <p>
        <a class="info" href="https://www.lipsum.com"> 
            Otra Opcion
        </a>
    </p>

    <pre>
        <hr color="black" size="5" />
    </pre>
    <p class="texto-fin"> © 2022 Todos los derechos reservados </p>
  </div> 
  </footer>
  
</template>

<style scoped>
/* Estilos para contenedor 1 */
.container-1 {
    width: 1366px;
  height: 281px;
  padding: 8px 8px 8px 8px;
  background: #eeeeee;
  border-color: #ffebd2;
  border-width: 1px;
  border-style: solid;
}
.form-buscar{
    background-color: var(--cream);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
    width: 100vw;
}

.buscar input{
    margin-top: 35px;
    border-radius: 25px;
    border-color: var(--blue);
    border-width: 2.5px;
    width: 500px;
    height: 50px;
    font-family: 'Comfortaa';
}

.busqueda label{
    margin-top: 20px;
    font-family: 'Comfortaa';
    font-size: 30px;
}

.icons-busqueda {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.icons-busqueda a{
    text-decoration: none;
    color: black;
}

.icons-busqueda span i{
    font-size: 50px;
    padding-left: 60px;
    padding-right: 30px;
}


.icons-busqueda .label-icon-busqueda{
    font-family: 'Comfortaa';
    font-size: 18px;
}

.texto1 
{
    color: #000000;
    text-align: center;
	width: 1366px;
	height: 428px;
	padding: 8px 8px 8px 8px;
	background: #eeeeee;
	border-color: #ffebd2;
	border-width: 1px;
	border-style: solid;


}

/* Estilo imagnes centrales para categoria */
.imag-busqueda 
{
    width: 50px;
    height: 50px;
    border-radius: 0%;
}
/* Estilos para contenedor 2 */
.container-2 {
  width: 1366px;
  height: 281px;
  padding: 8px 8px 8px 8px;
  background: #273248;
  border-color: #273248;
  border-width: 1px;
  border-style: solid;
}

/* Estilos para contenedor 3 */
.container-3 {
  width: 1366px;
  height: 281px;
  padding: 8px 8px 8px 8px;
  background: #f68930;
  border-color: #f68930;
  border-width: 1px;
  border-style: solid;
}

.info 
{
	width: 200px;
	height: 28px;
	color: #000000;
	font-family: "Helvetica";
	font-weight: 500;
	font-size: 20px;
	text-align: left;
}


.texto-fin {
	width: 290px;
	height: 24px;
	color: #273248;
	font-family: "Open Sans";
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	text-align: left;
}
</style>