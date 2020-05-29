<template>
  <b-container fluid>
    <h1>Enter basic details</h1>
    <template v-if="locationId">
      <b-form-row class="my-3">
        <p>
          Applying to location: <strong>{{ locationId }}</strong>
        </p>
      </b-form-row>

      <b-form @submit.prevent="sendEmail">
        <b-form-row class="my-3">
          <InputText
            id="your-email"
            v-model="userDetails.email"
            label="What is your email address"
            type="email"
            required
          />
        </b-form-row>
        <b-form-row class="my-3">
          <InputText
            id="your-name"
            v-model="userDetails.name"
            label="What is your name"
            type="text"
            required
          />
        </b-form-row>
        <b-button
          type="submit"
        >
          Submit
        </b-button>
      </b-form>
    </template>
    <template v-else>
      <b-form-row class="my-3">
        <p>
          No location id found
        </p>
      </b-form-row>
    </template>
    <b-form-row
      v-if="fakeEmailSent"
      class="my-3"
    >
      <h2>Fake email link</h2>
      <b-input v-model="emailLink" />
      <router-link :to="{name:'UserApplication', params: { locationId: locationId }}">
        {{ emailLink }}
      </router-link>
    </b-form-row>
  </b-container>
</template>

<script>
// import lovApi from '@/services/api/lov';
import InputText from '@/components/InputText.vue';

export default {
  name: 'UserEOI',
  components: {
    InputText,
  },
  props: {
    locationId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      userDetails: {
        email: '',
        name: '',
      },
      sending: false,
      apiResponse: '',
      fakeEmailSent: false,
      emailLink: '',
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    sendEmail() {
      this.fakeEmailSent = true;
      const siteUrl = window.location.origin;
      const emailRoute = this.$router.resolve({ name: 'UserApplication', params: { locationId: this.locationId } }).href;
      this.emailLink = siteUrl + emailRoute;
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
