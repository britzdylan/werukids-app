<template>
  <main class="subpage h-full bg-white">
    <loader v-if="this.loading" />
    <header v-if="!this.loading">
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>{{ this.book.Title }}</p>
    </header>
    <!-- {{ this.book.url }} -->
    <iframe
      v-if="!this.loading"
      id="book"
      allowfullscreen="allowfullscreen"
      scrolling="no"
      class="fp-iframe h-full w-full xl:w-2/3 mx-auto"
      :src="this.book.Link"
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
  head() {
    return {
      script: [],
    }
  },
  data() {
    return {
      loading: true,
      book: null,
      orientation: null,
      file: null,
    }
  },
  mounted() {
    if (this.$auth.user.billing.subscription_status == 'suspended') {
      this.$router.replace('/account/trail')
    }
    this.orientation = window.screen.orientation.type
    window.addEventListener('orientationchange', this.handleOrientationChange)
    this.fetchBook()
    this.calcTrailTime()
  },
  methods: {
    calcTrailTime() {
      if (this.$auth.user.billing.subscription_status == 'trail') {
        const start_date = this.$auth.user.createdAt.toString()
        const today = new Date()
        console.log(today)
        const trailStarted = new Date(start_date)

        const difference = today.getTime() - trailStarted.getTime()
        const days = Math.ceil(difference / (1000 * 3600 * 24))
        console.log(days)
        const active = 7 - days > 0 ? true : false
        if (!active) {
          this.$router.replace('/account/trail')
        }
      }
    },
    handleOrientationChange() {
      this.orientation = window.screen.orientation.type
      //   if (orientation === 'portrait-primary') {
      //     // portrait mode
      //   } else if (orientation === 'landscape-primary') {
      //     // landscape mode
      //   }
    },
    async fetchBook() {
      try {
        let res = await this.$store.dispatch(
          'content/fetchBook',
          this.$route.params.id
        )
        if (res instanceof Error) throw new Error(res)
        this.book = res
        this.loading = false
      } catch (error) {
        console.log(error)
        window.alertify.error(
          'Oops something went wrong please try again later'
        )
        this.loading = false
      }
    },

    goBack() {
      this.$router.replace('/read')
    },
  },
  computed: {
    isLastPage() {
      const iFrame = document.getElementById('book')
      return iFrame.contentWindow
    },
  },
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
