const {Router} = require("express")
const axios = require("axios")
const {Temperament} = require("../db")
const router = Router()
const {getAll} = require("./funciones")

router.get("/", async (req, res) => {
    try{
        const url = await getAll()
        const info = url.map(el => el.temperaments)
        const temperament = info.toString().trim().split(/\s*,\s*/)
        const filtrados = [... new Set(temperament)]
        filtrados.forEach(el => {
            if(el){
                Temperament.findOrCreate({
                    where: {
                        name: el
                    }
                })
            }
        })
        const allTemp = await Temperament.findAll()
        return res.send(allTemp)
    } catch(error){
        res.send(error)
    }
})

module.exports = router