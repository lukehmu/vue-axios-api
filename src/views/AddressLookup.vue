<template>
  <b-container fluid>
    <h1>Enter you postcode</h1>
    <InputAddress />
  </b-container>
</template>

<script>
// @ is an alias to /src
import InputAddress from '@/components/InputAddress.vue';

export default {
  name: 'AdressLookup',
  components: {
    InputAddress,
  },
};
</script>
