const {Router} = require("express")
const {Dog, Temperament} = require("../db")
const router = Router()
const {getAll} = require("./funciones")

router.get("/", async (req, res) => {
    try{
        const {name} = req.query
        let allDogs = await getAll()

        if(name){
            const raza = allDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            if(!raza.length){
                res.send("Esta raza no existe")
            } else {
                res.status(200).send(raza)
            }
        } else {
            res.status(200).json(allDogs)
        }
    } catch(error){
        return res.send(error)
    }
})

router.get("/:idRaza", async (req, res) => {
    try{
        const {idRaza} = req.params
        const allDogs = await getAll()
        
        if(idRaza){
            let idDog = allDogs.filter(e => e.id == idRaza)
            if(idDog.length){
                res.send(idDog)
            } else{
                res.send("Raza no encontrada")
            }
        }
    } catch(error){
        res.send(error)
    }
})

module.exports = router