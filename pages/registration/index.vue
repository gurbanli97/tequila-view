<template>
  <section>
    <keep-alive>
      <component :is="currentStep"></component>
    </keep-alive>
  </section>
</template>

<script>
  import BusinessStep1 from '@/components/registration/business/Business-step-1.vue'
  import BusinessStep2 from '@/components/registration/business/Business-step-2.vue'
  import BusinessStep3 from '@/components/registration/business/Business-step-3.vue'
  import PersonalStep1 from '@/components/registration/personal/Personal-step-1.vue'
  import PersonalStep2 from '@/components/registration/personal/Personal-step-2.vue'
  import Register from '@/components/registration/Register.vue'
  export default {
  components: { Register, BusinessStep1, BusinessStep2, BusinessStep3, PersonalStep1, PersonalStep2 },
    layout: 'empty',
    data() {
      return {
        currentStep: 'Register',
        steps: {
          personal: {
            1: 'PersonalStep1',
            2: 'PersonalStep2',
          },
          business: {
            1: 'BusinessStep1',
            2: 'BusinessStep2',
            3: 'BusinessStep3',
          }
        },
        registerForm: {}
      }
    },
    methods: {
      startRegister(type){
        if(type)
          this.currentStep = this.steps[type][1]
      },
      endRegister(type){
        this.$store.dispatch('register/createAcoount',this.registerForm,type)
      },
      nextStep({type, step},form){
        if(type && step && form)
        for (const [key, value] of Object.entries(form)) {
          if(!this.registerForm[key] || this.registerForm[key] !== form[key]){
            this.registerForm[key] = value
          }
        }
        if(type === 'business' && step === 3){
          this.endRegister('business')
        }else if (type === 'personal' && step === 2){
          this.endRegister('personal')
        }
        else {
          this.currentStep = this.steps[type][step+1]
        }
      },

      stepBack({type, step}){
        if(type && step){ 
          if(step === 1) {
            this.currentStep = 'Register'
          }else {
            this.currentStep = this.steps[type][step-1]
          }
        }
      }
    },
    mounted() {
      this.$nuxt.$on('next-step', this.nextStep)
      this.$nuxt.$on('step-back', this.stepBack)
      this.$nuxt.$on('start-register', this.startRegister)
    },
    beforeDestroy() {
      this.$nuxt.$off('next-step', this.nextStep)
      this.$nuxt.$off('step-back', this.stepBack)
      this.$nuxt.$off('start-register', this.startRegister)
    },
  }
</script>
