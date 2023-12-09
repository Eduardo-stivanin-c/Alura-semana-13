//valida-idade

export default function ehMaiorDeIdade(campo) {
    const dataNascimento= new Date(campo.value);
    console.log(validaIdade(dataNascimento));


}


function validaIdade(data) {
    //validando maioridade
    const dataAtual=new Date();
    const dataMais18=new Date(data.getUTCFullYear()+ 18,data.getUTCMonth(),data.getUTCDate());
return dataAtual >=dataMais18

    
}



