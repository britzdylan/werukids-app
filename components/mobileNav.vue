<template>
  <nav id="mobileNav">
    <router-link to="/">
      <div class="mobileNavItem" id="home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke="
              this.currentRoute == 'index' ? this.activeStroke : this.idle
            "
            :fill="
              this.currentRoute == 'index' ? this.activeFill : 'transparent'
            "
            stroke-width="1"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>
    </router-link>
    <router-link to="/games">
      <div class="mobileNavItem" i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke="
              this.currentRoute == 'games' ? this.activeStroke : this.idle
            "
            :fill="
              this.currentRoute == 'games' ? this.activeFill : 'transparent'
            "
            stroke-width="1"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      </div>
    </router-link>

    <router-link to="/videos">
      <div class="mobileNavItem" id="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke="
              this.currentRoute == 'videos' ? this.activeStroke : this.idle
            "
            :fill="
              this.currentRoute == 'videos' ? this.activeFill : 'transparent'
            "
            stroke-width="1"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </div>
    </router-link>
    <router-link to="/profile">
      <div class="mobileNavItem" id="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke="
              this.currentRoute == 'profile' ? this.activeStroke : this.idle
            "
            :fill="
              this.currentRoute == 'profile' ? this.activeFill : 'transparent'
            "
            stroke-width="1"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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
      activeFill: '#FFC000',
      activeStroke: '#FFC000',
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
