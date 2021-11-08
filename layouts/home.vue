<template>
  <div class="h-full">
    <mobileMenu @closeMenu="this.toggleMenu" :showMenu="this.showMenu" />
    <mobileHeader />
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
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<style lang=""></style>
