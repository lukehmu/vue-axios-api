import axios from 'axios';

const API_KEY = 'iddqd';

export default {
  getAddressOptions(searchTerm) {
    return axios.get('https://api.ideal-postcodes.co.uk/v1/autocomplete/addresses/', {
      params: {
        api_key: API_KEY,
        query: searchTerm,
      },
    })
      .then((response) => {
        console.log('request search term');
        // console.log(response);
        return response.data;
      });
  },
  getAddressByUDPRN(udprn) {
    return axios.get(`https://api.ideal-postcodes.co.uk/v1/udprn/${udprn}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((response) => {
        console.log(udprn);
        console.log('request udprn term');
        // console.log(response);
        return response.data;
      });
  },

};
