export const Fav_course = "FAVORITE_COURSE";
export const FavDelete_course = "FAVORITEDELETE_COURSE";

export const ADD_FAV =(index) => ({
    type:Fav_course,
    favoritelist:{
        index
    }
})

export const Delete_fav = (index) => ({
    type:FavDelete_course,
    favoritelist:{
        index
    }
})