<template>
  <div class="h-full">
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware: ['auth'],
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$router.replace('/login')
    }
  },
}
</script>
<style lang=""></style>
