<template>
  <main class="subpage">
    <header>
      <img
        @click="() => this.$router.go(-1)"
        class="h-6 w-6"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Manage Subscription</p>
    </header>
    <section>
      <p class="text-center mb-8">Update your Werukids Subscription plan</p>
      <div class="subscription">
        <img
          @click="() => (this.showFeatures = !this.showFeatures)"
          src="/icons/Alert-info.svg"
          class="absolute top-1 right-1"
          alt=""
        />
        <p class="leading-none">
          <span
            style="padding: 1px"
            class="bg-secondaryLight rounded ring-2 ring-secondaryDark mr-2"
            >Standard</span
          >Plan
        </p>
        <p class="text-5xl font-bold leading-none mt-8">
          R 99.00 <span class="text-sm">/p.m</span>
        </p>
        <div :class="this.showFeatures ? '' : 'hidden'" class="features">
          <div class="feature">
            <img src="/icons/Check.svg" alt="" />
            <small>Feature</small>
          </div>
          <div class="feature">
            <img src="/icons/Check.svg" alt="" />
            <small>Feature</small>
          </div>
          <div class="feature">
            <img src="/icons/Check.svg" alt="" />
            <small>Feature</small>
          </div>
          <div class="feature">
            <img src="/icons/Check.svg" alt="" />
            <small>Feature</small>
          </div>
          <div class="feature">
            <img src="/icons/Check.svg" alt="" />
            <small>Feature</small>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <button style="" v-if="!this.loading" class="btn primary">Update</button>

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
      <button v-if="!this.loading" class="btn outline">
        Pause Subscription
      </button>
      <button v-if="this.loading" class="btn outline loading">
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
      showFeatures: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
<style>
.subscription {
  @apply w-full bg-inputBg rounded-md p-4 relative ring ring-secondaryDark;
}

.feature {
  @apply flex flex-row items-center justify-start;
}

.feature > img {
  @apply mr-4;
}

.features {
  @apply my-4;
}
</style>
