

    function encriptar() {

        let textoUsuario = document.getElementById("texto__usuario").value;
        let validacionCaracteres =/[A-ZÁÉÍÓÚÜáéíóúü!@#$%^&*(),.?":{}|<>]/g;
        let mensajeError= document.getElementById('texto__guia');

        
        if(validacionCaracteres.test(textoUsuario)){

            mensajeError.classList.remove("vibrar");
            void mensajeError.offsetWidth;  
            mensajeError.classList.add("vibrar");


        }else{

            mensajeError.classList.remove("vibrar");

            function reemplazarVocales(char) {
                switch (char) {
                    case 'a': return 'ai';
                    case 'e': return 'enter';
                    case 'i': return 'imes';
                    case 'o': return 'ober';
                    case 'u': return 'ufat';
                    default: return char;
                }
            }

            //la funcion regular "[aeiou]/g"  busca cualquier carácter que sea una de las vocales minúsculas: a, e, i, o, u. y se las 
            //pasa como parametro a la function reemplazarVocales, es decir reemplazarVocales(*)


                let textoEncriptado=textoUsuario.replace(/[aeiou]/g, reemplazarVocales);
        
                if(textoUsuario.length != 0){
                    
                    document.getElementById('texto__resultado').value =textoEncriptado;
                    document.getElementById('imagen__lupa').style.display = 'none';
                    document.getElementById('titulo__standby').style.display ='none';
                    document.getElementById('mensaje__standby').style.display ='none';
                
                }
        }
   
    }
    



    function desencriptar(){
        let textoUsuarioEncriptado = document.getElementById("texto__usuario").value;
        let validacionCaracteres =/[A-ZÁÉÍÓÚÜáéíóúü!@#$%^&*(),.?":{}|<>]/g;
        let mensajeError= document.getElementById('texto__guia');

        
        if(validacionCaracteres.test(textoUsuarioEncriptado)){

            mensajeError.classList.remove("vibrar");
            void mensajeError.offsetWidth;  
            mensajeError.classList.add("vibrar");
        }else{
            let textoDescifrar = textoUsuarioEncriptado.replace(/ai/g, 'a')
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

            if (textoUsuarioEncriptado.length!= 0){
            document.getElementById('texto__resultado').value = textoDescifrar;
            }
        }
         
    }


    function limpiarTexto(){
        document.getElementById('texto__resultado').value = "";
        document.getElementById('imagen__lupa').style.display= 'block';
        document.getElementById('titulo__standby').style.display= 'block';
        document.getElementById('mensaje__standby').style.display= 'block';

    }

    function copiarTexto(){
        let textoCopiar = document.getElementById("texto__resultado");
        textoCopiar.select();
        textoCopiar.setSelectionRange(0,99999)

        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        
        document.getElementById('copy').classList.add("active");
        setTimeout(function(){
            document.getElementById('copy').classList.remove("active");
        
        },500);

        

      }
    
    
 