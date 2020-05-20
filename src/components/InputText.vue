<template>
  <div>
    <label :for="id">{{ label }}</label>
    <b-form-input
      :id="id"
      v-model="InputTextValue"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      @input="updateValue(InputTextValue)"
    />
    <b-form-invalid-feedback>
      Error messaging?
    </b-form-invalid-feedback>
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
    required: {
      type: Boolean,
      default: false,
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
