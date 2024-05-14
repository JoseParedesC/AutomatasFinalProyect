const ER_Inicio = "^(Inicio)"
const ER_Final = "(Fin)$"
const declaraciones = "^(Declare) [a-z]*([ , (a-z)])* [ entero | real | cadena | logico ]*;$"
var variables_globales = []


function validarInicioyFin(){
    var texto_completo = document.getElementById("cuadrotexto").value
    let texto_completo_split = texto_completo.split("\n")

    let regEx1 = new RegExp(ER_Inicio)
    let regEx2 = new RegExp(ER_Final)

    if(regEx1.test(texto_completo_split[0]) && regEx2.test(texto_completo_split[texto_completo_split.length-1]))
        return true
    else
        return false
}

function limpiarTextArea(){
    document.getElementById("cuadrotexto").value = "Inicio\n\n\n\n\nFin"
}


function ValidateDeclarations(){
    var texto_completo = document.getElementById("cuadrotexto").value
    let texto_completo_split = texto_completo.replace("Inicio", "").replace("Fin","").split("\n")

    console.log(texto_completo_split)

    let regExp = new RegExp(declaraciones)

    for(i = 0; i < texto_completo_split.length; i++){
        if(regExp.test(texto_completo_split[i])){
            variables = texto_completo_split[i]
            variables = variables.replace("Declare","").replace(/[ entero | real | cadena | logico ]*;/, "").split(",")
            for(j = 0; j < variables.length; j++){
                if(variables[j] =="")
                    return false
                else
                    variables_globales.push(variables[j])
                return true
            }
        }
    }
}


function validateSyntaxis(){
    // if(validarInicioyFin()){        

    //     document.getElementById("msg_success").style.display = "block"
    //     document.getElementById("msg_error").style.display = "none"

    // }else{

    //     document.getElementById("msg_success").style.display = "none"
    //     document.getElementById("msg_error").style.display = "block"

    // }


    if(ValidateDeclarations()){        

        document.getElementById("msg_success").style.display = "block"
        document.getElementById("msg_error").style.display = "none"

    }else{

        document.getElementById("msg_success").style.display = "none"
        document.getElementById("msg_error").style.display = "block"

    }
}

document.getElementById("btnValidar").addEventListener("click", validateSyntaxis, false)
document.getElementById("btnLimpiar").addEventListener("click", limpiarTextArea, false)