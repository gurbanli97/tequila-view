<template>
   <div class="login">
    <div class="login-inner">
      <div class="login-box">
        <img src="/images/pickvisa-logo.svg" alt="Pickvisa-logo">
        <h1>Forgot password</h1>
        <p>Enter your email below. We will send you the link to reset your password</p>
        <b-form>
          <b-form-group>
            <form-field placeholder="Enter" label="Email" type="email" />
          </b-form-group>
          <button class="btn btn-link">Resend</button>
          <button class="btn btn-greenland">Send link</button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
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
    computed: {
      passwordInputType() {
        return this.showPassword ? 'text' : 'password'
      }
    },

  }
</script>

<style>

</style>