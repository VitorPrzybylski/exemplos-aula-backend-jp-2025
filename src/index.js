import express from "express"
import router from "./routes/exercicio.js";

const app = express();
app.use(express.json())

app.use(router)

//query params
//inicializa na URL depois do ?
//?nome=joao
//?idade=10
//lcoalhost:3000

app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000")
})


