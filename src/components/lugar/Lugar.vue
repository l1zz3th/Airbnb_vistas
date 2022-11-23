<script>
</script>

<template>
  <!-- Contenedor 1, abarca el buscador -->
  <div class="container-1">
    

    <div class="busqueda">
        <div align="center">
            <input type="search" placeholder="Buscar un lugar..." name="busquedaInicio">
            <br>
            <label>¿Qué estás buscando?</label>
        </div>
        <div class="icons-busqueda">
            <a href="#">
                <span>
                    <i class="fa-solid fa-house"></i>
                    <label class="label-icon-busqueda">Casas</label>
                </span>
            </a>
            <a href="#">
                <span>
                    <i class="fa-solid fa-hotel"></i>
                    <label class="label-icon-busqueda">Hoteles</label>
                </span>
            </a>
            <a href="#">
                <span>
                    <i class="fa-solid fa-campground" ></i>
                    <label   class="label-icon-busqueda">Cabañas</label>
                </span>
            </a>
        </div>
    </div>

  
  </div>

  <!-- Contenedor 2, abarca  espacios para lugares-->
  <div class="container-2"></div>

  <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="{{ asset('images/lugar.jpg') }}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 1</h5>
               <a href="#" class="btn btn-primary btn-block">Ver Lugar</a>
            </div>
        </div>

        <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="{{ asset('images/lugar.jpg') }}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 2</h5>
               <a href="#" class="btn btn-primary btn-block">Ver Lugar</a>
            </div>
        </div>

        <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="{{ asset('images/lugar.jpg') }}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 3</h5>
               <a href="#" class="btn btn-primary btn-block">Ver Lugar</a>
            </div>
        </div>

        <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="{{ asset('images/lugar.jpg') }}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 4</h5>
               <a href="#" class="btn btn-primary btn-block">Ver Lugar</a>
            </div>
        </div>

        <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="{{ asset('images/lugar.jpg') }}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 5</h5>
               <a href="#" class="btn btn-primary btn-block">Ver Lugar</a>
            </div>
        </div>

        <div class="card d-flex flex-column justify-content-between ml-2">
            <img src="{{ asset('images/lugar.jpg') }}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">LUGAR 6</h5>
               <a href="#" class="btn btn-primary btn-block">Ver Lugar</a>
            </div>
        </div>

        

  <!-- Contenedor 3, abarca espacio de informacion y derechos reservados -->
  <footer>
    <div class="container-3">
      <p>
        <a class="info" href="https://www.lipsum.com"> Sobre Nosotros </a>
      </p>
      <p>
        <a class="info" href="https://www.lipsum.com"> Contactanos </a>
      </p>
      <p>
        <a class="info" href="https://www.lipsum.com"> Otra Opcion </a>
      </p>

      <pre>
        <hr color="black" size="5" />
    </pre>
      <p class="texto-fin">© 2022 Todos los derechos reservados</p>
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
.busqueda{
    background-color: var(--cream);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;
    width: 100vw;
}

.busqueda input{
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

/*.icons-busqueda a img{
    width: 145px;
    padding-left: 60px;
    padding-right: 30px;
    margin-bottom: 6px;
} */

.icons-busqueda .label-icon-busqueda{
    font-family: 'Comfortaa';
    font-size: 18px;
}
/* Estilos para busqueda por categorías */

@media all and (min-width: 300px) and (max-width: 1000px) {
  .categorias {
    align-items: center;
  }

  .categorias .hotel {
    width: 300px;
    height: 150px;
    align-content: center;
  }

  .categorias .cabaña {
    width: 300px;
    height: 150px;
    align-content: center;
  }

  .categorias .casa {
    width: 300px;
    height: 150px;
    align-content: center;
  }
}

/* Estilos para contenedor 2 */
.container-2 {
  width: 1366px;
  height: 281px;
  padding: 8px 8px 8px 8px;
  background-color: #273248;
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

.info {
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