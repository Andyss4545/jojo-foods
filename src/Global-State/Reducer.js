export const initialState ={
     favorite : [
        
     ],

     user : null
}


const reducer = (state, action) => {
       //Big switch which takes action and have  property call type
       switch(action.type) {
             case 'ADD_TO_FAVORITE':

             return {
                  ...state,
                  favorite: action.favorite
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