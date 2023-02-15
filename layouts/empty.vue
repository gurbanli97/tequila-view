<template>
  <div class="root">
    <section class="page" :class="{ 'is-login': $route.path === '/login' || $route.path === '/forgot-password' || $route.path === '/forgot-password/link-sent' || $route.path === '/forgot-password/set-new' || $route.path === '/registration' }">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  name: 'EmpyLayout',
}
</script>
