const potterTeste = require('../models/potterSchema')

const getPotter =  (req,res) => {
    console.log(req.url)
    potterTeste.potterCollection.find((error, potter) =>{
        if(error){
            return res.status(500).send(error)
        } else{
            return res.status(200).send(potter)
        }
    })
}

const getPotterById =  (req,res) => {
    const idParam = req.params.id
    potterTeste.potterCollection.findById(idParam, (error, potter) => {
        if(error){
            return res.status(500).send(error)
        } else {
            if(potter){
                return res.status(200).send(potter)
            } else{
                return res.status(404).send("Personagem não encontrado. :(")
            }
        }
    })
}

const addPotter = (req,res) => {
    console.log(req.url)
    const potterBody = req.potterBody
    const potter = new potterCollection(potterBody)

    potter.save((error) => {
        if(error){
            return res.status(400).send(error)
        } else{
            return res.status(201).send(potter)
        }
    })
}

const updatePotter = (req, res) => {
    const idParam = req.params.id
    const potterBody = req.body
    const novo = {new: true}

    potterTeste.potterCollection.findByIdAndUpdate(
        idParam,
        potterBody,
        novo,
        (error, potter) =>{
            if(error){
                return res.status(500).send(error)
            } else if (potter){
                return res.status(200).send(potter)
            } else{
                return res.sendStatus(404)
            }
        }
    )
}

const deletePotter = (req, res) => {
    const idParam = req.params.id
    potterTeste.potterCollection.findByIdAndDelete(idParam, (error, potter) =>
    {
        if(error){
            return res.status(500).send(error)
            } else {
                if(potter){
                    return res.status(200).send("O personagem foi apagado.")
                } else{
                    return res.sendStatus(404)
                }
            }
    })
}

module.exports = {
    getPotter, 
    getPotterById, 
    addPotter, 
    updatePotter, 
    deletePotter 
}