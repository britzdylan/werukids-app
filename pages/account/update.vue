<template>
  <main class="subpage">
    <header>
      <img @click="this.goBack" class="h-6 w-6" src="/icons/Back.svg" alt="" />

      <p>Update Account</p>
    </header>
    <section>
      <ValidationObserver v-slot="{ invalid }" slim ref="account">
        <ValidationProvider
          rules="required"
          name="first_name"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="first_name">First Name</label>
            <div>
              <input
                @input="handleChange('account')"
                type="text"
                :placeholder="first_name"
                name="first_name"
                autocomplete
                v-model="first_name"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          name="      last_name: '',
"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="last_name">Last Name</label>
            <div>
              <input
                @input="handleChange('account')"
                type="text"
                :placeholder="last_name"
                name="last_name"
                autocomplete
                v-model="last_name"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <footer>
      <button v-if="!this.loading" class="btn primary">Update</button>

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
      <button
        @click="() => this.$router.push('/login/reset')"
        class="btn outline"
      >
        Reset Password
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
   
      first_name: 'Dylan',
      last_name: 'Britz',
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleChange(form) {
      this.$refs[form].reset()
    },

    nextStep() {},
  },
}
</script>
<style></style>
