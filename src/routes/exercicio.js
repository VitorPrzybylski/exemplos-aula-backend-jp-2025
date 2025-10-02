import express, { Router } from 'express'
import controllerExercicio from '../controllers/exercicio.js'
const router =express.Router()
router.get('/api/pessoa/:id', (req, res) => {
    const nome = req.query.nome
    console.log(req.params)
    res.status(200).send("Hello " + nome)
})

router.post('/exercicio1', controllerExercicio.Exercicio1POST), 

router.get('/exercicio2',controllerExercicio.Exercicio2)

router.post('/exercicio3',controllerExercicio.Exercicio3)

router.post('/exercicio4',controllerExercicio.Exercicio4)

router.post('/exercicio5',controllerExercicio.Exercicio5)

router.get('/exercicio6', controllerExercicio.Exercicio6)
export default router
