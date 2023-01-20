export const initialState ={
     favorite : [
          {

          }
     ],

     user : null
}


const reducer = (state, action) => {
       //Big switch which takes action and have  property call type
       switch(action.type) {
             case 'ADD T0 FAVORITE':


             default: return state
       }

}

export default reducer