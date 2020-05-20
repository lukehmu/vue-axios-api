<template>
  <div>
    <b-form-group :label="label">
      <b-form-checkbox-group
        :id="id"
        v-model="optionSelected"
        :options="options"
        @input="updateValue(optionSelected)"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      optionSelected: [],
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style>

</style>
