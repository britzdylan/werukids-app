<template>
  <nav id="mobileNav">
    <router-link to="/">
      <div class="mobileNavItem" id="home">
        <svg
          width="37"
          height="32"
          viewBox="0 0 37 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.0667 12.793C3.0667 11.7703 3.58769 10.8181 4.44897 10.2666L18.4 1.3335L32.3511 10.2666C33.2124 10.8181 33.7334 11.7703 33.7334 12.793V28.1668C33.7334 29.5475 32.6141 30.6668 31.2334 30.6668H24C23.4477 30.6668 23 30.2191 23 29.6668V21.1668C23 20.8907 22.7762 20.6668 22.5 20.6668H14.3C14.0239 20.6668 13.8 20.8907 13.8 21.1668V29.6668C13.8 30.2191 13.3523 30.6668 12.8 30.6668H5.5667C4.18598 30.6668 3.0667 29.5475 3.0667 28.1668V12.793Z"
            :stroke="
              this.currentRoute == 'index' ? this.activeStroke : this.idle
            "
            :fill="
              this.currentRoute == 'index' ? this.activeFill : 'transparent'
            "
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </router-link>
    <router-link to="/account">
      <div class="mobileNavItem" id="">
        <svg
          width="37"
          height="37"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 21.5L3.16547 20.4362C3.37405 19.0954 4.24842 17.9469 5.54504 17.5466C7.13654 17.0553 9.49052 16.5 12 16.5C14.5095 16.5 16.8635 17.0553 18.455 17.5466C19.7516 17.9469 20.6259 19.0954 20.8345 20.4362L21 21.5"
            :stroke="
              this.currentRoute == 'account' ? this.activeStroke : this.idle
            "
            :fill="
              this.currentRoute == 'account' ? this.activeFill : 'transparent'
            "
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            :stroke="
              this.currentRoute == 'account' ? this.activeStroke : this.idle
            "
            :fill="
              this.currentRoute == 'account' ? this.activeFill : 'transparent'
            "
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </router-link>
    <div
      @click="() => this.$router.replace(`${this.$route.path}?menu=true`)"
      class="mobileNavItem"
      id="menu"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.48793 9.3335H26.5121"
          :stroke="this.idle"
          stroke-width="1"
          stroke-linecap="round"
        />
        <path
          d="M10.744 22.6665H26.5121"
          :stroke="this.idle"
          stroke-width="1"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'mobileNav',
  data() {
    return {
      activeFill: '#FFDD75',
      activeStroke: '#9A8032',
      idle: '#8FB6E9',
    }
  },
  methods: {},
  computed: {
    currentRoute() {
      return this.$route.name
    },
  },
}
</script>
<style></style>
