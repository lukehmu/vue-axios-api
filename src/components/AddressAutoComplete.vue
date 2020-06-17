<template>
  <b-container fluid>
    <label for="searchTerm">Enter your postcode (auto complete)</label>
    <b-input
      id="searchTerm"
      v-model="searchTerm"
      @keyup="getAddressResults"
    />
    <b-list-group
      v-if="addressResultsSuccess && showAddressList"
      id="searchResults"
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
    <p v-if="showAddressDetails">
      <strong>Send to API: {{ fullAddress.postcode }}</strong><br>
      <strong>Send to API: {{ fullAddress.latitude }}</strong><br>
      <strong>Send to API: {{ fullAddress.longitude }}</strong>
    </p>
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
import addressApi from '@/services/api/addressApi';

export default {
  name: 'AddressAutoComplete',
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
  methods: {
    getAddressResults() {
      addressApi.getAddressOptions(this.searchTerm)
        .then((response) => {
          this.searchResults = response.result.hits;
          this.addressResultsSuccess = true;
          this.showAddressList = true;
          this.showAddressDetails = false;
        });
    },
    getFullAddress(udprn) {
      addressApi.getAddressByUDPRN(udprn)
        .then((response) => {
          this.fullAddress = response.result;
          this.showAddressList = false;
          this.showAddressDetails = true;
        });
    },
  },
};
</script>

<style>
#searchResults {
    overflow-y: auto;
    height: 500px;
}
</style>
