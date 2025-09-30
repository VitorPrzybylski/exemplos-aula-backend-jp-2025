# exemplos-aula-backend-jp-2025
exemplo das aulas de Backnd do JP do senac 2025
import express from "express"

const app = express();
 //query params
    //inicializa na URL depois do ?
    //?nome=joao
    //?idade=10
    //lcoalhost:3000
app.get('/api/pessoa/:id', (req, res) => {
   
    const nome =req.query.nome

    console.log(req.params)
    res.status(200).send("Hello "+nome)
})
app.get('/exercicio1', (req, res) => {
   
    let valor1 
    let valor2
    console.log("exercicio 1")
    console.assert(valor1)

})
app.get('/exercicio2', (req, res) => {
   
    const nome =req.query.nome

    console.log(req.params)
    res.status(200).send("Hello "+nome)
})
app.get('/exercicio3', (req, res) => {
   
    const nome =req.query.nome

    console.log(req.params)
    res.status(200).send("Hello "+nome)
})
app.get('/exercicio4', (req, res) => {
   
    const nome =req.query.nome

    console.log(req.params)
    res.status(200).send("Hello "+nome)
})
app.get('/exercicio5', (req, res) => {
   
    const nome =req.query.nome

    console.log(req.params)
    res.status(200).send("Hello "+nome)
})
app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000")
})




 "pessoa1":10,
    "pessoa2":23,
    "pessoa3":23,
    "pessoa4":23,
    "pessoa5":23


<!-- lembrar de escolher post no arquivo no postman

mudar no codigo de get para post quando for usar (erro 404 no found)


lembrar de deixar o postman como json
clicar em text e dps escolher json


    DESMENBRANDO CODIGO

export const exercicio4 = (req, res) => {  //criar a funçao para exportar no index.js
    const {celcius}=req.body        //fazer a requisiçao
    const Fahrenheit =CelFahren(celcius)    //realizar o calculo ou a funçao que foi importada do services
    res.status(200).send({msg: "Exercicio 4 "+Fahrenheit/5    //mensagem com o resultado
    })

} -->


testando o bongo quest