<template>
  <div class="login">
    <div class="login-inner">
      <div class="login-box">
        <img src="/images/pickvisa-logo.svg" alt="Pickvisa-logo">
        <h1>Login</h1>
        <b-form @submit.prevent="handleLogin">
          <b-form-group>
            <form-field placeholder="Enter" label="Email" type="email" v-model="form.email" :is-invalid="$v.form.email.$error">
              <b-form-invalid-feedback v-if="!$v.form.email.required">
                  Email input cant be empty
              </b-form-invalid-feedback>
               <b-form-invalid-feedback v-if="!$v.form.email.email">
                  Please enter correct email address
              </b-form-invalid-feedback>
            </form-field>
          </b-form-group>
          <b-form-group class="password-input">
            <span v-show="form.password" @mousedown="showPassword = !showPassword">
              <Icon :name="showPassword ? 'eye-slash' : 'eye'" />
            </span>
            <form-field placeholder="Enter" label="Password" :type="passwordInputType" v-model="form.password" :is-invalid="$v.form.password.$error">
               <b-form-invalid-feedback v-if="!$v.form.password.required">
                  Password input cant be empty
              </b-form-invalid-feedback>
            </form-field>
          </b-form-group>
          <!-- <b-form-checkbox>
            Remember me
          </b-form-checkbox> -->
          <button class="btn btn-greenland">Log in</button>
        </b-form>
        <div class="register">
          <span>Don’t you have an account?</span>
          <button class="btn" type="submit" @click="$router.push('/registration')">Register</button>
        </div>
        <NuxtLink to="/forgot-password">Forgot password?</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { required,email } from 'vuelidate/lib/validators'
  export default {
    layout: 'empty',
    data() {
      return {
        showPassword: false,
        form: {
          email: '',
          password: ''
        }
      }
    },
      validations: {
      form: {
        email: { required,email },
        password: { required }
      }
    },
    computed: {
      passwordInputType() {
        return this.showPassword ? 'text' : 'password'
      }
    },
    methods: {
      async handleLogin(){
        this.$v.form.$touch()

        if (this.$v.$invalid) return

        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password,
            },
          })
        } catch (error) {
          console.log(error);
        }
      }
    }
}
</script>
