import axios from "axios";

const base_Key = '150d231ada759f67bb3585944481b8a8'

// const key = `38399b056aab4dfe8ec523c2ae490b76`

class RecipeService {

      // static Spoonacula(){
      //         let dataURL = `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=20`
      //         axios.get(dataURL)
      // }
      static RecipeList(){
           let serverUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=b9748dba&app_key=${base_Key}&ingr=9-12&diet=balanced&random=true`
           return axios.get(serverUrl)
      }

      static Carousel(){
              let dataURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=b9748dba&app_key=${base_Key}%09&ingr=1-5&random=true`
              return axios.get(dataURL)
      }

      // static RecipeId(){
      //          let serverUrl = `https://api.edamam.com/api/recipes/v2/8257cea7261dda0aed94ada9f0bdf3eb?type=public&app_id=b9748dba&app_key=150d231ada759f67bb3585944481b8a8%09`
      // }
}

export default RecipeService