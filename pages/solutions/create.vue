<template>
  <div class="solutions create">
    <PageHeader title="New solution" show-actions show-back-button>
      <template #actions>
        <button class="btn preview">Preview</button>
        <button class="btn btn-greenland" @click="handleDeeplinkCreate">Create</button>
      </template>
    </PageHeader>
    <div class="container">
      <div class="solutions-create_inner white-panel">
        <div class="row">
          <div class="col-12">
            <b-form-group label="Solution name">
              <FormField placeholder="New name will be here" v-model="createForm.title"/>
            </b-form-group>
          </div>
        </div>
        <div class="row flex-column">
          <h2 class="d-inline-flex">Filter and select services</h2>
          <div class="col-6 pt-4 d-flex align-items-center justify-content-between flex-wrap">
            <b-form-group label="Citizen of">
              <v-select :options="countries" :reduce="(data) => data.label" placeholder="Choose country" v-model="generateUrlForm.citizen_of" @input="fetchServices">
              </v-select>
            </b-form-group>
            <b-form-group label="Resident of">
              <v-select :options="countries" :reduce="(data) => data.label" placeholder="Choose country" v-model="generateUrlForm.resident_of" @input="fetchServices">
              </v-select>
            </b-form-group>
            <b-form-group label="Travel to">
              <v-select :options="countries" :reduce="(data) => data.label" placeholder="Choose country" v-model="generateUrlForm.travel_to" @input="fetchServices">
              </v-select>
            </b-form-group>
            <b-form-group label="Services">
              <v-select :options="serviceOptions" v-model="service" placeholder="Add services" @input="addService">
              </v-select>
              <div class="selected-services">
                  <button v-for="service in selectedServices" :key="service.value" @click="popService(service)">
                    <span >{{service.label}}</span>
                    <Icon name="close-circle-2" />
                  </button>
              </div>
            </b-form-group>
          </div>
        </div>
        <button :disabled="!serviceOptions.length" :class="['btn generate-link',{'active': serviceOptions.length }]" @click="generateUrl">{{createForm.url ? 'Generate again' : 'Generate link'}}</button>
        <div class="copy-link" v-show="createForm.url">
          <span>{{createForm.url}}</span>
          <button class="btn" @click="handleLinkCopy"  id="tooltip-target-1">Copy link</button>
           <b-tooltip  target="tooltip-target-1" triggers="click">
            Link copied
          </b-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapGetters } from 'vuex'
import countries from '../../countries.json'
export default {
  data(){
    return {
      countries: countries,
      selectedServices: [],
      service: '',
      generateUrlForm: {
        citizen_of: '',
        resident_of: '',
        travel_to: '',
      },
      createForm: {
        title: '',
        track_id: '',
        url: '',
        user: 3
      },
      copied: false,
    }
  },
  computed: {
    ...mapGetters({
      serviceOptions: 'deeplinks/serviceOptions'
    })
  },
  methods: {
    async fetchServices() {
      if(!this.generateUrlForm.citizen_of || !this.generateUrlForm.resident_of || !this.generateUrlForm.travel_to)
        return
      await this.$store.dispatch('deeplinks/fetchServices', this.generateUrlForm)  
    },
    addService(val) {
      this.service = ''
      !this.selectedServices.includes(val) ? this.selectedServices.push(val) : false
    },
    popService(service){
      const index = this.selectedServices.indexOf(service)
      this.selectedServices.splice(index,1)
    },
    generateUrl() {
      this.createForm.track_id = uuidv4()
      const url = 'https://pickvisa.com'
      this.createForm.url = this.$applyQueryToUrl(url,this.generateUrlForm)
    },
    handleLinkCopy(){
      navigator.clipboard.writeText(this.url)
      this.copied = true
    },
    handleDeeplinkCreate() {
      this.$store.dispatch('deeplinks/createDeeplink',this.createForm)
    }
  },
}
</script>

<style>

</style>