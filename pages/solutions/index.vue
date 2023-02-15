<template>
  <div class="solutions">
    <PageHeader title="My solutions" show-actions>
      <template #actions>
        <button class="btn btn-greenland" @click="$router.push('/solutions/create')">Create solution</button>
      </template>
    </PageHeader>
    <div class="container">
      <div class="solutions-inner white-panel">
         <div class="action-tabs">
          <button class="btn active">Deeplinks</button>
          <button class="btn">Widgets</button>
        </div>
        <DataTable :fields="table">
        <tbody>
          <tr v-for="item in deeplinks" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.updated_at }}</td>
            <td>{{ item.conversion }}</td>
            <td>{{ item.clicks }}</td>
            <td>
              <button class="btn btn-link" @click="handleCodeModal(item.url)">
                  Show code
                  <Icon name="arrow-down" />
              </button>
            </td>
          </tr>
        </tbody>
      </DataTable>

      <FormModal title="Deeplink code" :toggle="showCodeModal" @close="showCodeModal = false">
        <b-form-group>
          <FormField :value="codeToCopy" disabled></FormField>
        </b-form-group>
        <button class="btn btn-greenland" @click="handleLinkCopy">Copy code</button>
      </FormModal>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   async asyncData({ store }) {
    await Promise.all([
      store.dispatch('deeplinks/fetchDeeplinks'),
    ])
  },
  data() {
    return {
      table: ['Solution title', 'Modified date', 'Conversion','Clicks','Code preview'],
      showCodeModal: false,
      codeToCopy: ''
    }
  },
  computed: {
    ...mapGetters({
      deeplinks: 'deeplinks/deeplinks'
    })
  },
  methods: {  
    handleCodeModal(link) {
      this.showCodeModal = true
      this.codeToCopy = link
    },
    handleLinkCopy() {
      const link = this.codeToCopy
      //  link.select();
      //  link.setSelectionRange(0, 99999); // For mobile devices
       navigator.clipboard.writeText(link)

       document.getElementsByClassName('btn-greenland')[1].innerHTML = 'Copied!'
    }
  },
  mounted() {
    console.log(this.$auth);
  }
}
</script>

<style>

</style>