//valida-idade

export default function ehMaiordeIdade(campo) {
    const dataNascimento= new Date(campo.value);
 validaIIdade(dataNascimento);

}


function validaIdade(data) {
    //validando maioridade
    const dataAtual=new Date();
    const dataMais18=new Date(data.getUTCFullYear()+ 18,data.getUTCMonth(),data.getUTCDate());
return dataAtual >=dataMais18

    
}