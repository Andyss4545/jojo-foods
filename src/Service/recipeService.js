import axios from "axios";

const base_Key = '150d231ada759f67bb3585944481b8a8'

class RecipeService {
      static RecipeList(){
           let serverUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=b9748dba&app_key=${base_Key}&ingr=9-12&diet=balanced&random=true`
           return axios.get(serverUrl)
      }

      static Carousel(){
              let dataURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=b9748dba&app_key=${base_Key}%09&ingr=1-5&random=true`
              return axios.get(dataURL)
      }
}

export default RecipeService