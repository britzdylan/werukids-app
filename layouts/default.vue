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
      return
    }

    this.getUser()

    this.getLanguages()
  },
  methods: {
    async getUser() {
      try {
        const res = await this.$store.dispatch('profile/getUser')
        if (res instanceof Error) throw new Error(res)
        if (this.$store.state.profile.currentProfile == null) {
          this.$store.dispatch('profile/switchProfile', res.user.profiles[0])
        }
      } catch (error) {
        console.log(error)
        window.alertify.error(error.response.data)
        this.loading = false
      }
    },
    async getLanguages() {
      try {
        let res = await this.$store.dispatch('content/fetchLang')
        if (res instanceof Error) throw new Error(res)
      } catch (error) {
        console.log(error)
        // window.alertify.error(error.response.data)
      }
    },
  },
}
</script>
<style lang=""></style>
