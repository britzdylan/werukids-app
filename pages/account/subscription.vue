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
      <p class="text-center mb-8">Your Werukids Subscription plan</p>

      <div class="subscription cursor-pointer">
        <p class="leading-none">
          <span
            class="
              bg-secondaryLight
              rounded
              ring-2 ring-secondaryDark
              mr-2
              px-2
            "
            >{{
              this.subscriptions.plan ? this.subscriptions.plan.name : 'Trail'
            }}</span
          >Plan
        </p>
        <p class="text-5xl font-bold leading-none mt-8">
          R
          {{
            this.subscriptions.plan
              ? Number(this.subscriptions.plan.amount) / 100
              : '0'
          }}
          <span class="text-sm">/p.m</span>
        </p>
      </div>

      <!-- <template v-for="item in subscriptions">
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
      </template> -->
    </section>
    <footer>
      <button
        @click="this.startSub"
        style=""
        v-if="this.$auth.user.billing.subscription_status != 'active'"
        class="btn primary"
      >
        Start Pro Subscription for R99 p.m
      </button>

      <button
        @click="this.manageSub"
        v-if="this.$auth.user.billing.subscription_status != 'trail'"
        class="btn outline"
      >
        Manage Subscription
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
      loading: true,
      showFeatures: true,
      subscriptions: null,
    }
  },
  mounted() {
    this.getSubscriptions()
    if (this.$route.query.reference) {
      this.catchUrl()
    }
  },
  methods: {
    async catchUrl() {
      try {
        this.loading = true
        let res = await this.$store.dispatch('subscriptions/verifyPayment', {
          reference: this.$route.query.reference,
        })
        if (res instanceof Error) throw new Error(res)
        await this.$auth.fetchUser()
        this.getSubscriptions()
        this.$router.replace(this.$route.path)
        window.alertify.success('Subscription successfully activated')
        this.loading = false
      } catch (error) {
        console.log(error)
        window.alertify.error(error.response.data)
        this.loading = false
      }
    },
    async manageSub() {
      window.alertify
        .confirm(
          'You will receive an email with a link to manage your subscription',
          async () => {
            try {
              this.loading = true
              let res = await this.$store.dispatch(
                'subscriptions/manageSubscription',
                {
                  code: this.$auth.user.billing.paystack_customer_code,
                }
              )

              if (res instanceof Error) throw new Error(res)
              window.alertify.success('Subscription link successfully sent')
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
      window.alertify
        .confirm(
          'Are you sure you want to start your subscription, you will be redirected to paystack.',
          async () => {
            try {
              this.loading = true
              let res = await this.$store.dispatch(
                'subscriptions/initSubscription',
                {
                  amount: '9900',
                  callback_url: 'http://localhost:3000/account/subscription',
                  plan: 'PLN_eehh7l4wbls3ys8',
                }
              )
              if (res instanceof Error) throw new Error(res)
              window.location.replace(res.data.authorization_url)
              this.loading = false
            } catch (error) {
              console.log(error)
              window.alertify.error(error.response.data)
              this.loading = false
            }
          }
        )
        .set('labels', { ok: 'CONTINUE', cancel: 'Cancel' })

      // if it is, confirm start date
    },
    goBack() {
      this.$router.go(-1)
    },
    async getSubscriptions() {
      this.subscriptions = this.$auth.user.billing
      this.loading = false
      // this.loading = true
      // try {
      //   let res = await this.$store.dispatch('subscriptions/getSubscriptions')
      //   if (res instanceof Error) throw new Error(res)
      //   this.loading = false
      //   this.subscriptions = res
      //   this.selectedSub = this.$auth.user.subscription
      // } catch (error) {
      //   console.log(error)
      //   window.alertify.error(error.response.data)
      //   this.loading = false
      // }
    },
  },
}
</script>
<style>
.subscription {
  @apply w-full  bg-inputBg rounded-md p-4 relative ring ring-secondaryDark;
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
