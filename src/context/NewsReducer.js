const NewsReducer = (state,action) =>{
    switch(action.type){
        case "GET_NEWS": return {
            ...state,
            news : action.payload
        }
        case "GET_QUOTES" : return {
            ...state,
            showquotes : action.payload
        }
        case "GET_WEATHERINFO" : 
        return {
            ...state,
            weatherInfo : action.payload
        }
        default:
            return state
    }
}
 export default NewsReducer