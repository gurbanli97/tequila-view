<template>
  <div class="full-widget" :style="{'background': widgetData.bgColor}">
    <h1 :style="{'color': widgetData.textColor}">Apply for any visa in two clicks!</h1>
    <b-form>
       <b-form-group label="Citizen of">
            <v-select :options="countries" :reduce="(data) => data.label" placeholder="Choose country" v-model="form.citizen_of">
            </v-select>
        </b-form-group>
        <b-form-group label="Planning to visit">
            <v-select :options="countries" :reduce="(data) => data.label" placeholder="Choose country" v-model="form.travel_to">
            </v-select>
        </b-form-group>
        <button @click="searchQuery">Search</button>
    </b-form>
  </div>
</template>

<script>
import countries from '../../countries.json'
export default {
  props: ['widgetData'],
  data() {
    return {
      countries: countries,
      form: {
        citizen_of: '',
        travel_to: ''
      }
    }
  },
  methods: {
    searchQuery() {
      const url = 'https://pickvisa.com'
      window.open(this.$applyQueryToUrl(url,this.form))
    }
  },
  async asyncData({ params, store}) {
    await store.dispatch('widgets/fetchWidgetByTrackId', params.id)
  },
  mounted() {
    console.log(this.widgetData);
  }
}
</script>

<style lang="scss" scoped>
  .full-widget {
    border-radius: 10px;
    padding: 40px 32px 56px 32px;
    h1 {
      margin-bottom: 42px;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
    }

    form {
      button {
        color: #fff;
        margin-top: 56px;
        width: 326px;
        height: 48px;
        background: #189CA9;
        border-radius: 8px;
      }
    }
  }
</style>>
