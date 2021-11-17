<template>
  <main class="subpage">
    <header>
      <img
        @click="() => this.$router.go(-1)"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Notification Preferences</p>
    </header>
    <section class="w-min mx-auto">
      <h1 class="w-96 mx-auto font-display font-bold text-4xl">
        Email me when:
      </h1>
      <label class="checkboxContainer">
        <input
          v-model="notifications.marketing"
          name="marketing"
          type="checkbox"
        />
        <span class="checkmark"></span>
        <label class="ml-4" for="marketing"
          >There is a product update or learning tip</label
        >
      </label>
      <label class="checkboxContainer">
        <input v-model="notifications.account" name="account" type="checkbox" />
        <span class="checkmark"></span>
        <label class="ml-4" for="account"
          >There are any changes to my account</label
        >
      </label>
    </section>
    <footer>
      <button
        @click="this.updateNotifications"
        style=""
        v-if="!this.loading"
        class="btn primary"
      >
        Update
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
      notifications: {
        marketing: false,
        account: false,
      },
      billing: false,
    }
  },
  mounted() {
    this.notifications.marketing = this.$auth.user.notifications.marketing
    this.notifications.account = this.$auth.user.notifications.account
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async updateNotifications() {
      const payload = {
        notifications: this.notifications,
      }
      this.loading = true
      try {
        let res = await this.$store.dispatch(
          'user/updateNotifications',
          payload
        )
        if (res instanceof Error) throw new Error(res)
        window.alertify.success(
          'Account notifications has been successfully updated'
        )
        await this.$auth.fetchUser()
        this.loading = false
      } catch (error) {
        console.log(error)
        window.alertify.error(error.response.data)
        this.loading = false
      }
    },
  },
}
</script>
<style></style>
