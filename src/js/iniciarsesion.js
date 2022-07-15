function fnEnviar(){

    var vCorreo = vcontraseña="";    
    vCorreo = document.getElementById("idCorreo").value;
    vcontraseña = document.getElementById("idcontraseña").value;

    /*Insertando datos a la vista html del modal*/
    document.getElementById("sCorreo").innerHTML = vCorreo;
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
   var vCorreo = document.getElementById("idCorreo").value;
   var vcontraseña = document.getElementById("idcontraseña").value;
   //Objetos

   var ObjCorreo = document.getElementById("idErrorCorreo");
   var Objcontraseña = document.getElementById("idErrorcontraseña");

    if(vCorreo.trim().length == 0){
        valor = false
        ObjCorreo.style.display = "block";
        document.getElementById("idCorreo").focus();
    }else{
        ObjCorreo.style.display = "none";
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
