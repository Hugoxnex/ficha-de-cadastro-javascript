/*
	Programando em JAVASCRIPT
*/
 
<html>
<head>
	<title>Ficha em JAVASCRIPT</title>
</head>
<body>
	<form method="POST" action="fichaJS.html" onsubmit="return enviarDados();">
		<table>
			<tr>
				<td>Nome: </td>
				<td><input type="text" name="nome" id="nome"></td>
			</tr>
			<tr>
				<td>Idade: </td>
				<td><input type="text" name="idade" id="idade"></td>
			</tr>
			<tr>
				<td>Peso: </td>
				<td><input type="text" name="peso" id="peso"></td>
			</tr>
			<tr>
				<td>Altura: </td>
				<td><input type="text" name="altura" id="altura"></td>
			</tr>
			<tr>
				<td>Sexo:</td>
				<td>
					<select name="sexo" id="sexo">
						<option value="F">F</option>
						<option value="M">M</option>
					</select>
				</td>
			</tr>
			<tr>
				<td><input type="submit" value="Enviar Dados"></td>
			</tr>
		</table>
	</form>
 
	<script>
		function enviarDados(){
			var nome = document.getElementById("nome").value;
			var idade = document.getElementById("idade").value;
			var peso = document.getElementById("peso").value;
			var altura = document.getElementById("altura").value;
			var sexo = document.getElementById("sexo").value;
 
			if(nome.length < 6 || nome.length > 30)
				alert('Tamanho do nome invalido');
			else{
				if(idade <= 0 || idade >=100)
					alert('Idade invalida');
				else{
					if(peso <= 0)
						alert('Peso invalido');
					else{
						if(altura <= 0)
							alert('Altura invalida');
						else{
							if(sexo != 'F' && sexo != 'M')
								alert('Sexo invalido');
							else
								alert('Cadastro realizado com sucesso\nNome: '+nome + '\nIdade: '+idade+ '\nPeso: '+peso + '\nAltura: '+altura + '\nSexo: '+sexo);
						}
					}
				}
			}
		}
	</script>
</body>
</html>