<template>
  <b-container fluid>
    <h1>Enter your postcode</h1>
    <InputAddress />
    <label for="searchTerm">Enter your postcode (auto complete)</label>
    <b-input
      id="searchTerm"
      v-model="searchTerm"
      @keyup="getAddressResults"
    />
    <b-list-group
      v-if="addressResultsSuccess && showAddressList"
      class="my-3"
    >
      <b-list-group-item
        v-for="address in searchResults"
        :key="address.udprn"
        button
        @click="getFullAddress(address.udprn)"
      >
        {{ address.suggestion }}
      </b-list-group-item>
    </b-list-group>
    <b-list-group
      v-if="showAddressDetails"
      class="my-3"
    >
      <b-list-group-item
        v-for="(value, name) in fullAddress"
        :key="name"
      >
        {{ name }}: {{ value }}
      </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
// @ is an alias to /src
import InputAddress from '@/components/InputAddress.vue';
import addressApi from '@/services/api/addressApi';

export default {
  name: 'AdressLookup',
  components: {
    InputAddress,
  },
  data() {
    return {
      searchTerm: '',
      searchResults: [],
      selectedAddress: '',
      addressResultsSuccess: false,
      fullAddress: '',
      showAddressList: null,
      showAddressDetails: null,
    };
  },
  computed: {

  },
  methods: {
    getAddressResults() {
      addressApi.getAddressOptions(this.searchTerm)
        .then((response) => {
          console.log(response);
          this.searchResults = response.result.hits;
          this.addressResultsSuccess = true;
          this.showAddressList = true;
          this.showAddressDetails = false;
        });
    },
    getFullAddress(udprn) {
      addressApi.getAddressByUDPRN(udprn)
        .then((response) => {
          console.log(response);
          this.fullAddress = response.result;
          this.showAddressList = false;
          this.showAddressDetails = true;
        });
    },
  },
};
</script>
