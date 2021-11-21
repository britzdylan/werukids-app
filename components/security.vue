<template>
  <div
    v-show="this.show"
    style="z-index: 99"
    class="
      fixed
      bottom-0
      top-0
      left-0
      right-0
      bg-opacity-80
      backdrop-filter backdrop-blur-lg
      bg-primaryLight
      z-70
      flex flex-row
    "
  >
    <div class="bg-white w-auto p-12 h-auto rounded-lg m-auto">
      <h4 class="font-display font-bold">Parents Only</h4>
      <span class="input">
        <label v-if="!this.newPin" for="name">Enter your secret pin</label>
        <label v-if="this.newPin" for="name">Create a new secret pin</label>
        <div>
          <input
            v-if="!this.newPin"
            @input="this.handleChange"
            type="password"
            maxlength="4"
            placeholder="Pin"
            v-model="pin"
          />
          <input
            v-if="this.newPin"
            type="text"
            maxlength="4"
            placeholder="Pin"
            v-model="pin"
          />
        </div>
        <small class="text-error" v-show="this.error"
          >Your pin is incorrect!</small
        >
      </span>
      <button v-if="this.newPin" @click="this.savePin" class="btn primary">
        Save Pin
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      pin: '',
      correctpin: '1234',
      error: false,
      show: false,
      newPin: false,
    }
  },

  methods: {
    async savePin() {
      this.loading = true
      try {
        let res = await this.$store.dispatch('user/updateProfile', {
          data: {
            pin: this.pin,
          },
        })

        if (res instanceof Error) throw new Error(res)
        res = await this.$auth.fetchUser()
        if (res instanceof Error) throw new Error(res)
        this.$nuxt.$emit('securityPassed')
        this.pin = ''
        this.newPin = false
        window.alertify.success('Pin updated successfully')
        this.loading = false
        this.show = false
      } catch (error) {
        console.log(error)
        window.alertify.error(error.response.data)
        this.loading = false
      }
    },
    handleChange() {
      console.log(this.pin, this.pin.length)
      if ((this.pin.length == 4) & !this.newPin) {
        if (this.pin == this.$auth.user.pin) {
          this.$nuxt.$emit('securityPassed')
          this.pin = ''
          this.error = false

          this.show = false
        } else {
          this.error = true
        }
      }
    },
  },
  created() {
    this.$nuxt.$on('security', (payload) => {
      console.log('Security Requested', payload)
      this.show = true
      if (!this.$auth.user.pin || this.$auth.user.pin == '' || payload) {
        this.newPin = true
      }
    })
  },
  destroyed() {
    this.$nuxt.$off('security')
  },
}
</script>
<style scoped></style>
