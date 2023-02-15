<template>
  <div class="login">
    <div class="login-inner">
      <div class="login-box"><img src="/images/pickvisa-logo.svg" alt="Pickvisa-logo"><img src="/images/envelope.svg"
          alt="Envelope">
        <h3>Link sent</h3>
        <p>The reset link sent succesfully. Please check <strong>ulvinomerov1@gmail.com</strong> email address</p>
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
<style lang="scss">
  .login-box {
    padding-bottom: 8px;
    img:nth-child(2) {
      width: 144px;
      height: 129px;
      margin-top: 80px;
      margin-bottom: 48px;
    }

    h3 {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #2E3A59;
      margin-bottom: 24px;

      strong {
        font-weight: 500;
      }
    }
  }
</style>