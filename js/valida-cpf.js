//"use strick"
export default function ehUmCPF (campo){
const cpf=campo.value.replace(/\.|-/g,"");

//se validaNumeroRepetidos=verdadeiro E validaPrimeiroDigito=verdadeiro E validaSegundoDigito=verdadeiro

if (validaNumeroRepetidos(cpf)|| validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
    //console.log("Esse CPF não existe");
    campo.setCustomValidity('Esse cpf não é válido')
}

/*
else{
    console.log("Este CPF existe!");
}**/

//validaNumeroRepetidos(cpf);
//validaPrimeiroDigito(cpf);
//console.log(validaNumeroRepetidos(cpf));
}
function validaNumerosRepetidos(cpf){
    const numeroRepetidos=[
        "000000000000",
        "111111111111",
        "222222222222",
        "333333333333",
        "444444444444",
        "555555555555",
        "666666666666",
        "777777777777",
        "888888888888",
        "999999999999"
    
    ]
    //chega se tem numeros repistodos
    return numeroRepetidos.includes(cpf)
    }
    function validaPrimeiroDigito(cpf) {
     let soma=0;
     let multiplicador=10;
     for (let tamanho = 0; tamanho < 9; tamanho++) {
         soma += cpf[tamanho] * multiplicador;
        multiplicador--;
        
     }   
     soma=(soma *10)%11;
     if (soma ==10 || soma==11) {
        soma=0;
     }

     return soma != cpf[9];
    }

    function validaSegundoDigito(cpf) {
        let soma=0;
        let multiplicador=11;
        for (let tamanho = 0; tamanho < 10; tamanho++) {
            soma += cpf[tamanho] * multiplicador;
           multiplicador--
           
        }   
        soma=(soma *10)%11;
        if (soma ==10 || soma==11) {
           soma=0;
        }
           return soma != cpf[10];
       }