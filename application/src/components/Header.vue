<template>
  <header class="l-header-container">
    <v-layout row wrap>
      <v-flex xs12 md5>
        <v-text-field v-model="search"
                      label="Search"
                      append-icon="search"
                      color="white lighten-1 white--text">
        </v-text-field>
      </v-flex>

      <v-flex xs12 offset-md1 md1>
        <v-btn block color="white lighten-1">Clients</v-btn>
      </v-flex>

      <v-flex xs12 offset-md1 md2>
        <v-select label="Status"
                  color=""
                  v-model="status"
                  :items="statusItems"
                  single-line>
        </v-select>
      </v-flex>

      <v-flex xs12 offset-md1 md1>
        <v-btn block color="red lighten-1 white--text" @click.native="submitSignout()">Sign out</v-btn>
      </v-flex>
    </v-layout>
  </header>
</template>

<script>
/* eslint-disable */
import Authentication from '@/components/pages/Authentication'
export default {
  data () {
    return {
      search: '',
      status: '',
      statusItems: [
        'All', 'Approved', 'Denied', 'Waiting', 'Editing'
      ]
    }
  },
  methods: {
    submitSignout () {
      Authentication.signout(this, '/login')
    }
  }
}
</script>

<style lang="scss">
  @import "./../assets/styles";

  .l-header-container {
    background-color: $background-color;
    margin: 0 auto;
    padding: 0 15px;
    min-width: 272px;


    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }

    .btn {
      margin-top: 15px;
    }
  }
</style>
