<template>
  <div class="l-auth-container">
    <div class="l-auth">
      <v-form v-model="validLogin">
        <v-text-field label="Username"
                      v-model="credentials.username"
                      prepend-icon="account_box"
                      :rules="rules"
                      required
                      color="white"
                      >
        </v-text-field>

        <v-text-field label="Password"
                      v-model="credentials.password"
                      prepend-icon="lock"
                      :rules="rules"
                      :append-icon="loginPasswordVisible ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (loginPasswordVisible = !loginPasswordVisible)"
                      :type="loginPasswordVisible ? 'text' : 'password'"
                      color="white"
                      required>
        </v-text-field>

        <v-btn color="white" @click.native="signUpVisible = true">Create account</v-btn>

        <v-btn color="white" @click.native="submitAuthentication()">Login</v-btn>
      </v-form>
    </div>

    <div class="l-signup" v-if="signUpVisible">
      <v-form v-model="validSignUp">
                      <v-text-field label="Username"
                      v-model="newUser.username"
                      prepend-icon="account_box"
                      :rules="rules"
                      required
                      color="white">
        </v-text-field>

        <v-text-field label="Password"
                            prepend-icon="lock"
                            :rules="rules"
                            :append-icon="signUpPasswordVisible ? 'visibility' : 'visibility_off'"
                            :append-icon-cb="() => (signUpPasswordVisible = !signUpPasswordVisible)"
                            :type="signUpPasswordVisible ? 'text' : 'password'"
                            color="white"
                            required>
        </v-text-field>
        <v-btn block color="white" @click.native="submitSignUp()">Sign Up</v-btn>

      </v-form>
    </div>

    <v-snackbar timeout="6000"
                bottom="bottom"
                color="red lighten-1"
                v-model="snackbar">
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>

import Authentication from '@/components/pages/Authentication'
export default {
  data () {
    return {
      snackbar: false,
      validLogin: false,
      validSignUp: false,
      signUpVisible: false,
      loginPasswordVisible: false,
      signUpPasswordVisible: false,
      rules: [ (value) => !!value || 'This field is required' ],
      credentials: {
        username: '',
        password: ''
      },
      newUser: {
        username: '',
        password: ''
      },
      message: ''
    }
  },
  methods: {
    submitAuthentication () {
      Authentication.authenticate(this, this.credentials, '/')
    },

    submitSignUp () {
      Authentication.signup(this, this.newUser, '/')
    }
  }
}
</script>

<style lang="scss">
  @import "./../../../assets/styles";
  .l-auth {
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 272px;
    max-width: 320px;
    animation: bounceIn 1s forwards ease;

    label, input, .icon {
      color: rgba(0,0,0,.54) !important
    }

    .input-group_details {
      &:before {
        background-color: $border-color-input !important;
      }
    }
  }
  .l-signup {
    background-color: $background-color;
    padding: 15px;
    margin: 45px auto;
    min-width: 272px;
    max-width: 320px;
    animation: slideInFromLeft 1s forwards ease;
  }
</style>
