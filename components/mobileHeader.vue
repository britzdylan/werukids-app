<template>
  <header v-if="this.currentProfile != null" class="mobileHeader">
    <div @click="() => this.$router.push('/profile')" class="">
      <img
        class="w-12 h-12"
        :src="`/avatars/${this.currentProfile.avatar}.svg`"
        alt=""
      />
    </div>
    <div>
      <img class="h-6" src="/logo/main.svg" alt="" />
    </div>
    <div @click="this.logout">
      <img class="w-6 h-6" src="/icons/Logout.svg" alt="" />
    </div>
  </header>
</template>
<script>
export default {
  props: ['currentProfile'],
  name: 'mobileHeader',
  computed: {},
  methods: {
    logout() {
      window.alertify
        .confirm('Are you sure you want to log out', async () => {
          await this.$auth.logout()
        })
        .set('labels', { ok: 'LOGOUT', cancel: 'Cancel' })
    },
  },
}
</script>
<style></style>
