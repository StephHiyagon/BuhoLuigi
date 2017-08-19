<?php

require_once 'config.php';

if($_POST)
{

	// datos del formulario de registro
	$nombres = $_POST['nombres'];
	$apellidos = $_POST['apellidos'];
	$email = $_POST['email'];
	$soy_un = $_POST['soy_un'];
	$escuela = $_POST['escuela'];

	// capturamos los errores, en caso lo hubiera :)
	try
	{

		$stmt = $db_con->prepare("SELECT email FROM inscritos WHERE email=:email");
		$stmt->execute(array(":email"=>$email));
		$count = $stmt->rowCount();

		// insertamos los datos
		if($count == 0)
		{

			$stmt = $db_con->prepare("INSERT INTO inscritos(nombres,apellidos,email,quien_es,escuela) VALUES (:nombres,:apellidos,:email,:soy_un,:escuela)");
			$stmt->bindParam(":nombres", $nombres);
			$stmt->bindParam(":apellidos", $apellidos);
			$stmt->bindParam(":email", $email);
			$stmt->bindParam(":soy_un", $soy_un);
			$stmt->bindParam(":escuela", $escuela);

			if ($stmt->execute()) {
				echo "Registro completo.";
			}else{
				echo "Hubo un error en el registro. Intenta de nuevo.";
			}

		}else{
			echo "1"; // si el usuario ya está registrado en la base de datos
		}

	}catch(PDOException $ex)
	{
		echo $ex->getMessage();
	}
	
}

?>