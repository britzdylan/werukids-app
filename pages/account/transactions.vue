<template>
  <main class="subpage">
    <loader v-if="this.loading" />
    <header v-if="!this.loading">
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Transaction History</p>
    </header>
    <section v-if="!this.loading">
      <template v-for="item in transactions">
        <div :key="item.id" class="transactionPill">
          <p>{{ item.transaction_date }}</p>
          <p>R {{ item.transaction_ammount }}</p>
          <img @click="exportItem(item)" src="/icons/Export.svg" alt="" />
        </div>
      </template>
      <template v-if="transactions.length < 1">
        <h5 class="text-center font-bold font-display opacity-50">
          All your transaction history will show up here
        </h5>
      </template>
    </section>
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
      transactions: [],
    }
  },
  mounted() {
    this.getTransaction()
  },
  methods: {
    async getTransaction() {
      try {
        let res = await this.$store.dispatch('subscriptions/getTransHistory', {
          code: this.$auth.user.billing.paystack_customer_code,
        })

        if (res instanceof Error) throw new Error(res)
        this.transactions = res
        this.loading = false
      } catch (error) {
        console.log(error)
        window.alertify.error(
          'Oops something went wrong, please try again later'
        )
        this.loading = false
      }
    },
    exportItem() {
      return true
    },
    goBack() {
      this.$router.go(-1)
    },
  },
}
// TODO exportIte
// TODO add montlhy filter
</script>
<style>
.transactionPill {
  @apply w-full p-4 bg-inputBg flex flex-row items-center justify-between rounded-md mb-4;
}
</style>
