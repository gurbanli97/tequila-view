<template>
  <div class="login">
    <div class="login-inner">
      <div class="login-box">
          <img src="/images/pickvisa-logo.svg" alt="Pickvisa-logo">
          <h1>Registration</h1>
          <div class="steps">
            <h2>Type of account</h2>
              <div>
              <span class="active"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <ul class="registration-type">
          <li>
             <label for="business-account">
              <div :class="{'active': registrationType === 'business'}">
                  <input type="radio" id="business-account" name="registration-type" v-model="registrationType" value="business">
                  <span>Business account</span>
              </div>
            </label>
          </li>
          <li>
              <label for="personal-account">
                <div :class="{'active': registrationType === 'personal'}">
                    <input type="radio" id="personal-account" name="registration-type" v-model="registrationType" :htmlAttributes="{ value: 'FeMale' }" value="personal">
                    <span>Personal account</span>
                </div>
              </label>
          </li>
        </ul>
        <button class="btn btn-greenland" @click="chooseStepType">Continue</button>
        <div class="register">
          <span>Already have an account?</span>
          <button class="btn" @click="$router.push('/login')">Log in</button>
        </div>
        <div class="terms d-flex flex-column align-items-center">
          <span>By registering, you accept our</span>
          <button class="btn btn-link">Terms and Conditions</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'empty',
    data() {
      return {
        registrationType: '',
      }
    },
    methods: {
      chooseStepType() {
        if(!this.registrationType){
          this.$toast.error('Choose account type first')
          return
        }
        this.$nuxt.$emit('start-register',this.registrationType)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box h1 {
    margin-bottom: 16px;
  }
  .btn-greenland {
    min-width: 344px;
    border-radius: 8px;
    margin-top: 48px;
    margin-bottom: 40px;
  }
  .registration-type {
  label {
    margin: 0;
  }
  li {
    &:first-child div {
        margin-bottom: 24px;
    }
    div {
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 344px;
      margin: auto;
      min-height: 48px;
      background: #F7F9FC;
      border: 1px solid #E4E9F2;
      border-radius: 8px;
      padding: 14px 14px 14px 16px;
      cursor: pointer;

      &.active {
        background: #F2F6FF;
        border: 1px solid #3366FF;
      }

      input {
        margin-right: 16px;
        transform: scale(1.54);
      }

      span {
        font-size: 14px;
        line-height: 20px;
        color: #2E3A59;
      }
    }
  }
  }

  .steps {
    margin-bottom: 32px;
    h2 {
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      color: #2E3A59;
    }
    span {
      display: inline-flex;
      width: 40px;
      height: 6px;
      background: #EDF1F7;
      border-radius: 3px;

      &.active {
        background: #189CA9;
      }
    }
  }
</style>
