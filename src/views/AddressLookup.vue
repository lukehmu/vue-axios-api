<template>
  <b-container fluid>
    <h1>Enter your postcode</h1>
    <InputAddress />
    <AddressAutoCompelte />
  </b-container>
</template>

<script>
// @ is an alias to /src
import InputAddress from '@/components/InputAddress.vue';
import AddressAutoCompelte from '@/components/AddressAutoComplete.vue';


export default {
  name: 'AdressLookup',
  components: {
    InputAddress,
    AddressAutoCompelte,
  },
};
</script>
