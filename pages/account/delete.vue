<template>
  <main class="subpage">
    <header>
      <img
        @click="() => this.$router.go(-1)"
        class="h-6 w-6"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Delete Account</p>
    </header>
    <section>
      <p>
        Click this button to delete your Werukids and Werukids for Schools
        accounts and erase all of your personal data stored by Werukids, a copy
        will be emailed to you. You will lose all learning progress and
        achievements. Once completed this action cannot be undone.
      </p>
      <br />
      <p>
        Please note: This action will cancel any existing Werukids
        subscriptions. However you will still be charged full price for the
        current month.
      </p>
    </section>
    <footer>
      <button
        style="color: white"
        v-if="!this.loading"
        class="btn bg-error text-white"
      >
        Erase all my data
      </button>

      <button v-if="this.loading" class="btn primary loading">
        <svg
          class="animate-spin h-5 w-5 text-white"
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
      <button @click="() => this.$router.go(-1)" class="btn outline">
        Cancel
      </button>
    </footer>
  </main>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style></style>
