const initialState = {
    dogs: [],
    temps: [],
    dogs2: [],
    details: [],
    favorites: []
}

export default function rootReducer (state = initialState, action){

    switch(action.type){
        case "GET_DOGS":
            return{
                ...state,
                dogs: action.payload,
                dogs2: action.payload
            }
        case "FILTER_AZ_ZA":
            var azza = action.payload === "a-z" ?
            state.dogs.sort(function (a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1
                }
                return 0
            }) :
            state.dogs.sort(function (a,b){
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1
                }
                if(b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                dogs: azza
            }
        case "GET_TEMPS":
            return{
                ...state,
                temps: action.payload
            }
        case "FILTER_DB":
            state.dogs = state.dogs2
            let estado = state.dogs    
            const filtrado = () => {
                if(action.payload === "all"){
                    return estado
                } else if (action.payload === "created"){
                    return estado.filter(e => typeof e.id === "string")
                } else if (action.payload === "api"){
                    return estado.filter(e => typeof e.id !== "string")
                } else {
                    return estado
                }
            }
            return{
                ...state,
                dogs: filtrado()
            }
        case "FILTER_TEMP":
            state.dogs = state.dogs2
            let filtrados = []
            console.log(state.dogs)
            if(action.payload === "allT") return {...state}
            state.dogs?.forEach(e => {
                if(typeof e.id === "string"){
                    if(e.temperaments?.find(d => d.name === action.payload)){
                        filtrados.push(e)
                    }
                }
                if(e.temperaments?.includes(action.payload)){
                    filtrados.push(e)
                }

            })
            return{
                ...state,
                dogs: filtrados
            }
        case "GET_BY_NAME":
            return{
                ...state,
                dogs: action.payload
            }
        case "GET_BY_ID":
            return{
                ...state,
                details: action.payload
            }
        case "FILTER_SIZE":
            state.dogs = state.dogs2
            let estaduko = state.dogs
            const filt = () => {
                if(action.payload === "all"){
                    return estaduko 
                } else if (action.payload === "verys"){
                    return estaduko.filter(e => e.weight_min <= 3.9)
                } else if (action.payload === "small"){
                    return estaduko.filter(e => e.weight_min >= 4 && e.weight_min <= 11.9)
                } else if (action.payload === "medium"){
                    return estaduko.filter(e => e.weight_min >= 12 && e.weight_min <= 24.9)
                } else if (action.payload === "large"){
                    return estaduko.filter(e => e.weight_min >= 25 && e.weight_min <= 44.9)
                } else if (action.payload === "veryl"){
                    return estaduko.filter(e => e.weight_min >= 45)
                }
            }
            return{
                ...state, 
                dogs: filt()
            }
        case "ADD_FAVORITE":
            console.log(state.favorites)
            if(state.favorites?.find(e => e.id === action.payload.id)){
                alert("This breed is already in favourites")
                return{
                    ...state
                }
            } else {
                alert("Breed add to favourites succesfully")
                return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
            } 
        case "REMOVE_FAVORITE":
            var hola = state.favorites.filter(e => e.id !== action.payload)
            return{
                ...state,
                favorites: hola
            }
        case "REMOVE_DETAILS":
            return{
                ...state,
                details: []
            }
        default:
            return state
    }
}

