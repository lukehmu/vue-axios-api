<template>
  <b-container fluid>
    <b-container v-if="userData">
      <p>
        Submitted postcode: <strong>{{ userData.userPostcode }}</strong>
      </p>
    </b-container>

    <gmaps-map
      v-if="locations"
      :options="mapOptions"
    >
      <gmaps-marker
        v-for="(marker, markerKey) in locations"
        :key="markerKey"
        :options="marker.options"
        :title="marker.unit_name"
      />
    </gmaps-map>
    <b-container v-else>
      <p>
        No location data, please
        <router-link :to="{name: 'AddressLookup'}">
          search for your location.
        </router-link>
      </p>
    </b-container>
  </b-container>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps';

export default {
  name: 'Locations',
  components: { gmapsMap, gmapsMarker },
  props: {
    locations: {
      type: Object,
      default: null,
    },
    userData: {
      type: Object,
      default: null,
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
  height: 500px;
}
</style>
