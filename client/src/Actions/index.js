import axios from "axios"

export function getPerritos(){
    return async function(dispatch){
        var dogs = await axios.get("/dogs");
        return dispatch({
            type: "GET_DOGS",
            payload: dogs.data
        })
    }
}

export function getTemperamentos(){
    return async function(dispatch){
        var temp = await axios.get("/temperament");
        return dispatch({
            type: "GET_TEMPS",
            payload: temp.data
        })
    }
}

export function filterDb(payload){
    return{
        type: "FILTER_DB",
        payload
    }
}

export function filterAlf (payload){
    return{
        type: "FILTER_AZ_ZA",
        payload
    }
}

export function filterTemp (payload) {
    return{
        type: "FILTER_TEMP",
        payload
    }
}

export function getByName (payload){
    return async function(dispatch){
    try{
        var name = await axios.get(`/dogs?name=${payload}`)
        return dispatch({
            type: "GET_BY_NAME",
            payload: name.data
        })
    }
     catch (error){
        alert("Write a valid dog's breed")
    }
  }  
}

export function getById (params){
    return async function(dispatch){
        var id = await axios.get(`/dogs/${params}`)
        return dispatch({
            type: "GET_BY_ID",
            payload: id.data
        })
    }
}

export function createDog(payload){
    return async function(dispatch){
        const nuevoPerro = await axios.post("/dog", payload)
        return nuevoPerro
    }
}

export function filterSize(payload){
    return{
        type: "FILTER_SIZE",
        payload
    }
}

export function addFavorite(payload){
    return{
        type: "ADD_FAVORITE",
        payload
    }
}

export function removeFavorite(payload){
    return{
        type: "REMOVE_FAVORITE",
        payload
    }
}

export function removeDetails(payload){
    return{
        type: "REMOVE_DETAILS",
        payload
    }
}