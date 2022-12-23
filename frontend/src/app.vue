<script>
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {...mapState(['user'])}
}
</script>

<template lang="pug">
  #app
    #nav
      router-link(to="/") Home |&nbsp
      router-link(to="/about") About |&nbsp
      router-link(to="/profile" v-if="user") Profile
      router-link(to="/login" v-else) Login
    router-view
</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';

// This is the style to be applied to the whole app:
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
