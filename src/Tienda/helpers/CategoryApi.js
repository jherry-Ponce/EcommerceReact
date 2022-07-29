const axios = require('axios').default;

export const categoryApi = () =>{
    return axios.get('https://reactfinal-5c36d-default-rtdb.firebaseio.com/Category.json')
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        console.log(error);
      }) 
  }
