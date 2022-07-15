function fnEnviar(){

    var vNombre = vApellido = vCorreo = vUbicacion = vcontraseña="";    
    vNombre = document.getElementById("idNombre").value;
    vApellido = document.getElementById("idApellido").value;
    vCorreo = document.getElementById("idCorreo").value;
    vUbicacion = document.getElementById("idUbicacion").value;
    vcontraseña = document.getElementById("idcontraseña").value;

    /*Insertando datos a la vista html del modal*/
    document.getElementById("sNombre").innerHTML = vNombre;
    document.getElementById("sApellido").innerHTML = vApellido;
    document.getElementById("sCorreo").innerHTML = vCorreo;
    document.getElementById("sUbicacion").innerHTML = vUbicacion;
    document.getElementById("scontraseña").innerHTML = vcontraseña;


   if(validaCampos() == true){
        var Modalhtml = document.getElementById("mRegistro");
        var MiModal = new bootstrap.Modal(Modalhtml);
        MiModal.show();

        $("#mRegistro").modal("hide");
   }
    
}

function validaCampos(){
   var valor = true;
   var vNombre = document.getElementById("idNombre").value;   
   var vApellido = document.getElementById("idApellido").value;
   var vCorreo = document.getElementById("idCorreo").value;
   var vUbicacion = document.getElementById("idUbicacion").value;
   var vcontraseña = document.getElementById("idcontraseña").value;
   //Objetos

   var ObjNombre = document.getElementById("idErrorNombre");
   var ObjApellido = document.getElementById("idErrorApellido");
   var ObjCorreo = document.getElementById("idErrorCorreo");
   var ObjUbicacion = document.getElementById("idErrorUbicacion");
   var Objcontraseña = document.getElementById("idErrorcontraseña");

    if(vNombre.trim().length == 0){
        valor = false;
        //Mostrar mensaje de error
        ObjNombre.style.display = "block";
        document.getElementById("idNombre").focus();
    }else{
       // Ocultar mensaje de error.
       ObjNombre.style.display = "none";
    }

    if(vApellido.trim().length == 0){
        valor = false
        ObjApellido.style.display = "block";
        document.getElementById("idApellido").focus();        
    }else{
        ObjApellido.style.display = "none";
    }

    if(vCorreo.trim().length == 0){
        valor = false
        ObjCorreo.style.display = "block";
        document.getElementById("idCorreo").focus();
    }else{
        ObjCorreo.style.display = "none";
    }

    if(vUbicacion.trim().length == 0){
        valor = false
        ObjUbicacion.style.display = "block";
        document.getElementById("idUbicacion").focus();
    }else{
        ObjUbicacion.style.display = "none";
    }

    if(vcontraseña.trim().length == 0){
        valor = false
        Objcontraseña.style.display = "block";
        document.getElementById("idcontraseña").focus();
    }else{
        Objcontraseña.style.display = "none";
    }

    return valor;
}
