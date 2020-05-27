<template>
  <b-container fluid>
    <h1>Enter application details</h1>
    <template v-if="locationId">
      <b-form-row class="my-3">
        <p>
          Applying to location: <strong>{{ locationId }}</strong>
        </p>
      </b-form-row>

      <b-form @submit.prevent="sendData">
        <b-row
          fluid
          role="tab"
        >
          <b-button
            v-b-toggle.accordion-personal-details
            block
            class="my-3"
          >
            Personal details
          </b-button>
          <b-collapse
            id="accordion-personal-details"
            visible
            accordion="my-accordion"
          >
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
          </b-collapse>
        </b-row>
        <b-row
          fluid
          role="tab"
        >
          <b-button
            v-b-toggle.accordion-allergies
            block
            class="my-3"
          >
            Allergy details
          </b-button>
          <b-collapse
            id="accordion-allergies"
            accordion="my-accordion"
          >
            <b-form-row class="my-3">
              <InputCheckbox
                v-model="userDetails.allergies"
                label="What are your allergies?"
                :options="allergyOptions"
              />
            </b-form-row>
          </b-collapse>
        </b-row>
        <b-form-row class="my-3">
          <b-button
            type="submit"
          >
            Submit
          </b-button>
        </b-form-row>
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
      v-if="apiResponse"
      class="my-3"
    >
      <p>
        API Response: <strong>{{ apiResponse.status }}</strong>
      </p>
    </b-form-row>
  </b-container>
</template>

<script>
import lovApi from '@/services/api/lov';
import appManApi from '@/services/api/applicationManagerApi';
import InputText from '@/components/InputText.vue';
import InputCheckbox from '@/components/InputCheckbox.vue';

export default {
  name: 'UserApplication',
  components: {
    InputText,
    InputCheckbox,
  },
  props: {
    locationId: {
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
