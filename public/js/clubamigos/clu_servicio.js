function clu_servicio() {
	this.datos_pie = [];
	this.table = '';
	
}

clu_servicio.prototype.onjquery = function() {
};

clu_servicio.prototype.validateNuevoServicio = function() {
	if($("#form_nuevo_servicio :input")[1].value =="" || $("#form_nuevo_servicio :input")[3].value =="" || $("#form_nuevo_servicio :input")[5].value ==""){
		$('#servicio_nuevo_modal .alerts-module').html('<div class="alert alert-danger alert-dismissable"><button type="button" class="close close_alert_product" data-dismiss="alert">&times;</button><strong>!Consulta Fallido!</strong></br> Faltan campos por diligenciar.</div>');
		//pintar los inputs problematicos
		for(var i=0; i < $("#form_nuevo_servicio :input").length ; i++){
	        if( i <= 6 ) {
	            if($("#form_nuevo_servicio :input")[i].value ==""){
	                $($("#form_nuevo_servicio :input")[i]).addClass('input_danger');
	            }	            
	        }
        }
        $(".close_alert_product").on('click', function () { 
        	$("#form_nuevo_servicio :input").removeClass("input_danger");        	
        });
		return false;
	}
	return true;
};

clu_servicio.prototype.opt_agregar = function() {
	var datos = new Array();
	seg_ajaxobject.peticionajax($('#form_nuevo').attr('action'),datos,"clu_servicio.nuevoRespuesta");
};

clu_servicio.prototype.nuevoRespuesta = function(result) {
	$("#servicio_nuevo_modal").modal();
};

clu_servicio.prototype.verRespuestaEntidades = function(result) {
	if(result.respuesta){
		if(result.data.length != 0){
			var selects = document.getElementsByClassName("select_entidad")[0];
			$('.select_entidad').empty();	
			for(var i in result.data.entidades) {
				var opt1 = document.createElement('option');
				opt1.value = i;
				opt1.innerHTML = result.data.entidades[i];
				selects.appendChild(opt1);			
			}
			$('.select_entidad').trigger("chosen:updated");		
			
		}else{
			$('.select_entidad').empty();
			$('.select_entidad').trigger("chosen:updated");	
			//alert('No hay entidades para el municipio '+$("#select_municipio").val());
		}
	}
	
};

clu_servicio.prototype.opt_ver_disponibilidad = function() {

	if(clu_servicio.table.rows('.selected').data().length){

		$("#servicio_disponibilidad_modal .modal-body .row_content").html('');

		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Especialidad: '+clu_servicio.table.rows('.selected').data()[0][0]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Día de cita: '+clu_servicio.table.rows('.selected').data()[0][6]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Fecha y hora de cita: '+clu_servicio.table.rows('.selected').data()[0][7]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Estado: '+clu_servicio.table.rows('.selected').data()[0][8]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Especialista: '+clu_servicio.table.rows('.selected').data()[0][1]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Tel 1 Especialista: '+clu_servicio.table.rows('.selected').data()[0][10]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Tel 2 Especialista: '+clu_servicio.table.rows('.selected').data()[0][11]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Email Especialista: '+clu_servicio.table.rows('.selected').data()[0][15]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Municipio: '+clu_servicio.table.rows('.selected').data()[0][2]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Sucursal: '+clu_servicio.table.rows('.selected').data()[0][3]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Dirección Sucursal: '+clu_servicio.table.rows('.selected').data()[0][4]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Nombre asistente: '+clu_servicio.table.rows('.selected').data()[0][13]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Tel 1 asistente: '+clu_servicio.table.rows('.selected').data()[0][14]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Tel 2 asistente: '+clu_servicio.table.rows('.selected').data()[0][15]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Email asistente: '+clu_servicio.table.rows('.selected').data()[0][16]+'</div>');

		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Nit entidad: '+clu_servicio.table.rows('.selected').data()[0][17]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Tel 1 entidad: '+clu_servicio.table.rows('.selected').data()[0][18]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Tel 2 entidad: '+clu_servicio.table.rows('.selected').data()[0][19]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Email entidad: '+clu_servicio.table.rows('.selected').data()[0][20]+'</div>');

		

		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Precio suscriptor: '+clu_servicio.table.rows('.selected').data()[0][5]+'</div>');
		$("#servicio_disponibilidad_modal .modal-body .row_content").html($("#servicio_disponibilidad_modal .modal-body .row_content").html()+'<div class="col-md-6" >Precio particular: '+clu_servicio.table.rows('.selected').data()[0][21]+'</div>');

		$("#servicio_disponibilidad_modal").modal();

		$("input[name='id_especialista']").val(clu_servicio.table.rows('.selected').data()[0][23]);
		$("input[name='id_entidad']").val(clu_servicio.table.rows('.selected').data()[0][24]);
		$("input[name='id_especialidad']").val(clu_servicio.table.rows('.selected').data()[0][25]);


	}else{
		$('.alerts').html('<div class="alert alert-info fade in"><strong>¡Seleccione un registro!</strong> Esta opción requiere la selección de un registro!!!.<br><br><ul><li>Selecciona un registro dando click sobre él, luego prueba nuevamente la opción</li></ul></div>');
	} 

	
};

clu_servicio.prototype.opt_ver_usuario = function() {
	if($("#cedula_usuario").val()  != "" ){
		var datos = new Array();
  		datos['id'] = $("#cedula_usuario").val(); 
  		seg_ajaxobject.peticionajax($('#form_consult_user').attr('action'),datos,"clu_servicio.verRespuestaConsulta");
	}else{
		alert('Aùn no se ha diligenciado una cedula');
	}
};

clu_servicio.prototype.verRespuestaConsulta = function(result) {
	alert('OK');

};


var clu_servicio = new clu_servicio();
