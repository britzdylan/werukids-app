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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </router-link>
    <router-link to="/account">
      <div class="mobileNavItem" id="learn">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.66667"
            y="13"
            width="24.6667"
            height="16.6667"
            rx="2"
            :fill="
              this.currentRoute == 'account' ? this.activeFill : 'transparent'
            "
            :stroke="
              this.currentRoute == 'account' ? this.activeStroke : this.idle
            "
            stroke-width="2"
          />
          <mask id="path-2-inside-1_159:758" fill="white">
            <path
              d="M9.33333 13.3335V8.00016C9.33333 6.23205 10.0357 4.53636 11.286 3.28612C12.5362 2.03588 14.2319 1.3335 16 1.3335C17.7681 1.3335 19.4638 2.03588 20.714 3.28612C21.9643 4.53636 22.6667 6.23205 22.6667 8.00016V13.3335"
            />
          </mask>
          <path
            d="M7.33333 13.3335C7.33333 14.4381 8.22876 15.3335 9.33333 15.3335C10.4379 15.3335 11.3333 14.4381 11.3333 13.3335H7.33333ZM9.33333 8.00016H7.33333H9.33333ZM16 1.3335V-0.666504V1.3335ZM20.6667 13.3335C20.6667 14.4381 21.5621 15.3335 22.6667 15.3335C23.7712 15.3335 24.6667 14.4381 24.6667 13.3335H20.6667ZM11.3333 13.3335V8.00016H7.33333V13.3335H11.3333ZM11.3333 8.00016C11.3333 6.76249 11.825 5.5755 12.7002 4.70033L9.87174 1.8719C8.24643 3.49722 7.33333 5.70162 7.33333 8.00016H11.3333ZM12.7002 4.70033C13.5753 3.82516 14.7623 3.3335 16 3.3335L16 -0.666504C13.7015 -0.666504 11.4971 0.246589 9.87174 1.8719L12.7002 4.70033ZM16 3.3335C17.2377 3.3335 18.4247 3.82516 19.2998 4.70033L22.1283 1.8719C20.5029 0.246589 18.2985 -0.666504 16 -0.666504V3.3335ZM19.2998 4.70033C20.175 5.5755 20.6667 6.76249 20.6667 8.00016H24.6667C24.6667 5.70162 23.7536 3.49722 22.1283 1.8719L19.2998 4.70033ZM20.6667 8.00016V13.3335H24.6667V8.00016H20.6667Z"
            :fill="this.currentRoute == 'account' ? this.activeFill : this.idle"
            mask="url(#path-2-inside-1_159:758)"
          />
        </svg>
      </div>
    </router-link>
    <div @click="this.toggleMenu" class="mobileNavItem" id="menu">
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
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M10.744 22.6665H26.5121"
          :stroke="this.idle"
          stroke-width="2"
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
  methods: {
    toggleMenu() {
      this.$emit('toggleMenuNav')
    },
  },
  computed: {
    currentRoute() {
      return this.$route.name
    },
  },
}
</script>
<style>
#mobileNav {
  @apply flex flex-row justify-between items-center w-full lg:hidden bg-offwhite px-4 py-0 h-16 fixed bottom-0;
}

#mobileNav a {
  @apply h-full w-1/3;
}
.mobileNavItem {
  @apply w-full h-full flex flex-row items-center justify-center;
}

#menu {
  @apply w-1/3;
}
</style>
