$('document').ready(function(){


	$("#registro_web").validate({

		rules:{

			nombres:{
				required:true
			},
			apellidos:{
				required:true
			},
			email:{
				required:true,
				email:true
			},
			soy_un:{
				required:true
			}
		},

		messages:{
			nombres: "Ingresa tus nombres",
			apellidos: "Ingresa tus apellidos",
			email: "Ingresa tu email",
			soy_un: "Selecciona que eres"
		},

		submitHandler: enviaForm

	});

	function enviaForm()
	{
		var data = $("#registro_web").serialize();

		$.ajax({

			type:'POST',
			url: 'separte.php',
			data: data,
			beforeSend: function()
			{
				$("#info").fadeOut();
				$("#btn_submit").html("Formando parte...");
			},
			success:function(data)
			{
				if(data == 1)
				{
					$("#info").fadeIn(1000, function(){

						$("#info").html('<div class="alert alert-info alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Cerrar"><span aria-hidden="true">×</span></button><p>El email ya se encuentra registrado.</p></div>');
						$("#btn_submit").html('Quiero ser parte');
					});
				}
				else if(data == "registered")
				{
					$("#btn_submit").html("Formando parte...");
					setTimeout('$(".form_separte").fadeOut(500,function(){$(".wrapper_form").load("gracias.php");});', 2000);
				}else{
					$("#info").fadeIn(1000,function(){

						$("#info").html('<div class="alert alert-info alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Cerrar"><span aria-hidden="true">×</span></button><p>' + data + '</p></div>');
						$("#btn_submit").html('Quiero ser parte');

					});
				}
			}

		});

		return false;
	}	
	

});