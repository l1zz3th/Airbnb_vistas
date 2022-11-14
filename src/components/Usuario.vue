<script>
</script>

<template>
  <form class="form">
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
  </form>
</template>

<style scoped>
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