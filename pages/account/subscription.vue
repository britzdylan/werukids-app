<template>
  <main class="subpage">
    <loader v-show="this.loading" />
    <header>
      <img
        @click="() => this.$router.go(-1)"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Manage Subscription</p>
    </header>
    <section v-if="this.subscriptions != null">
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
      <button
        @click="this.startSub"
        style=""
        v-if="this.$auth.user.subscription_status != 'active'"
        class="btn primary"
      >
        Start Subscription
      </button>

      <button
        @click="this.pauseSub"
        v-if="
          this.$auth.user.subscription_status != 'paused' &&
          this.$auth.user.subscription_status != 'trail'
        "
        class="btn outline"
      >
        Pause Subscription
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
    async pauseSub() {
      window.alertify
        .confirm(
          'Are you sure you want to pause your subscription',
          async () => {
            try {
              this.loading = true
              let res = await this.$store.dispatch(
                'subscriptions/updateSubscription',
                {
                  subscription_status: 'paused',
                  subscription_started: new Date().toISOString(),
                }
              )
              if (res instanceof Error) throw new Error(res)
              res = await this.$auth.fetchUser()
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
    async startSub() {
      // check if pyment details are added, if not go to add it
      if (!this.$auth.user.billing.card.active) {
        window.alertify
          .confirm('Please add your card details', () => {
            this.$router.replace('/account/billing')
            return
          })
          .set('labels', { ok: 'ADD CARD', cancel: 'Cancel' })
      } else {
        window.alertify
          .confirm(
            'Are you sure you want to start your subscription',
            async () => {
              try {
                this.loading = true
                let res = await this.$store.dispatch(
                  'subscriptions/updateSubscription',
                  {
                    subscription_status: 'active',
                    subscription_started: new Date().toISOString(),
                  }
                )
                if (res instanceof Error) throw new Error(res)
                res = await this.$auth.fetchUser()
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
      }
      // if it is, confirm start date
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
