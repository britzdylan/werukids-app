<template>
  <main class="subpage h-full bg-white">
    <button
      style="width: 120px"
      class="btn primary absolute right-5 bottom-2 w-max"
    >
      Back
    </button>
    <loader v-if="this.loading" />
    <header v-if="!this.loading">
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Let's Read</p>
    </header>
    <!-- {{ this.book.url }} -->
    <!-- <div v-if="!this.loading && !this.isReading" class="p-2">
      <div class="h-64 w-64 mx-auto rounded-full">
        <img
          :src="
            `https://werukids-cms-rk6gu.ondigitalocean.app` +
            this.book.cover.url
          "
          alt=""
          class="object-cover"
        />
      </div>

      <h3 class=" text-center mb-8">{{ this.book.Title }}</h3>
      <button @click="initReading" class="btn primary mb-12 block mx-auto">
        Read Book
      </button>
      <div
        id="preBook"
        class="
          mx-auto
          rounded-md
          shadow-lg
          p-4
          w-full
          mt-12
          bg-white
          lg:max-w-lg
        "
      >
        <div class="bookDetails">
          <p class="font-bold opacity-60">Book Collection</p>
          <p class="mb-4">{{ this.book.book_category.Title }}</p>
          <p class="font-bold opacity-60">Book Description</p>
          <p>Lorem Ipsum</p>
          <small class="text-center font-bold mt-8 block"
            >Complete this book to earn</small
          >
          <div class="flex flex-row items-center justify-center mt-4">
            <img src="/icons/star.svg" class="mx-1 cursor-pointer" />
            <img src="/icons/star.svg" class="mx-1 cursor-pointer" />
            <img src="/icons/star.svg" class="mx-1 cursor-pointer" />
          </div>
        </div>
      </div>
    </div> -->

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
      v-show="this.orientation == 'portrait-primary' && this.isReading"
    >
      <h4 class="font=bold text-center">Please Rotate your screen</h4>
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
      isReading: false,
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
    initReading() {
      this.isReading = true
      // TODO start countdown function for profile tracking
      // 7sec x everypage of the book
      // send xhr
      const pages = 2
      const time = pages * 7 * 1000
      setTimeout(function () {
        // alert('Hello')
      }, time)
    },
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
      this.$router.replace('/')
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
