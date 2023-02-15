export const state = () => ({
  deeplinks: [],
  services: [],
})

export const getters = {
  deeplinks: (s) => s.deeplinks,
  services: (s) => s.services,
  serviceOptions: (s) => s.services?.map((obj) => ({ label: obj.title, value: obj.id })),
}

export const mutations = {
  SET_DEEPLINKS(state, { deeplinks }) {
    state.deeplinks = deeplinks.result
  },
  SET_SERVICES(state, { services }) {
    state.services = services.visa_types
  },
}

export const actions = {
  async fetchDeeplinks({ commit }) {
    const { data: deeplinks } = await this.$axios.get('/api/v1/deeplinks/')
    commit('SET_DEEPLINKS', { deeplinks })
  },
  async fetchServices({ commit },{citizen_of,resident_of,travel_to}) {
      const { data: services } = await this.$axios.get(`/api2/v1/combinations/filter?travel_to=${travel_to}&citizen_of=${citizen_of}&resident_of=${resident_of}`)
      commit('SET_SERVICES', { services })
      this.$toast.success('asd')
  },

  async createDeeplink({ dispatch },form) {
    await this.$axios.post('/api/v1/deeplinks/',form)
    dispatch('fetchDeeplinks')
    this.$toast.success('asd')
  },
}
