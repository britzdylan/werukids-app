<template>
  <header v-if="this.currentProfile != null" class="desktopHeader">
    <div class="mr-auto">
      <img class="h-6" src="/logo/main.svg" alt="" />
    </div>
    <nav class="">
      <router-link
        :class="this.currentRoute == 'index' ? 'activeLink' : ''"
        class="navItem"
        to="/"
      >
        Learn
      </router-link>
      <router-link
        :class="this.currentRoute == 'account' ? 'activeLink' : ''"
        class="navItem"
        to="/account"
      >
        Parents
      </router-link>
      <span v-click-outside="hideMenu" class="relative">
        <p
          :class="this.showMenu ? 'activeLink' : ''"
          @click="this.toggleMenu"
          class="navItem inline cursor-pointer"
          to="/more"
        >
          More
        </p>
        <div v-show="this.showMenu" class="moreMenu">
          <p
            class="menuItem"
            @click="() => this.$router.push(`${this.$route.path}?popup=rate`)"
          >
            Rate Us
          </p>
          <!-- <p class="menuItem">Help</p> -->
          <a href="https://www.werukids.com/about" target="_blank"
            ><p class="menuItem">About werukids</p></a
          >
          <p @click="this.share" class="menuItem">Share</p>
        </div>
      </span>
    </nav>
    <div class="ml-auto flex flex-row items-center">
      <div
        @click="() => this.$router.push('/profile')"
        class="mr-8 cursor-pointer"
      >
        <img
          class="w-12 h-12"
          :src="`/avatars/${this.currentProfile.avatar}.svg`"
          alt=""
        />
      </div>

      <div @click="this.logout">
        <img class="w-6 h-6 cursor-pointer" src="/icons/Logout.svg" alt="" />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ['currentProfile'],

  name: 'desktopNav',
  data() {
    return { showMenu: false }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },
  },
  methods: {
    logout() {
      window.alertify
        .confirm('Are you sure you want to log out', async () => {
          await this.$auth.logout()
        })
        .set('labels', { ok: 'LOGOUT', cancel: 'Cancel' })
    },
    hideMenu() {
      this.showMenu = false
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    share() {
      if (navigator.share) {
        navigator
          .share({
            title: 'Weru Kids',
            text: 'Check out Werukids',
            url: 'https://app.werukids.co.za/',
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error))
      }
    },
  },
}
</script>
<style></style>
