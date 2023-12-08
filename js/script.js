///validar campos obrigatórios


import ehUmCPF from "./valida-cpf.js";
import ehMaiordeIdade from "./valida-idade.js";
const camposDoFormulario=document.querySelectorAll(["required"])

camposDoFormulario.forEach((campo)=>{
    campo.addEventListener("blur",()=>verificaCampo(campo))
})


function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {

         ehUmCPF(campo)

    }
    if (campo.name=="aniversario" && campo.value >=18 ) {
        ehMaiordeIdade(campo)

    }
}

