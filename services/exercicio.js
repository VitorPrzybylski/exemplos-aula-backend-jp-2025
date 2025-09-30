export function somar (num1,num2){
    const num1Inteiro = num1*100
    const num2Inteiro = num2*100
    const result = num1Inteiro+num2Inteiro

    return result/100;
}
export function salario (valorHora, qtdeHora){
    const valorHoraInteiro = valorHora*100
    const qtdeHoraInteiro = qtdeHora*100
    const result = qtdeHoraInteiro+valorHoraInteiro
    return result/100;

}
export function Media (pessoa1,pessoa2,pessoa3,pessoa4,pessoa5){
    return pessoa1+pessoa2+pessoa3+pessoa4+pessoa5;


}
export function CelFahren(celcius){
    return 9*celcius+160

}
export function MilhaKMs(milhas){
   return milhas*1.60934
}
// export function Teste(test1,test2){
//     return test1+test2
// }