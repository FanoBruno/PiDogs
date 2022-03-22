const {Router} = require("express")
const {Dog, Temperament} = require("../db")
const router = Router()

router.post("/", async (req, res) => {
    
    const {name, height_max, height_min, weight_max, weight_min, life_span, temperaments, img} = req.body
    
    try{
        let nuevoPerro = await Dog.create ({
            name,
            weight_min,
            weight_max,
            height_min,
            height_max,
            life_span,
            img,
        })

    let temperamentDb = await Temperament.findAll ({
        where: {name: temperaments}
    })

    nuevoPerro.addTemperament(temperamentDb)
    res.status(200).send("Raza creada con exito")
    }
    catch (error) {
        res.send("Error: Post failed")
    }
})

module.exports = router