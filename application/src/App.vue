<template>
  <div id="app">
    <v-container>
      <Authentication/>
      <router-view/>
    </v-container>
  </div>
</template>

<script>

import Authentication from './components/pages/Authentication/Authentication'

export default {
  name: 'app',
  components: {
    Authentication
  }
}
</script>

<style lang="scss">
@import './assets/styles';
body{
  background: url("./assets/images/bg.jpeg") no-repeat center center fixed;
  background-size: cover;

  &:after{
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $background-tint;
    opacity: .3;
    z-index: -1;
  }
}
</style>
