<template>
  <b-container fluid>
    <b-nav pills>
      <b-nav-item disabled>
        Debug toolbar
      </b-nav-item>
      <b-nav-item
        exact
        exact-active-class="active"
        :to="{name: 'AddressLookup'}"
      >
        Address Lookup
      </b-nav-item>
      <b-nav-item
        exact
        exact-active-class="active"
        :to="{name: 'MapLocations'}"
      >
        Locations
      </b-nav-item>
      <b-nav-item
        exact
        exact-active-class="active"
        :to="{name: 'UserEOI'}"
      >
        User EOI
      </b-nav-item>
      <b-nav-item
        exact
        exact-active-class="active"
        :to="{name: 'UserApplication'}"
      >
        User Application
      </b-nav-item>
    </b-nav>
    <router-view />
  </b-container>
</template>

<style lang="scss">


</style>
