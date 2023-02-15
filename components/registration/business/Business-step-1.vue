<template>
  <div class="login">
    <div class="login-inner">
      <div class="login-box">
        <div class="d-flex align-items-center">
          <button class="btn-back" @click="$nuxt.$emit('step-back',currentStep)">
            <Icon name="arrow-left" />
            <span>Back</span>
          </button>
          <img src="/images/pickvisa-logo.svg" alt="Pickvisa-logo">
        </div>
        <h1>Registration</h1>
        <div class="steps">
            <h2>Company details</h2>
              <div>
              <span class="active"></span>
              <span class="active"></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <b-form>
            <form-field placeholder="Enter" label="Company name" type="text"  v-model="form.company_name"/>
            <form-field placeholder="Enter" label="Company email" type="email" v-model="form.company_email"/>
            <form-field placeholder="Enter" label="Website (optional)" type="text" v-model="form.website"/>
             <b-form-group label="Business type">
              <v-select :options="companyTypeOptions" :reduce="(data) => data.value" placeholder="Choose type" v-model="form.type">
              </v-select>
             </b-form-group>
             <b-form-group label="Company size">
              <v-select :options="companySizeOptions" :reduce="(data) => data.value" placeholder="Choose size" v-model="form.size">
              </v-select>
             </b-form-group>
        </b-form>
        <button class="btn btn-greenland" @click="nextStep">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    layout: 'empty',
    data() {
      return {
        currentStep: {
          type: 'business',
          step: 1
        },
        form: {
          company_name: '',
          company_email: '',
          website: '',
          type: '',
          size: ''
        }
      }
    },
    computed: {
      ...mapGetters({
        companyTypeOptions: 'register/companyTypeOptions',
        companySizeOptions: 'register/companySizeOptions'
      })
    },
    methods: {
      async fetchCompanyTypes(){
        await this.$store.dispatch('register/fetchCompanyTypes')  
      },
      nextStep() {
         if(!this.form.company_name || !this.form.company_email || !this.form.website){
          this.$toast.error('Fill in all required fields')
          return 
         }
          
         this.$nuxt.$emit('next-step',this.currentStep,this.form)
      }
    },
    mounted() {
      this.fetchCompanyTypes()
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    position: relative;
    h1 {
    margin-bottom: 16px;
    }
    .btn-back {
      display: flex;
      align-items: center;
      position: absolute;
      top: 30px;
      left: 92px;

      span {
        margin-left: 7px;
        font-size: 14px;
        line-height: 24px;
        color: #2E3A59;
      }
    }
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
</style>
