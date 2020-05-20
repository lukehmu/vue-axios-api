// This method is used in every form input, to emit the value back to the parent component

export default {
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
