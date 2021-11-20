<template>
  <div class="h-full">
    <rate v-show="this.popup == 'rate'" />
    <mobileMenu v-show="this.menu == 'true'" />
    <mobileHeader :currentProfile="currentProfile" />
    <desktopNav :currentProfile="currentProfile" />
    <Nuxt />
    <mobileNav @toggleMenuNav="this.toggleMenu" />
  </div>
</template>
<script>
export default {
  name: 'home',
  mounted() {
    if (!this.$auth.loggedIn) {
      this.$router.replace('/login')
    }
    this.getUser()
    this.getLanguages()
  },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    popup() {
      return this.$route.query.popup
    },
    menu() {
      return this.$route.query.menu
    },
    currentProfile() {
      return this.$store.getters['profile/getCurrentProfile']
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
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
