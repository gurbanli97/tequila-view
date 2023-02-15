export const state = () => ({
  companyTypes: [],
  companySize: [
    { 
      value: 1,
      label: '1-10'
    },
    { 
      value: 2,
      label: '11-50'
    },
    { 
      value: 3,
      label: '51-200'
    },
    { 
      value: 4,
      label: '200+'
    }
  ]
})

export const getters = {
  companyTypes: (s) => s.companyTypes,
  companyTypeOptions: (s) => s.companyTypes?.map((obj) => ({ label: obj.name, value: obj.id })),
  companySizeOptions: (s) => s.companySize,
}

export const mutations = {
  SET_COMPANY_TYPES(state, { types }) {
    state.companyTypes = types.result
  },
}

export const actions = {
  async fetchCompanyTypes({ commit }) {
    const { data: types } = await this.$axios.get('/api/v1/users/company_types/')
    commit('SET_COMPANY_TYPES', { types })
  },
  async createAcoount({ commit },form,type) {
    try {
      const { data: result } = 
      type === 'business' ? 
      await this.$axios.post(`/api/v1/users/business_signup/`,form) :
      await this.$axios.post(`/api/v1/users/personal_signup/`,form)
      this.$toast.success('registered')
    } catch (err) {
      this.$toast.error(err)
    }
  },
}
