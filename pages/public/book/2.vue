<template>
  <main class="subpage h-full bg-white">
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
    <div class="w-full px-4">
      <button @click="this.goBack" class="btn primary w-full mx-auto">
        Back
      </button>
    </div>
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
