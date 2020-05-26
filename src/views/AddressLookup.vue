<template>
  <b-container>
    <AddressInput />
  </b-container>
</template>

<script>
// @ is an alias to /src
import AddressInput from '@/components/AddressInput.vue';

export default {
  name: 'Home',
  components: {
    AddressInput,
  },
};
</script>
