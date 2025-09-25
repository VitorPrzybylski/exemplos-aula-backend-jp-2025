import {  salario, somar, Media,CelFahren, MilhaKMs } from "../services/exercicio.js";

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
    // const {pessoa1,pessoa2,pessoa3,pessoa4,pessoa5} = req.params
    // const media = Media(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5)
    console.log("body aqui",req.body);
    const { pessoa1, pessoa2, pessoa3, pessoa4, pessoa5 } = req.body
    // const pessoa1 = req.body.pessoa1;
    // const pessoa2 = req.body.pessoa2;
    // const pessoa3 = req.body.pessoa3;
    // const pessoa4 = req.body.pessoa4;
    // const pessoa5 = req.body.pessoa5;
    const media = Media(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5)
    // const test1 = req.body.test1;
    // const test2 = req.body.test2;
    // const resultado =Teste(test1,test2)
    res.status(200).send({msg:"resultado " +media/5,
        data:media,
        error:null
    })
}
export const exercicio4 = (req, res) => {
    const {celcius}=req.body
    const Fahrenheit =CelFahren(celcius)
    res.status(200).send({msg: "Exercicio 4 "+Fahrenheit/5
    })
}
export const exercicio5 = (req, res) => {
    const {milhas}=req.body
    const KMs =MilhaKMs(milhas)
    res.send({msg:"Exercicio 5 "+KMs})
}
export const exercicio6 = (req, res) => {
    let duracao,minutos,segundos,horas
    minutos = segundos/60
    res.send("Exercicio 6 ")
}