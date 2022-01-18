<template>
  <main class="subpage h-full bg-white">
    <button
      @click="this.goBack"
      style="width: 120px"
      class="btn primary absolute right-5 bottom-2 w-max"
    >
      Back
    </button>

    <header>
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Let's Read</p>
    </header>

    <iframe
      id="book"
      allowfullscreen="allowfullscreen"
      scrolling="no"
      class="fp-iframe h-full w-full xl:w-2/3 mx-auto"
      src="https://myfuturework.aflip.in/numbers"
    ></iframe>
  </main>
</template>
<script>
export default {
  layout: 'public',
  methods: {
    goBack() {
      this.$router.replace('/public')
    },
  },
}
</script>
<style lang=""></style>
