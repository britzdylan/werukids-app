<template>
  <div class="bg-pic">
    <p class="text-center">Sign Up To</p>
    <div class="mb-12">
      <img class="h-12 mx-auto" src="/logo/main.svg" alt="" />
    </div>
    <!-- <button @click="this.googleSignUp" class="google">
      Sign up with google
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
    <router-link to="/signup">
      <button class="btn primary mt-auto block mx-auto">
        Sign up with email
      </button>
    </router-link>
    <!-- <img
      class="w-full lg:w-96 ml-auto lg:mt-0"
      src="/images/point.png"
      alt=""
    /> -->
    <router-link to="/login" class="mb-8 mt-auto text-center">
      Already have an account? Log in instead.
    </router-link>
  </div>
</template>
<script>
export default {
  layout: 'public',
  methods: {
    async googleSignUp() {
      // this.$auth.loginWith('google')
      const authCode = await this.$gAuth.getAuthCode()
      // console.log(authCode)
      try {
        const res = await this.$store.dispatch('user/googleAuth', {
          code: authCode,
          redirect_uri: 'http://localhost:3000/login',
        })
        if (res instanceof Error) throw new Error(res)
      } catch (error) {
        log.error(error)
      }
      // const response = await this.$http.post(
      //   'http://localhost:8000/auth/google',
      //   { code: authCode, redirect_uri: 'postmessage' }
      // )
    },
  },
}
// 5.0.0-1624817847.21691f1
</script>
<style>
.google {
  @apply flex flex-row items-center justify-center text-primary uppercase mx-auto rounded-full w-full h-16 bg-offwhite lg:w-96;
  box-shadow: 0px 0px 4px #215675;
}

.bg-pic {
  @apply px-4 py-2 h-full flex flex-col justify-start lg:justify-center;
  background-image: url('/images/point-xsmall.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
}

@media (min-width: 640px) {
  .bg-pic {
    background-image: url('/images/point-small.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }
}

@media (min-width: 768px) {
  .bg-pic {
    background-image: url('/images/point.png');
    background-position: right bottom;

    background-size: contain;
  }
}
</style>
