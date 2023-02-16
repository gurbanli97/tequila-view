<template>
  <div class="root">
    <Sidebar />
    <section class="page">
      <nuxt />
    </section>
  </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar.vue'

export default {
  name: 'DefaultLayout',
  components: { Sidebar }
}
</script>
