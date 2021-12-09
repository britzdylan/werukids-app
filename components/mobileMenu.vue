<template>
  <aside id="mobileMenu">
    <header>
      <svg
        @click="() => this.$router.replace(this.$route.path)"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8.00003L25.0323 25.0323"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 25.0323L25.0323 8"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </header>
    <div>
      <img class="h-8 mx-auto" src="/logo/dark.svg" alt="" />
    </div>
    <div class="flex-grow flex flex-col justify-center">
      <h3 class="" @click="() => this.$router.push(`/account`)">Parents</h3>
      <h3
        class=""
        @click="() => this.$router.push(`${this.$route.path}?popup=rate`)"
      >
        Rate Us
      </h3>
      <!-- <h3 class="">Help</h3> -->
      <a class="m-0" href="https://www.werukids.com/about" target="_blank"
        ><h3 class="">About</h3></a
      >
      <h3 @click="this.share" class="">Share</h3>
    </div>
    <footer>
      <a href="/">Privacy Policy</a>
      <a href="/">Terms and Conditions</a>
      <small>V 1.0</small>
    </footer>
  </aside>
</template>
<script>
export default {
  name: 'mobileMenu',

  data() {
    return {
      showRating: false,
    }
  },
  computed: {},
  methods: {
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
<style scoped>
header {
  @apply flex flex-row justify-end;
}
#mobileMenu {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-secondary flex flex-col justify-start p-4 z-30;
}

a {
  @apply block my-0;
}

footer > a {
  @apply my-4;
}

footer {
  @apply text-center;
}

h3 {
  @apply font-medium text-center my-2;
}
</style>
