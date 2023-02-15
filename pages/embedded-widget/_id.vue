<template>
  <keep-alive>
    <component :is="widgetType" :widgetData="widgetData"></component>
  </keep-alive>
</template>

<script>
import { mapGetters } from 'vuex'
import FullWidget from '../../components/widgets/FullWidget.vue'
export default {
  layout: 'widget',
  components: { FullWidget },
  data() {
    return {
      widgetData: {
        type: '',
        bgColor: '',
        textColor: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      widget: 'widgets/widgetByTrackId'
    }),
    widgetType(){
      if(this.widgetData?.type === 'full'){
        return 'full-widget'
      }
    }
  },
  mounted() {
    this.widgetData.type = this.$route.query.type
    this.widgetData.bgColor = this.$route.query.bg_color
    this.widgetData.textColor = this.$route.query.text_color
  }
}

</script>

<style>

</style>