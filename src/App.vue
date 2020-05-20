<template>
  <div id="app">
    <AcfForm />
  </div>
</template>

<script>
import AcfForm from './components/AcfForm.vue';

export default {
  name: 'App',
  components: {
    AcfForm,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
