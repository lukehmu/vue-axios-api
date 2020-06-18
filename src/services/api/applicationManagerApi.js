import axios from 'axios';

export default {
  sendUserData(payload) {
    console.log(payload);
    return axios.post('https://webhook.site/a048ba46-bd3f-45d1-9010-10b98d331795', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('send user data');
        return response;
      });
  },
  retrieveNearestLocations(payload) {
    return axios.get('/dummy-api/locations.json')
      .then((response) => {
        console.log(payload);
        // console.log(response)
        return response.data;
      });
  },

};
