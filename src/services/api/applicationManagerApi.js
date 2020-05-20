import axios from 'axios';

export default {
  sendUserData(payload) {
    console.log(payload);
    return axios.post('https://webhook.site/1b0f2d73-1af9-441d-982f-7361a892c272', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('send user data');
        return response.data;
      });
  },

};
