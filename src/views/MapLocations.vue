<template>
  <b-container fluid>
    <h1>Pick a location</h1>
    <b-form-row
      v-if="userData.userPostcode"
      class="my-3"
      fluid
    >
      <p>
        Submitted postcode: <strong>{{ userData.userPostcode }}</strong>
      </p>
    </b-form-row>

    <gmaps-map
      v-if="locations"
      class="row my-3"
      :options="mapOptions"
    >
      <gmaps-marker
        v-for="(marker, markerKey) in locations"
        :key="markerKey"
        :options="marker.options"
        :title="marker.unit_name"
      />
    </gmaps-map>
    <b-form-row
      v-else
      class="my-3"
    >
      <p>
        No location data, please
        <router-link :to="{name: 'AddressLookup'}">
          search for your location.
        </router-link>
      </p>
    </b-form-row>
    <b-container
      class="my-3"
    >
      <b-card-group deck>
        <b-card
          v-for="(location, locationKey) in locations"
          :key="locationKey"
          :title="location.unit_name"
        >
          <b-card-text>
            {{ location.l5_unit_name }}
          </b-card-text>
          <b-card-footer>
            <router-link
              :to="{name: 'UserEOI', params: {locationId: location.unit_id}}"
            >
              Apply to location
            </router-link>
          </b-card-footer>
        </b-card>
      </b-card-group>
    </b-container>
  </b-container>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps';

export default {
  name: 'MapLocations',
  components: { gmapsMap, gmapsMarker },
  props: {
    locations: {
      type: Array,
      default: null,
    },
    userData: {
      type: Object,
      default() {
        return { };
      },
    },
  },
  data() {
    return {
      mapOptions: {
        center: this.userData.userLatLng,
        mapTypeControl: false,
        streetViewControl: false,
      },
    };
  },
};
</script>

<style>
.gmaps-map {
  height: 500px !important;
}
</style>
