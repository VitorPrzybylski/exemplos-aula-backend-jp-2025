import { salario, somar } from "../services/exercicio.js";

export const exercicio1GET =(req, res) => {
    let valor1 = Number(req.query.valor1);
    let valor2 = Number(req.query.valor2);
    let SOMA = valor1 + valor2
    res.send("Exercicio 1 " + SOMA)
}

export const exercicio1POST =(req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = somar(num1,num2)

    res.status(200).send({
        msg: "o resultado é "+result,
        data:result,
        error:null
    })
}
export const exercicio2 = (req, res) => {
    const {valorHora,qtdeHora}= req.params
    const result = salario(valorHora, qtdeHora)
    res.send(result)
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