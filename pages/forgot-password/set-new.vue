<template>
   <div class="login">
    <div class="login-inner">
      <div class="login-box">
        <img src="/images/pickvisa-logo.svg" alt="Pickvisa-logo">
        <h1>Set new password</h1>
        <p>Enter new password and set it</p>
        <b-form>
          <b-form-group class="password-input mb-2">
            <span v-show="form.newPassword" @mousedown="showPassword = !showPassword">
              <Icon :name="showPassword ? 'eye-slash' : 'eye'" />
            </span>
            <form-field placeholder="Enter" label="New password" :type="passwordInputType" v-model="form.newPassword" />
          </b-form-group>
          <b-form-group class="password-input">
            <span v-show="form.repeatedNewPassword" @mousedown="showPassword = !showPassword">
              <Icon :name="showPassword ? 'eye-slash' : 'eye'" />
            </span>
            <form-field placeholder="Enter" label="Repeat new password" :type="passwordInputType" v-model="form.repeatedNewPassword" />
          </b-form-group>
          <button class="btn btn-greenland">Set password</button>
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
          newPassword: '',
          repeatedNewPassword: ''
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