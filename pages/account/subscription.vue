<template>
  <main class="subpage">
    <header>
      <img
        @click="() => this.$router.go(-1)"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Manage Subscription</p>
    </header>
    <section v-if="this.subscriptions != null && !this.loading">
      <p class="text-center mb-8">Update your Werukids Subscription plan</p>
      <template v-for="item in subscriptions">
        <div :key="item.id" class="subscription cursor-pointer">
          <img
            @click="() => (showFeatures = !showFeatures)"
            src="/icons/Alert-info.svg"
            class="absolute top-1 right-1 cursor-pointer"
            alt=""
          />
          <p class="leading-none">
            <span
              style="padding: 1px"
              class="bg-secondaryLight rounded ring-2 ring-secondaryDark mr-2"
              >{{ item.plan }}</span
            >Plan
          </p>
          <p class="text-5xl font-bold leading-none mt-8">
            R {{ item.price }} <span class="text-sm">/p.m</span>
          </p>
          <div :class="showFeatures ? '' : 'hidden'" class="features">
            <template v-for="feature in item.features">
              <div :key="'feature_' + feature" class="feature">
                <img src="/icons/Check.svg" alt="" />
                <small>{{ feature }}</small>
              </div>
            </template>
          </div>
        </div>
      </template>
    </section>
    <footer>
      <button style="" v-if="!this.loading && false" class="btn primary">
        Update
      </button>
      <button
        @click="this.startSub"
        style=""
        v-if="!this.loading && this.$auth.user.subscription_status == 'trail'"
        class="btn primary"
      >
        Start Subscription
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
      showFeatures: true,
      subscriptions: null,
    }
  },
  mounted() {
    this.getSubscriptions()
  },
  methods: {
    async startSub() {
      // check if pyment details are added, if not go to add it
      if (!this.$auth.user.billing.card.active) {
        window.alertify
          .confirm('Please add your card details', () => {
            this.$router.replace('/account/billing')
            return
          })
          .set('labels', { ok: 'ADD CARD', cancel: 'Cancel' })
      }
      // if it is, confirm start date
      window.alertify
        .confirm(
          'Are you sure you want to start your subscription',
          async () => {
            try {
              this.loading = true
              let res = await this.$store.dispatch(
                'subscriptions/updateSubscription',
                {
                  subscription_id: this.selectedSub._id,
                }
              )
              if (res instanceof Error) throw new Error(res)
              window.alertify.success('subscription successfully updated')
              this.loading = false
            } catch (error) {
              console.log(error)
              window.alertify.error(error.response.data)
              this.loading = false
            }
          }
        )
        .set('labels', { ok: 'CONTINUE', cancel: 'Cancel' })
    },
    goBack() {
      this.$router.go(-1)
    },
    async getSubscriptions() {
      this.loading = true
      try {
        let res = await this.$store.dispatch('subscriptions/getSubscriptions')
        if (res instanceof Error) throw new Error(res)
        this.loading = false
        this.subscriptions = res
        this.selectedSub = this.$auth.user.subscription
      } catch (error) {
        console.log(error)
        window.alertify.error(error.response.data)
        this.loading = false
      }
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
