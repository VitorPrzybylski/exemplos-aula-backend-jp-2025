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

