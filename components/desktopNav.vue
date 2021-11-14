<template>
  <header v-if="this.currentProfile != null" class="desktopHeader">
    <div class="mr-auto">
      <img class="h-6" src="/logo/main.svg" alt="" />
    </div>
    <nav class="">
      <router-link
        :class="this.currentRoute == 'learn' ? 'activeLink' : ''"
        class="navItem"
        to="/learn"
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
          <p class="menuItem">Help</p>
          <p class="menuItem">About werukids</p>
          <p class="menuItem">Share</p>
        </div>
      </span>
    </nav>
    <div class="ml-auto flex flex-row items-center">
      <div @click="() => this.$router.push('/profile')" class="mr-8">
        <img
          class="w-12 h-12"
          :src="`/avatars/${this.currentProfile.avatar}.svg`"
          alt=""
        />
      </div>

      <div @click="() => this.$auth.logout">
        <img class="w-6 h-6" src="/icons/Logout.svg" alt="" />
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
    hideMenu() {
      this.showMenu = false
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<style>
.desktopHeader {
  @apply hidden lg:sticky top-0 lg:flex flex-row items-center left-0 right-0 w-full py-4 px-8 bg-offwhite justify-center z-20;
}

.navItem {
  @apply mx-6 text-lg font-bold;
}

.activeLink {
  @apply text-secondaryDark;
}

.moreMenu {
  @apply absolute  left-0 w-64 bg-secondary  rounded-md p-4;
  top: 2rem;
}

.menuItem {
  @apply text-lg font-bold font-display my-2 cursor-pointer;
}
</style>
