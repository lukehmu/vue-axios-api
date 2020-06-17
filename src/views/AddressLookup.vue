<template>
  <b-container fluid>
    <h1>Enter you postcode</h1>
    <InputAddress />
    <b-input v-model="searchTerm" />
    <b-button
      class="my-3"
      @click="getAddressResults"
    >
      Get address data
    </b-button>
    <b-form-select
      v-if="addressResultsSuccess"
      v-model="selectedAddress"
      class="my-3"
      :options="searchResults"
      value-field="udprn"
      text-field="suggestion"
    />
    <b-button
      v-if="addressResultsSuccess"
      class="my-3"
      @click="getFullAddress"
    >
      Get full address details
    </b-button>
    <b-list-group class="my-3">
      <b-list-group-item
        v-for="(value, name) in fullAddress"
        :key="value"
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
    };
  },
  methods: {
    getAddressResults() {
      addressApi.getAddressOptions(this.searchTerm)
        .then((response) => {
          console.log(response);
          this.searchResults = response.result.hits;
          this.addressResultsSuccess = true;
        });
    },
    getFullAddress() {
      addressApi.getAddressByUDPRN(this.selectedAddress)
        .then((response) => {
          console.log(response);
          this.fullAddress = response.result;
        });
    },
  },
};
</script>
