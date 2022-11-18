<script>

</script>

<template>
    <nav class="cabe">
		<label class="titu">Resgistrate</label>
	</nav>

	<div class="imagen">
		<img src="../assets/images/img.png" width="90" height="90">
	</div>

	<div class="container">
		<div class="wrapper">
			<form class="form-registro">
	
				<div class="form-row">
					<div class="form-group col-md-6">
						<input type="text" name="nombre" placeholder="Nombre" size="55" class="form-control" >
					</div>
				</div>
		
				<div class="form-row">
					<div class="form-group col-md-6">
						<input type="email" name="email" placeholder="Email" size="55" class="form-control" >
					</div>
				</div>
		
				<div class="form-row">
					<div class="form-group col-md-6">
						<input type="text" name="telefono" placeholder="Telefono" size="55" class="form-control" >
					</div>
				</div>
		
				<div class="form-row">
					<div class="form-group col-md-6">
						<input type="date" name="dtFecha" placeholder="Fechadenacimiento" class="form-control" >
					</div>
				</div>
		
				<div class="form-row">
					<div class="form-group col-md-3">
						<select id="cbxDepartamento" class="form-control">
							<option value="">Departamento</option>	
						</select>
					</div>
		
					<div class="form-group col-md-3">
						<select id="cbxMunicipio" class="form-control">
							<option value="">Municipio</option>	
						</select>
					</div>
		
				</div>
		
				<div class="form-row">
					<div class="form-group col-md-3">
						<select id="cbxTipoD" class="form-control">
							<option value="">Tipo de Documento</option>	
						</select>
					</div>
		
					<div class="form-group col-md-3">
						<input type="numDocumento" name="numDocumento" placeholder="N° Documento" class="form-control" >
					</div>
		
				</div>
		
				<div class="form-row">
					<div class="form-group col-md-3">
						<input type="text" name="txtUsuario" class="form-control" placeholder="Usuario">
					</div>
					<div class="form-group col-md-3">
						<input type="password" name="txtPassword" class="form-control" placeholder="Contraseña">
					</div>
				</div>
				
				<div class="form-row">
					<div class="form-group col-md-5">
						<input type="checkbox" name="txtTerminos" id="terminos">
						He leído y aceptado los <a href="https://www.lipsum.com">Terminos y condiciones</a>
					</div>
				</div>
		
				<div class="form-row">
					<div class="form-group col-md-4">
						<button class="boton" type="submit">Registrarme</button>
					</div>
				</div>
			</form>	
		</div>
	</div>

</template>

<style scoped>
.cabe{ 
	background-color: #FFEBD2;
	height: 70px;
	padding: 20px;
	text-align: center;

}
.titu{
 color: black;
 font-size: 25px;
}

.imagen{
	margin-top: 10px;
	text-align: center;
}

.container{
	position: absolute;
	left: 25%;
	top: 25%;
}

.wrapper{
	position: relative;
	left: 15%;
	top: 15%;
}

.input{
	border-radius: 5px;
	height: 40px;
}

#terminos{
	margin-left: 75px;
}

.boton{
	margin-left: 75px;
	 background-color: #FC7643;
	  color: #FFF; 
	  border-radius: 5px;
	  border: none;
	  width: 400px;
	  height: 40px;
	}
</style>