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
          <label class="form-label" for="#documento"> Tipo de Documentos:</label>
          
           <select name ="documentos" id="tipodocumentos">
            <option value="DUI">DUI</option>
            <option value="PASAPORTE">PASAPORTE</option>
            
           </select>
          
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
  .actualizar {
    background-color: white;
    width: 1000px;
    height: 1000px;
    position: center center;
    display: block;
  }
  .title {
    text-align: center;
  }
  h1 {
    text-align: center;
    color: black;
    width: auto;
    height: 50px;
    padding: 8px 8px 8px 8px;
    background: #ffebd2;
    border-color: #ffebd2;
    border-width: 1px;
    border-style: solid;
  }
  .form {
    background-position: center center;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: right;
    width: 1000px;
    min-width: auto;
    max-width: auto;
    background: rgba(250, 253, 255, 0.9);
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
  .form-label {
    width: 154px;
    height: 50px;
    color: #da5526;
    font-family: "Arial";
    font-size: large;
    text-align: left;
    }
  .form-input {
    padding: 10px 325px;
    display: flex;
    border: 1px solid rgb(0, 0, 0);
    color: rgb(2, 2, 2);
  }
  .form-select {
    padding: 10px 325px;
    display: flex;
    border: 1px solid rgb(0, 0, 0);
    color: rgb(2, 2, 2);
  }
  .form-submit {
    background: #da810d;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
  }
  .error {
    margin: 1rem 0 0;
    color: #ff4a96;
  }
  .button {
    width: 415px;
    height: 107px;
    padding: 8px 8px 8px 8px;
    box-shadow: 0px 5px 10px rgba(248, 95, 106, 0.23);
    background: #f68930;
    border-radius: 6px 6px 6px 6px;
  }
  </style>