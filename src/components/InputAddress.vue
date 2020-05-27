<template>
  <b-container fluid>
    <b-form @submit.prevent="sendPostcode">
      <b-form-row class="my-3">
        <label for="userPostcode">Enter your postcode</label>
        <b-input
          id="userPostcode"
          v-model="userDetails.postcode"
        />
      </b-form-row>
      <b-form-row class="my-3">
        <b-button
          type="submit"
        >
          Submit
        </b-button>
      </b-form-row>
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
    };
  },
  methods: {
    sendPostcode() {
      appManApi.retrieveNearestLocations(this.userDetails.postcode)
        .then((response) => {
          const { locations } = response;
          const { userData } = response;
          this.$router.push({ name: 'Locations', params: { locations, userData } });
        });
    },
  },
};
</script>

<style>

</style>
