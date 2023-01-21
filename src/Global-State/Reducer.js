export const initialState ={
     favorite : [
        
     ],

     user : null
}


const reducer = (state, action) => {
       //Big switch which takes action and have  property call type
       switch(action.type) {
             case 'ADD_TO_FAVORITE':

             const tempfavorite = state.favorite.filter((item) => action.favorite.id === item.id)
             if (tempfavorite.length > 0) {
                 return state
             } else {
               return {
                    ...state,
                    favorite: [...state.favorite, action.favorite]
               }
             }


             case 'SET_USER':

             return {
                  ...state,
                  user: action.user
             }
             

             default: return state
       }

}

export default reducer