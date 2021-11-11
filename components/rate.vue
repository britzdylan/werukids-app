<template>
  <section
    style="z-index: 99"
    class="
      fixed
      bottom-0
      top-0
      left-0
      right-0
      bg-opacity-80
      backdrop-filter backdrop-blur-lg
      bg-primaryLight
      z-70
      md:flex
      flex-row
    "
  >
    <div
      class="
        text-center
        md:w-1/2 md:static md:my-auto md:mx-auto
        absolute
        bottom-1
        right-1
        left-1
        rounded-lg
        bg-offwhite
        p-2
        z-90
        shadow-lg
        md:p-8
      "
    >
      <header class="flex flex-row items-center justify-center">
        <svg
          @click="() => this.$router.replace(this.$route.path)"
          class="ml-auto cursor-pointer"
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
      <h3 class="text-center font-display font-bold">Rate Us</h3>
      <hr class="w-1/2 mx-auto bg-line mb-4" />
      <p>How was your experience</p>
      <div class="flex flex-row items-center justify-center my-4">
        <template v-for="item in rating">
          <img
            @mouseenter="changeRating(item)"
            :key="item + '_id_empty'"
            src="/icons/star-empty.svg"
            :id="'star_empty_' + item"
            class="mx-1"
          />
          <img
            @mouseenter="changeRating(item)"
            @mouseleave="resetRating(item)"
            :key="item + '_id_fill'"
            src="/icons/star.svg"
            :id="'star_fill_' + item"
            class="mx-1"
            style="display: none"
          />
        </template>
      </div>
      <span class="input text-left">
        <label for="name">Add your comments</label>
        <div>
          <textarea v-model="payload.comments" rows="5" placeholder="" />
        </div>
        <!-- <small>Here’s a hint that might help you.</small> -->
      </span>
      <footer class="mt-2 h-24 py-4">
        <button
          v-show="!this.loading"
          @click="this.submitRating"
          class="btn primary"
        >
          Submit
        </button>
        <button v-show="this.loading" class="btn primary loading">
          <svg
            class="animate-spin h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </button>
      </footer>
    </div>
  </section>
</template>
<script>
export default {
  name: 'rate',
  props: ['showRating'],
  data() {
    return {
      rating: [1, 2, 3, 4, 5],
      loading: false,
      payload: {
        rating: '',
        comments: '',
      },
    }
  },
  methods: {
    changeRating(id) {
      console.log(id)
      for (let i = 1; i <= id; i++) {
        const emptyStar = document.getElementById(`star_empty_${i}`)
        const fullStar = document.getElementById(`star_fill_${i}`)
        emptyStar.style.display = 'none'
        fullStar.style.display = 'block'
      }
      this.payload.rating = id
      return true
    },
    resetRating(id) {
      console.log(id)
      for (let i = 1; i <= 5; i++) {
        const emptyStar = document.getElementById(`star_empty_${i}`)
        const fullStar = document.getElementById(`star_fill_${i}`)
        emptyStar.style.display = 'block'
        fullStar.style.display = 'none'
      }

      return true
    },
    submitRating() {
      this.loading = true
      return true
    },
  },
}
</script>
<style></style>
