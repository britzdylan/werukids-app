<template>
  <aside v-show="false" id="mobileMenu">
    <header>
      <svg
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
    <h1 class="font-display text-center">WERUKIDS</h1>
    <div class="flex-grow flex flex-col justify-center">
      <h3 class="">Rate Us</h3>
      <h3 class="">Help</h3>
      <h3 class="">About werukids</h3>
      <h3 class="">Share</h3>
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
}
</script>
<style scoped>
header {
  @apply flex flex-row justify-end;
}
#mobileMenu {
  @apply absolute top-0 left-0 right-0 bottom-0 bg-secondary flex flex-col justify-start p-4;
  z-index: 99;
}

a {
  @apply block my-4;
}

footer {
  @apply text-center;
}

h3 {
  @apply font-display font-medium text-center my-2;
}
</style>
