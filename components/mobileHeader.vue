<template>
  <header class="mobileHeader">
    <div class="">
      <img class="w-12 h-12" src="/avatars/girl_1.svg" alt="" />
    </div>
    <div>
      <img class="h-6" src="/logo/main.svg" alt="" />
    </div>
    <div @click="() => this.$auth.logout">
      <img class="w-6 h-6" src="/icons/Logout.svg" alt="" />
    </div>
  </header>
</template>
<script>
export default {
  name: 'mobileHeader',
}
</script>
<style>
.mobileHeader {
  @apply flex flex-row justify-between items-center w-full px-4 py-6 bg-offwhite lg:hidden sticky top-0;
}

.avatar {
  filter: drop-shadow(0px 0px 2px #00ba77);
}
</style>
