<template>
  <b-form @submit.prevent="sendData">
    <b-container fluid>
      <b-row class="my-3">
        <InputText
          id="your-email"
          v-model="userDetails.email"
          label="What is your email address"
          type="email"
          required
        />
      </b-row>
      <b-row class="my-3">
        <InputText
          id="your-name"
          v-model="userDetails.name"
          label="What is your name"
          type="text"
          required
        />
      </b-row>
      <b-row class="my-3">
        <InputCheckbox
          v-model="userDetails.allergies"
          label="textLabel"
          :options="allergyOptions"
        />
      </b-row>
      <b-button
        type="submit"
      >
        Submit
      </b-button>
    </b-container>
  </b-form>
</template>

<script>
import lovApi from '@/services/api/lov';
import appManApi from '@/services/api/applicationManagerApi';
import InputText from '@/components/InputText.vue';
import InputCheckbox from '@/components/InputCheckbox.vue';

export default {
  name: 'AcfForm',
  components: {
    InputText,
    InputCheckbox,
  },
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      lovOptions: {
        default: null,
      },
      userDetails: {
        email: '',
        name: '',
        allergies: [],
      },
      sending: false,
      apiResponse: '',
    };
  },
  computed: {
    allergyOptions() {
      return this.lovOptions.allergyLov;
    },
  },
  mounted() {
    this.getLovData();
  },
  methods: {
    getLovData() {
      lovApi.getLovData()
        .then((response) => {
          this.lovOptions = response;
        });
    },
    sendData() {
      this.sending = true;
      const parsedUserDetails = JSON.parse(JSON.stringify(this.userDetails));
      appManApi.sendUserData(parsedUserDetails)
        .then((response) => {
          this.apiResponse = response;
        });
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
