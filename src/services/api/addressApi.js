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
      .then((response) => response.data);
  },
  getAddressByUDPRN(selectedUdprn) {
    return axios.get(`https://api.ideal-postcodes.co.uk/v1/udprn/${selectedUdprn}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((response) => response.data);
  },

};
