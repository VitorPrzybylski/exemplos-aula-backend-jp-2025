class ServiceExercicio {

    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Nao é um numero")
        }
        const num1Inteiro = num1 * 100
        const num2Inteiro = num2 * 100
        const result = num1Inteiro + num2Inteiro

        return result / 100;
    }
    Salario(valorHora, qtdeHora) {
        const valorHoraInteiro = valorHora * 100
        const qtdeHoraInteiro = qtdeHora * 100
        const result = qtdeHoraInteiro * valorHoraInteiro
        return result / 10000;

    }
    Media(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5) {
        return pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5;


    }
    CelFahren(celcius) {
        return 9 * celcius + 160

    }
    MilhaKMs(milhas) {
        return milhas * 1.60934
    }
}
export default new ServiceExercicio()
//  Teste(test1,test2){
//     return test1+test2
// }