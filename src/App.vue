<template>
  <b-container>
    <b-nav pills>
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
        :to="{name: 'Locations'}"
      >
        Locations
      </b-nav-item>
      <b-nav-item
        exact
        exact-active-class="active"
        :to="{name: 'CadetEOI'}"
      >
        Cadet EOI
      </b-nav-item>
    </b-nav>
    <router-view />
  </b-container>
</template>

<style lang="scss">


</style>
