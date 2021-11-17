<template>
  <main
    v-if="this.account && this.account != null"
    class="p-4 grid grid-col-1 gap-12 lg:grid-cols-2 max-w-4xl mx-auto pb-24"
  >
    <div class="accountDetails">
      <div>
        <h1 class="font-display font-bold leading-none text-3xl">
          {{ this.account.first_name }} {{ this.account.last_name }}
        </h1>
        <p class="font-medium">{{ this.account.email }}</p>
        <small class="text-line">{{
          new Date(this.account.createdAt).toDateString()
        }}</small>
      </div>
      <img
        @click="() => this.$router.push('/account/update')"
        src="/icons/Edit.svg"
        class="h-8 cursor-pointer"
        alt=""
      />
    </div>
    <section class="subscriptionWrapper">
      <header class="flex flex-row items-center justify-start">
        <h2 class="mr-auto text-lg">Subscription</h2>
        <span class="flex flex-row items-center uppercase"
          ><div
            :class="this.calcActiveColor(this.$auth.user.subscription_status)"
            class="h-3 w-3 rounded-full mr-2"
          ></div>
          {{ this.account.subscription_status }}
          <span v-if="this.account.subscription_status == 'trail'"
            >({{ this.calcTrailTime() }} Days left)</span
          ></span
        >
      </header>

      <div class="subscription">
        <img
          @click="() => this.$router.push('/account/subscription')"
          src="/icons/Edit.svg"
          class="absolute top-1 right-1 cursor-pointer"
          alt=""
        />
        <p class="leading-none">
          <span
            style="padding: 1px"
            class="bg-secondaryLight rounded ring-2 ring-secondaryDark mr-2"
            >{{
              this.account.subscription_status != 'trail'
                ? this.account.subscription.plan
                : 'TRAIL'
            }}</span
          >Plan
        </p>
        <p class="text-5xl font-bold leading-none mt-8">
          R
          {{
            this.account.subscription_status != 'trail'
              ? this.account.subscription.price
              : 0
          }}
          <span class="text-sm">/p.m</span>
        </p>
      </div>
    </section>
    <section class="paymentDetailsWrapper lg:order-last">
      <header class="flex flex-row items-center justify-start">
        <h2 class="mr-auto text-lg">Payment Details</h2>
        <span class="flex flex-row items-center"
          ><div class="h-3 w-3 bg-success rounded-full mr-2"></div>
          ACTIVE</span
        >
      </header>

      <div class="subscription">
        <img
          @click="() => this.$router.push('/account/billing')"
          src="/icons/Edit.svg"
          class="absolute top-1 right-1 cursor-pointer"
          alt=""
        />
        <div class="mb-4">
          <small class="text-placeholder mb-2 block">Cardholder Name</small>
          <div class="flex flex-row items-center">
            <img class="mr-4" src="/icons/Profile.svg" alt="" />
            <p>MR DM BRITZ</p>
          </div>
        </div>
        <div class="mb-4">
          <small class="text-placeholder mb-2 block">Card Number</small>
          <div class="flex flex-row items-center">
            <img class="mr-4" src="/icons/mastercard.svg" alt="" />
            <p>5300 7817 9809 4441</p>
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div class="mr-16">
            <small class="text-placeholder mb-2 block">Expires</small>
            <div class="flex flex-row items-center">
              <img class="mr-4" src="/icons/Calandar.svg" alt="" />
              <p>06/23</p>
            </div>
          </div>
          <div>
            <small class="text-placeholder mb-2 block">CVV</small>
            <div class="flex flex-row items-center">
              <img class="mr-4" src="/icons/Lock.svg" alt="" />
              <p>***</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="extraLinks">
      <router-link to="/account/transactions">Transaction History</router-link>
      <router-link to="/account/delete">Delete My Account</router-link>
      <router-link to="/account/export">Export my data</router-link>
      <router-link to="/account/notifications"
        >Notification preferences</router-link
      >
    </section>
  </main>
</template>
<script>
export default {
  layout: 'home',
  computed: {
    account() {
      return this.$auth.user
    },
  },
  methods: {
    calcActiveColor(key) {
      switch (key) {
        case 'active':
          return 'bg-success'
          break
        case 'trail':
          return 'bg-line'
          break
        case 'suspended':
          return 'bg-error'
          break
        case 'paused':
          return 'bg-warning'
          break
      }
    },
    calcTrailTime() {
      const start_date = this.account.subscription_started.toString()
      const today = new Date()
      console.log(today)
      const trailStarted = new Date(start_date)
      console.log(trailStarted)
      const difference = trailStarted.getTime() - today.getTime()
      const days = Math.ceil(difference / (1000 * 3600 * 24))
      return 7 - days > 0 ? 7 - days : 'Trail has ended'
    },
  },
}
</script>
<style>
.subscription {
  @apply w-full bg-inputBg rounded-md p-4 relative;
}

.accountDetails {
  @apply flex flex-row items-start justify-between mb-6 mt-4 border-b border-line;
}

.extraLinks > a {
  @apply block font-medium text-lg my-2 cursor-pointer;
}
</style>
