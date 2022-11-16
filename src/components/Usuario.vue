<script>
</script>

<template>
<div class="contenedor">
  <h1 class="title">Registrate</h1>

  <form action class="form">
    <div class="form-label">
      <label for="NombreUser">
        <input
          type="text"
          class="form-input"
          aria-describedat="NameUser"
          placeholder="Nombre"
        />
      </label>
    </div>

    <div class="form-label">
      <label for="Email">
      <input
        type="email"
        class="form-input"
        aria-describedby="emailUser"
        placeholder="Email"
      />
    </label>
    </div>
    <div class="form-label">
      <label for="Telefono">
      <input
        type="int"
        class="form-input"
        aria-describedby="telefonoUser"
        placeholder="Telefono"
      />
    </label>
    </div>
    <div class="form-label">
      <label for="fechaNac">
      <input
        type="text"
        class="form-input"
        aria-describedby="nacimientoUser"
        placeholder="Fecha de Nacimiento"
      />
    </label>
    </div>
    <div class="form-label">
      <label for="departamento">
      <input
        type="text"
        class="form-input"
        aria-describedby="departamentoUser"
        placeholder="Departamento"
      />
    </label>
    </div>

    <div class="form-label">
      <label for="Municipio">
      <input
        type="text"
        class="form-input"
        aria-describedby="municipioUser"
        placeholder="Municipio"
      />
    </label>
    </div>

    <div class="form-label">
      <label for="Tipo de Documento">
      <input
        type="text"
        class="form-input"
        aria-describedby="docUser"
        placeholder="Tipo de Documento"
      />
    </label>
    </div>

    <div class="form-label">
      <label for="Ndoc">
      <input
        type="text"
        class="form-input"
        aria-describedby="nDoclUser"
        placeholder="N° de documento"
      />
    </label>
    </div>

    <div class="form-label">
      <label for="User">
      <input
        v-model="email"
        type="text"
        class="form-input"
        aria-describedby="User"
        placeholder="Usuario"
      />
    </label>
    </div>

    <div>
        <label class="form-label" for="#password"></label>
          <input
            v-model="password"
            class="form-input"
            type="password"
            id="password"
            placeholder="Password"
          />
    </div>
    
  </form>
</div>

</template>

<style scoped>
.contenedor
{
  background-color: white;
  width: 1250px;
  height: 1000px;
  position: center center;
  display: block;
}
/* Estilos para titulo */
.tittle {
  text-align: center;
}

h1 {
  text-align: center;
  color: black;
  width: auto;
  height: 70px;
  padding: 8px 8px 8px 8px;
  background: #ffebd2;
  border-color: #ffebd2;
  border-width: 1px;
  border-style: solid;
}



/* Estilos para formulario */
.form {
  background-position: center center;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1250px;
  min-width: auto;
  max-width: auto;
  background: rgba(250, 253, 255, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  width: 154px;
  height: 60px;
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