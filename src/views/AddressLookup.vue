<template>
  <b-container>
    <InputAddress />
  </b-container>
</template>

<script>
// @ is an alias to /src
import InputAddress from '@/components/InputAddress.vue';

export default {
  name: 'Home',
  components: {
    InputAddress,
  },
};
</script>
