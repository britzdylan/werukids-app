<template>
  <div class="px-4 py-2 h-full flex flex-col justify-between lg:justify-center">
    <div>
      <img class="h-12 mx-auto" src="/logo/main.svg" alt="" />
    </div>
    <p class="text-center mt-12">
      Please activate your account to keep your kids learning
    </p>
    <img
      class="w-9/12 lg:w-72 mx-auto mt-auto lg:mt-0"
      src="/images/shocked.png"
      alt=""
    />
    <div
      class="
        w-full
        lg:w-1/2
        bg-background
        mx-auto
        px-auto
        flex flex-col
        pt-0
        mt-0
      "
    >
      <button
        @click="() => this.$router.replace('/account/subscription')"
        style="margin-top: 0"
        class="btn primary block mx-auto"
      >
        Activate Subscription
      </button>
      <button
        @click="() => this.$router.replace('/account/')"
        class="btn outline block mx-auto"
      >
        My Account
      </button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
