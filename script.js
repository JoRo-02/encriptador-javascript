

    function encriptar() {

        let textoUsuario = document.getElementById("texto__usuario").value;
        let validacionCaracteres =/[A-ZÁÉÍÓÚÜáéíóúü!@#$%^&*(),.?":{}|<>]/g;

        if(validacionCaracteres.test(textoUsuario)){
            alert('bichiyal');
        }else{

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
                let textoEncriptado=textoUsuario.replace(/[aeiou]/g, reemplazarVocales);
        
                if(textoUsuario.length != 0){
                    
                    document.getElementById('texto__resultado').value =textoEncriptado;
                    document.getElementById('imagen__lupa').remove();
                    document.getElementById('titulo__standby').remove();
                    document.getElementById('mensaje__standby').remove();
                
                }
        }

 
    
    }
    
    function desencriptar(){
        alert("en proceso");
    }

    
 