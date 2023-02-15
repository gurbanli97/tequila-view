<template>
  <div class="payouts">
    <PageHeader title="Billings" />
    <div class="container">
      <div class="payouts-inner white-panel">
        <DataTable :fields="fields">
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>
                <span>{{ item.operation_id }}</span>
              </td>
               <td>
                <span>{{ item.amount }}</span>
              </td>
                <td>
                <span>{{ item.method }}</span>
              </td>
                <td>
                <span :class="['status-field',`status-${item.status.toLowerCase()}`]">
                  <Icon :name="statusType(item.status)" />
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['Operation ID','Amount','Payout method','Status'],
      items: [
        {id: 1, operation_id:'487486785768576586',amount: '830.00',method: 'Payoneer',status: 'Pending'},
        {id: 2, operation_id:'487486785768576586',amount: '830.00',method: 'Payoneer',status: 'Cancelled'},
        {id: 3, operation_id:'487486785768576586',amount: '830.00',method: 'Payoneer',status: 'Done'}
      ]
    }
  },
  methods: {
    statusType(status) {
      switch (status) {
        case 'Pending':
          return 'clock'
        case 'Done':
          return 'tick-circle'
        case 'Cancelled':
          return 'close-circle-2'  
      }
    }
  }
}
</script>

<style>

</style>