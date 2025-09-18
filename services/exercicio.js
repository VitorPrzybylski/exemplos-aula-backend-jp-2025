export const exercicio1 =(req, res) => {
    let valor1 = Number(req.query.valor1);
    let valor2 = Number(req.query.valor2);
    let SOMA = valor1 + valor2
    res.send("Exercicio 1 " + SOMA)
}
export const exercicio2 = (req, res) => {

    let horasTrabalhadas = Number(req.query.horasTrabalhadas)
    let valorHora = Number(req.query.valorHora)
    let Salario = horasTrabalhadas * valorHora
    res.send("Exercicio 2 " + Salario)
}
export const exercicio3 =  (req, res) => {
    let pessoa1 = Number(req.query.pessoa1)
    let pessoa2 = Number(req.query.pessoa2)
    let pessoa3 = Number(req.query.pessoa3)
    let pessoa4 = Number(req.query.pessoa4)
    let pessoa5 = Number(req.query.pessoa5)
    let Media = pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5
    res.send("Exercicio 3 " + Media / 5)
}
export const exercicio4 = (req, res) => {
    let Celsius = Number(req.query.Celsius)
    let Fahrenheit = (9 * Celsius + 160) / 5
    res.send("Exercicio 4 " + Fahrenheit)
}
export const exercicio5 = (req, res) => {
    let milhas = Number(req.query.milhas)
    let KMs
    KMs = milhas * 1.60934
    res.send("Exercicio 5 " + KMs)
}
export const exercicio6 = (req, res) => {
    let duracao,minutos,segundos,horas
    minutos = segundos/60
    res.send("Exercicio 6 ")
}