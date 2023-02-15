export const state = () => ({
  widgets: [],
  widgetByTrackId: {}
})

export const getters = {
  widgets: (s) => s.widgets,
  widgetByTrackId: (s) => s.widgetByTrackId
}

export const mutations = {
  SET_WIDGETS(state, { widgets }) {
    state.widgets = widgets.result
  },
  SET_WIDGET_BY_TRACK_ID(state, { widget }) {
    state.widgetByTrackId = widget.result
  },
}

export const actions = {
  async fetchWidgets({ commit }) {
    const { data: widgets } = await this.$axios.get('/api/v1/widgets/')
    commit('SET_WIDGETS', { widgets })
  },
  async fetchWidgetByTrackId({ commit, dispatch }, track_id) {
    const { data: widget } = await this.$axios.get(`/api/v1/widgets/${track_id}/`)
    commit('SET_WIDGET_BY_TRACK_ID', { widget })
  },
  async createWidget({ dispatch },form) {
    try {
      const response = await this.$axios.post('/api/v1/widgets/',form)
      this.$toast.success('Widget created succesfully')
    }catch(e) {
      this.$toast.error(e)
    }
  
  },
}
