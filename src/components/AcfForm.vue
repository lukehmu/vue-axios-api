<template>
  <div>
    <b-select
      v-model="allergyOptionSelected"
      class="mb-3"
      :options="allergyOptions"
    />
  </div>
</template>

<script>
import lovApi from '../assets/services/api/lov';

export default {
  name: 'AcfForm',
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      allergyOptionSelected: {
        default: null,
      },
      lovOptions: {
        default: null,
      },
    };
  },
  computed: {
    allergyOptions() {
      return this.lovOptions.allergyLov;
    },
  },
  mounted() {
    this.getLowData();
  },
  methods: {
    getLowData() {
      lovApi.getLovData()
        .then((response) => {
          this.lovOptions = response;
        });
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
