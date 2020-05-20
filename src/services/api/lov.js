import axios from 'axios';

export default {
  getLovData() {
    return axios.get('/dummy-api/lov.json')
      .then((response) => {
        console.log('get all lov data');
        // console.log(response)
        return response.data;
      });
  },

};
