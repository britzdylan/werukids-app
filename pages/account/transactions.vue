<template>
  <main class="subpage">
    <header>
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Transaction History</p>
    </header>
    <section>
      <div class="transactionPill">
        <p>03 March 2019</p>
        <p>R 99.00</p>
        <img src="/icons/Export.svg" alt="" />
      </div>
      <div class="transactionPill">
        <p>03 March 2019</p>
        <p>R 99.00</p>
        <img src="/icons/Export.svg" alt="" />
      </div>
      <div class="transactionPill">
        <p>03 March 2019</p>
        <p>R 99.00</p>
        <img src="/icons/Export.svg" alt="" />
      </div>
      <div class="transactionPill">
        <p>03 March 2019</p>
        <p>R 99.00</p>
        <img src="/icons/Export.svg" alt="" />
      </div>
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
<style>
.transactionPill {
  @apply w-full p-4 bg-inputBg flex flex-row items-center justify-between rounded-md mb-4;
}
</style>
