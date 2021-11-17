<template>
  <main class="subpage">
    <header>
      <img
        @click="() => this.$router.go(-1)"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Export My Data</p>
    </header>
    <section>
      <p>
        Click this button to request a copy of all of your personal data stored
        by Werukids. This can take up to 30 days.
      </p>
    </section>
    <footer>
      <button
        @click="this.exportData"
        style=""
        v-if="!this.loading"
        class="btn primary"
      >
        Export all my data
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
      <a id="download" style="display: none"></a>
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
      data: null,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async exportData() {
      this.loading = true
      await this.$auth.fetchUser()
      let dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(this.$auth.user))

      var dlAnchorElem = document.getElementById('download')
      dlAnchorElem.setAttribute('href', dataStr)
      dlAnchorElem.setAttribute(
        'download',
        `werukids-data-${new Date().toISOString()}-${this.$auth.user._id}.json`
      )
      dlAnchorElem.click()
      this.loading = false
    },
  },
}
</script>
<style></style>
