import { Fav_course,FavDelete_course } from "./Actions";

const initialstate = {
    favoritedata:[]
}

const favreducer = (state=initialstate,action) => {
    console.log('$$$$$$$')
    console.log(state)
    switch (action.type) {
        case Fav_course :{
            const {index} = action.favoritelist;
            return{
                ...state,
                favoritedata : [...state.favoritedata , index]
            }
        }
        case FavDelete_course :{
            console.log('its work')
            const {index} = action.favoritelist;
            return{
                ...state,
                favoritedata : state.favoritedata.filter(list => list !== index),
            }
        }

        default:
            return state;
    }
}

export default favreducer;