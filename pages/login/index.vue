<template>
  <div class="LoginContainer subpage">
    <p class="text-center">Login to your account</p>
    <div class="mb-12">
      <img class="h-12 mx-auto" src="/logo/main.svg" alt="" />
    </div>
    <!-- <button class="google">
      Sign In with google
      <svg
        width="36"
        height="35"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-2"
      >
        <path
          d="M40.111 16.083H38.5V16H20.5V24H31.803C30.154 28.657 25.723 32 20.5 32C13.873 32 8.5 26.627 8.5 20C8.5 13.373 13.873 8 20.5 8C23.559 8 26.342 9.154 28.461 11.039L34.118 5.382C30.546 2.053 25.768 0 20.5 0C9.455 0 0.5 8.955 0.5 20C0.5 31.045 9.455 40 20.5 40C31.545 40 40.5 31.045 40.5 20C40.5 18.659 40.362 17.35 40.111 16.083Z"
          fill="#FFC107"
        />
        <path
          d="M2.806 10.691L9.377 15.51C11.155 11.108 15.461 8 20.5 8C23.559 8 26.342 9.154 28.461 11.039L34.118 5.382C30.546 2.053 25.768 0 20.5 0C12.818 0 6.156 4.337 2.806 10.691Z"
          fill="#FF3D00"
        />
        <path
          d="M20.5 40C25.666 40 30.36 38.023 33.909 34.808L27.719 29.57C25.6436 31.1484 23.1075 32.0021 20.5 32C15.298 32 10.881 28.683 9.21701 24.054L2.69501 29.079C6.00501 35.556 12.727 40 20.5 40Z"
          fill="#4CAF50"
        />
        <path
          d="M40.111 16.083H38.5V16H20.5V24H31.803C31.0142 26.2164 29.5934 28.1532 27.716 29.571L27.719 29.569L33.909 34.807C33.471 35.205 40.5 30 40.5 20C40.5 18.659 40.362 17.35 40.111 16.083Z"
          fill="#1976D2"
        />
      </svg>
    </button> -->
    <div class="max-w-2xl w-full mx-auto mb-6">
      <hr class="my-8" />
      <ValidationObserver v-slot="{ invalid }" slim ref="login">
        <ValidationProvider
          rules="required|email"
          name="email"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="email">Email</label>
            <div>
              <input
                @input="handleChange('login')"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                autocomplete
                v-model="email"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <ValidationProvider
          v-if="!showPassword"
          rules="required|passLength"
          name="password"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="name">Password</label>
            <div>
              <input
                @input="handleChange('login')"
                type="text"
                placeholder="password"
                name="password"
                v-model="password"
              />
              <svg
                @click="togglePassword"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z"
                  stroke="currentcolor"
                  stroke-width="2"
                />
                <circle
                  cx="11.6797"
                  cy="12"
                  r="3"
                  stroke="currentcolor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <ValidationProvider
          v-if="showPassword"
          rules="required|passLength"
          name="password"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="name">Password</label>
            <div>
              <input
                @input="handleChange('login')"
                type="password"
                placeholder="password"
                name="password"
                v-model="password"
              />
              <svg
                @click="togglePassword"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.67969 3L21.6797 19"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0546 4.79034C14.2347 4.26823 14.8039 3.99094 15.326 4.171C18.4478 5.24759 21.0835 7.65277 22.8918 10.8024C23.3668 11.6297 23.4799 12.6014 23.2316 13.4974C23.084 14.0296 22.5329 14.3414 22.0007 14.1939C21.4685 14.0463 21.1567 13.4953 21.3042 12.9631C21.4117 12.5756 21.3626 12.1557 21.1573 11.7982C19.5394 8.98025 17.2514 6.95057 14.674 6.06172C14.1519 5.88167 13.8746 5.31245 14.0546 4.79034ZM8.7503 4.94112C8.95814 5.45281 8.71183 6.0361 8.20014 6.24394C5.82167 7.21006 3.71737 9.15927 2.2022 11.7983C1.9326 12.2679 1.9326 12.8449 2.2022 13.3145C4.42466 17.1854 7.89339 19.5564 11.6798 19.5564C14.367 19.5564 16.8801 18.3688 18.9146 16.299C19.3017 15.9051 19.9349 15.8996 20.3288 16.2868C20.7226 16.6739 20.7281 17.3071 20.341 17.7009C17.9956 20.0871 14.9897 21.5564 11.6798 21.5564C6.99415 21.5564 2.94527 18.6255 0.467746 14.3103C-0.155911 13.2241 -0.155916 11.8888 0.467735 10.8025C2.16221 7.85116 4.58162 5.55506 7.44748 4.39097C7.95917 4.18313 8.54246 4.42944 8.7503 4.94112Z"
                  fill="currentcolor"
                />
                <path
                  d="M14.5892 11.8251C14.748 12.457 14.6968 13.1233 14.4434 13.7235C14.1899 14.3236 13.748 14.825 13.1844 15.1517C12.6208 15.4785 11.9662 15.6129 11.3194 15.5347C10.6726 15.4564 10.0689 15.1698 9.59949 14.7181C9.13007 14.2663 8.82045 13.6741 8.71743 13.0308C8.61441 12.3875 8.7236 11.7282 9.02848 11.1524C9.33337 10.5767 9.81738 10.1159 10.4074 9.83956C10.9973 9.56327 11.6612 9.48653 12.2987 9.62095"
                  stroke="currentcolor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <router-link to="/login/reset" class="text-right cursor-pointer block"
          >Reset Password</router-link
        >
      </ValidationObserver>
    </div>
    <button
      v-show="!this.loading"
      @click="this.signin"
      class="btn primary mx-auto block mb-6"
    >
      Sign In
    </button>
    <button v-show="this.loading" class="btn primary loading mx-auto block">
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

    <router-link to="/welcome" class="text-center mt-8"
      >Don't have an account? Sign up instead</router-link
    >
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  layout: 'public',

  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loading: false,
      step: 1,
      email: '',
      password: '',

      showPassword: true,
    }
  },
  methods: {
    handleChange(form) {
      this.$refs[form].reset()
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    nextStep() {},
    async signin() {
      let validate = await this.$refs.login.validate()
      if (!validate) {
        return
      }
      this.loading = true
      const login = {
        email: this.email,
        password: this.password,
      }
      console.log(login)
      try {
        let res = await this.$auth
          .loginWith('local', { data: login })
          .then((res) => console.log(res, '/////////from AUTH'))
        if (res instanceof Error) throw new Error(res)
        window.alertify.success('Logged in successfully')
        this.loading = false
        this.$router.replace('/')
      } catch (error) {
        console.log(error)
        window.alertify.error('Email or password is incorrect')
        this.loading = false
      }
    },
  },
}
</script>
<style>
.LoginContainer {
  @apply px-4 py-2 h-full flex flex-col justify-start lg:justify-center;
}

.google {
  @apply flex flex-row items-center justify-center text-primary uppercase mx-auto rounded-full w-full h-16 bg-offwhite lg:w-96;
  box-shadow: 0px 0px 4px #215675;
}
</style>
