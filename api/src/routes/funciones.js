const axios = require("axios")
const {Dog, Temperament} = require("../db")
const api_key="460d499f-cf7b-4bc5-93ed-8ab42745089e"

const getApi = async () => {
    const url = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`)
    const api = await url.data.map(el => {
        return {
            id: el.id,
            name: el.name,
            height_min: Number(el.height.metric.slice(0,2)),
            height_max: Number(el.height.metric.slice(4)),
            weight_min: Number(el.weight.metric.slice(0,2)),
            weight_max: Number(el.weight.metric.slice(4)),
            life_span: el.life_span,
            temperaments: el.temperament,
            img: el.image.url
        }
    })
    return api
}

const getDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
}

const getAll = async () => {
    const apiInfo = await getApi()
    const dbInfo = await getDb()
    const totalInfo = apiInfo.concat(dbInfo)
    return totalInfo
}

module.exports = {getAll, getApi, getDb}