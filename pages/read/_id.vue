<template>
  <main class="subpage h-full bg-white">
    <header>
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>The Things I do everyday</p>
    </header>
    <!-- {{ this.book.url }} -->
    <iframe
      id="book"
      allowfullscreen="allowfullscreen"
      scrolling="no"
      class="fp-iframe h-full w-full xl:w-2/3 mx-auto"
      :src="this.book.url"
    ></iframe>
    <div
      class="
        bg-white
        fixed
        top-0
        left-0
        right-0
        bottom-0
        w-full
        h-full
        flex flex-col
        items-center
        justify-center
        md:hidden
      "
      v-show="this.orientation == 'portrait-primary'"
    >
      <h4 class="font=bold text-center font-display">
        Please Rotate your screen
      </h4>
      <img src="/icons/rotate.svg" class="h-12 w-12 mt-12 spin" alt="" />
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      book: {
        url: 'https://myfuturework.aflip.in/500b260ef6.html',
        pages: 26,
      },
      orientation: null,
    }
  },
  mounted() {
    this.orientation = window.screen.orientation.type

    window.addEventListener('orientationchange', this.handleOrientationChange)
  },
  methods: {
    handleOrientationChange() {
      this.orientation = window.screen.orientation.type
      //   if (orientation === 'portrait-primary') {
      //     // portrait mode
      //   } else if (orientation === 'landscape-primary') {
      //     // landscape mode
      //   }
    },

    applyFilters() {
      this.showFilter = false
    },
    goBack() {
      this.$router.replace('/read')
    },
    toggleMyBooks() {
      this.showMyBooks = !this.showMyBooks
    },
  },
  computed: {},
}
</script>
<style>
.spin {
  animation: spin 8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
