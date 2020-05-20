<template>
  <div>
    <label :for="id">{{ label }}</label>
    <b-form-input
      :id="id"
      v-model="InputTextValue"
      :placeholder="placeholder"
      :type="type"
      @input="updateValue(InputTextValue)"
    />
  </div>
</template>

<script>
import childComponentFormDataMixin from '@/mixins/childComponentFormDataMixin';

export default {
  name: 'InputText',
  mixins: [childComponentFormDataMixin],
  props: {
    id: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      InputTextValue: '',
    };
  },
  methods: {

  },
};
</script>

<style>

</style>
