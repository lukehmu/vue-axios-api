<template>
  <b-container fluid>
    <b-form @submit.prevent="sendPostcode">
      <b-row class="my-3">
        <b-input v-model="userDetails.postcode" />
      </b-row>
      <b-row class="my-3">
        <b-button
          type="submit"
        >
          Submit
        </b-button>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import appManApi from '@/services/api/applicationManagerApi';

export default {
  data() {
    return {
      userDetails: {
        postcode: 'BN3 7RJ',
      },
      nearestDetachments: [],
    };
  },
  methods: {
    sendPostcode() {
      appManApi.retrieveNearestLocations(this.userDetails.postcode)
        .then((response) => {
          this.nearestDetachments = response;
        });
    },
  },
};
</script>

<style>

</style>
