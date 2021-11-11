<template>
  <div class="h-full">
    <rate v-show="this.popup == 'rate'" />
    <mobileMenu v-show="this.menu == 'true'" />
    <mobileHeader />
    <desktopNav />
    <Nuxt />
    <mobileNav @toggleMenuNav="this.toggleMenu" />
  </div>
</template>
<script>
export default {
  auth: true,
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
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<style lang=""></style>
