<template>
    <div  class="actualizar">
      <h1 class="Actualizar Clientes">Actualizar Clientes</h1>
  
          <form action class="form" @submit.prevent="actualizar">
            
             <label class="form-label" for="#nombrecliente">Nombre del Cliente:</label>
                  <input
                  v-model="nombrecliente"
                  class="form-input"
                  type ="nombrecliente"
                  id="nombrecliente"
                  required
                  placeholder="Nombre del Cliente"
            >
            <label class="form-label" for="#fechadenacimiento">Fecha deNacimiento:</label>
          <input
            v-model="fechadenacimiento"
            class="form-input"
            type="fechadenacimiento"
            id="fechadenacimiento"
            placeholder="Fecha de Nacimiento"
          >
          <label class="form-label" for="#documento">Documentos:</label>
          <input
            v-model="documentos"
            class="form-input"
            type="documentos"
            id="documentos"
            placeholder="Tipo de Documentos"
          >
          <label class="form-label" for="#numerodocumento"> Numero de Documentos:</label>
          <input
            v-model="numerodocumentos"
            class="form-input"
            type="numerodocumentos"
            id="numerodocumentos"
            placeholder="Numero del documento"
          >
          <label class="form-label" for="#telefono">Telefono:</label>
          <input
            v-model="telefono"
            class="form-input"
            type="telefono"
            id="telefono"
            placeholder="Telefono"
          >
          <input class="form-submit" type="submit" value="Actualizar">
        </form>
       </div>
        </template>
  
  
  <script>
  export default {
    data: () => ({
      nombrecliente: "",
      documentos: "",
      numerodocumentos: "",
      telefono:""
    }),
    methods: {
      actualizar() {
        console.log(this.nombrecliente);
        console.log(this.documentos);
        console.log(this.numerodocumentos);
        console.log(this.telefono);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .register {
    padding: 2rem;
  }
  .title {
    text-align: center;
  }
  .form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    min-width: 350px;
    max-width: 100%;
    background: rgba(19, 35, 47, 0.9);
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
  .form-label {
    margin-top: 2rem;
    color: white;
    margin-bottom: 0.5rem;
    &:first-of-type {
      margin-top: 0rem;
    }
  }
  .form-input {
    padding: 10px 15px;
    background: none;
    background-image: none;
    border: 1px solid white;
    color: white;
    &:focus {
      outline: 0;
      border-color: #1ab188;
    }
  }
  .form-submit {
    background: #1ab188;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #0b9185;
    }
  }
  .error {
    margin: 1rem 0 0;
    color: #ff4a96;
  }
  </style>
  