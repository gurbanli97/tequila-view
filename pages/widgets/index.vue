<template>
  <div class="widgets">
    <PageHeader title="Widgets" show-actions>
      <template #actions>
        <button class="btn btn-greenland" @click="$router.push('/widgets/create')">Create widget</button>
      </template>
    </PageHeader>
    <div class="container">
      <div class="widgets-inner white-panel">
        <DataTable :fields="fields">
          <tbody>
            <tr v-for="item in widgets" :key="item.id">
              <td>
                <span>{{ item.title }}</span>
              </td>
               <td>
                <span>{{ item.type }}</span>
              </td>
               <td>
                <span>{{ item.type }}</span>
              </td>
              <td>
                 <div class="actions">
                  <button>
                    <icon name="linkex" />
                  </button>
                  <button>
                    <icon name="eye" />
                  </button>
                  <button>
                    <icon name="edit-2" />
                  </button>
                      <button>
                    <icon name="trash" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'Widgets',
   async asyncData({ store }) {
    await Promise.all([
      store.dispatch('widgets/fetchWidgets'),
    ])
  },
  data() {
    return {
      fields: ['Widget name','Type','Solution name', ''],
    }
  },
  computed: {
    ...mapGetters({
      widgets: 'widgets/widgets'
    })
  }
}
</script>

<style>

</style>