import express from "express"
import { exercicio1GET, exercicio1POST, exercicio2,exercicio3,exercicio4,exercicio5,exercicio6 } from "./controllers/exercicio.js";

const app = express();
app.use(express.json())


//query params
//inicializa na URL depois do ?
//?nome=joao
//?idade=10
//lcoalhost:3000
app.get('/api/pessoa/:id', (req, res) => {
    const nome = req.query.nome
    console.log(req.params)
    res.status(200).send("Hello " + nome)
})

app.post('/exercicio1', exercicio1POST), 


app.get('/exercicio2', exercicio2)


app.get('/exercicio3',exercicio3)


app.get('/exercicio4', exercicio4)


app.get('/exercicio5', exercicio5)

app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000")
})
app.get('/exercicio6', exercicio6)

