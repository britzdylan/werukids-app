<template>
  <main class="subpage">
    <header v-if="this.step < 9">
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Sign Up</p>
    </header>
    <!-- ================================email================================= -->
    <section v-show="this.step == 1">
      <p class="text-center">Please enter your email address</p>
      <ValidationObserver v-slot="{ invalid }" slim ref="email">
        <ValidationProvider
          rules="required|email"
          name="email"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="email">Email</label>
            <div>
              <input
                @input="handleChange('email')"
                type="email"
                placeholder="email"
                name="email"
                autocomplete
                v-model="email"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
      <button
        class="btn"
        v-show="this.accountExists"
        @click="() => this.$router.replace('/login')"
      >
        Your Account already exists, Please Login
      </button>
    </section>
    <!-- ================================verify email================================= -->
    <section v-show="this.step == 2">
      <p class="text-center">
        Let’s verify your account. Please enter the code, we emailed you, below
      </p>
      <ValidationObserver v-slot="{ invalid }" slim ref="code">
        <ValidationProvider
          rules="required|numeric"
          name="code"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="code">Code</label>
            <div>
              <input
                @input="handleChange('code')"
                type="number"
                placeholder="code"
                name="code"
                v-model="code"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
      <button class="btn block mx-auto" @click="this.resendCode">
        Resend Code
      </button>
    </section>
    <!-- ================================choose password ================================= -->
    <section v-show="this.step == 3">
      <p class="text-center">
        Your Email has been successfully verified please enter your new
        password.
      </p>

      <ValidationObserver v-slot="{ invalid }" slim ref="addPassword">
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
                @input="handleChange('addPassword')"
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
            <small class="text-error">{{ errors.toString() }}</small>
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
                @input="handleChange('addPassword')"
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
            <small class="text-error">{{ errors.toString() }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <!-- ================================name================================= -->
    <section v-show="this.step == 4">
      <p class="text-center">Please add your name</p>
      <ValidationObserver v-slot="{ invalid }" slim ref="names">
        <ValidationProvider
          rules="required"
          name="firstname"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="firstname">First Name</label>
            <div>
              <input
                @input="handleChange('names')"
                type="text"
                placeholder="First Name"
                name="firstname"
                v-model="firstname"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          name="lastname"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="lastname">Last Name</label>
            <div>
              <input
                @input="handleChange('names')"
                type="text"
                placeholder="Last Name"
                name="lastname"
                v-model="lastname"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <!-- ================================first profile================================= -->
    <section v-show="this.step == 5">
      <p class="text-center">
        Add your first childs profile, you can add more later
      </p>
      <ValidationObserver v-slot="{ invalid }" slim ref="child">
        <ValidationProvider
          rules="required"
          name="childs_name"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="childs_name">First Name</label>
            <div>
              <input
                @input="handleChange('child')"
                type="text"
                placeholder="First Name"
                name="childs_name"
                v-model="childs_name"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>

        <span class="input">
          <label for="lastname">Age</label>
        </span>
        <div class="ageContainer">
          <template v-for="item in age">
            <div
              @click="setSelectedAge(item)"
              :key="'age_' + item"
              :class="selectedAge == item ? 'ageSelected' : 'ageBlock'"
            >
              {{ item }}
            </div>
          </template>
        </div>
      </ValidationObserver>
    </section>
    <!-- ================================avatar================================= -->
    <section v-show="this.step == 6">
      <p class="text-center">
        Please choose an avatar , for {{ this.childs_name }}
      </p>
      <div class="avatarContainer">
        <template v-for="item in avatars">
          <div
            @click="setSelectedavatar(item)"
            :key="'avatar_' + item"
            :class="selectedAvatar == item ? 'selectedAvatar' : 'avatar'"
          >
            <img :src="`/avatars/${item}.svg`" alt="" />
          </div>
        </template>
      </div>
    </section>
    <!-- ================================language================================= -->
    <section v-show="this.step == 7">
      <p class="text-center">
        Please Choose a primary language preference for {{ this.childs_name }}
      </p>
      <div class="">
        <template v-for="item in languages">
          <div
            @click="setSelectedLang(item.id)"
            :key="'lang_' + item"
            :class="selectedLang == item.id ? 'langSelected' : 'lang'"
          >
            {{ item.Title }}
          </div>
        </template>
      </div>
    </section>
    <!-- ================================terms================================= -->
    <section
      v-if="this.terms != null && this.terms.Content"
      v-html="$md.render(this.terms.Content)"
      v-show="this.step == 8"
    ></section>
    <!-- ================================done================================= -->
    <div
      class="px-4 py-2 h-full flex flex-col justify-between lg:justify-center"
      v-show="this.step == 9"
    >
      <p class="text-center">Welcome To</p>
      <div>
        <img class="h-12 mx-auto" src="/logo/main.svg" alt="" />
      </div>
      <img
        class="w-9/12 lg:w-96 mx-auto mt-auto lg:mt-0"
        src="/images/boy.png"
        alt=""
      />
      <div class="w-full lg:w-1/2 bg-background mx-auto px-auto flex flex-col">
        <p class="text-center lg:w-96 mx-auto">
          In order to continue please add your payment details, or start your 7
          day free trail
        </p>
        <button
          @click="this.login"
          v-if="this.step == 9"
          class="btn primary mt-auto block mx-auto"
        >
          Login to your account
        </button>
        <!-- <button
          v-if="this.step == 9"
          @click="() => this.$router.replace('/')"
          class="btn outline block mx-auto"
        >
          Start 7 day free trail
        </button> -->
      </div>
    </div>
    <footer v-if="this.step < 9">
      <button
        v-show="!this.loading && this.step != 2 && this.step != 8"
        @click="nextStep"
        class="btn primary"
      >
        Next
      </button>
      <button
        v-show="!this.loading && this.step == 2 && this.step != 8"
        @click="nextStep"
        class="btn primary"
      >
        Verify
      </button>
      <button
        v-show="!this.loading && this.step == 8"
        @click="nextStep"
        class="btn primary"
      >
        I Accept
      </button>
      <button v-show="this.loading" class="btn primary loading">
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
  layout: 'public',

  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loading: false,
      email: '',
      code: null,
      password: '',
      firstname: '',
      lastname: '',
      showPassword: true,
      childs_name: '',
      step: 1,
      age: ['3', '4', '5', '6', '7', '8+'],
      avatars: [
        'boy_1',
        'boy_2',
        'boy_3',
        'girl_1',
        'girl_2',
        'girl_3',
        'girl_4',
      ],

      selectedLang: null,
      selectedAge: 0,
      selectedAvatar: '',
      accountExists: false,
    }
  },
  computed: {
    terms() {
      return this.$store.getters['content/getTerms']
    },
    languages() {
      return this.$store.getters['content/getLanguages']
    },
  },
  mounted() {
    this.fetchContent()
  },
  methods: {
    async fetchContent() {
      try {
        let res = await this.$store.dispatch('content/fetchTerms')
        if (res instanceof Error) throw new Error(res)
        res = await this.$store.dispatch('content/fetchLang')
        if (res instanceof Error) throw new Error(res)
      } catch (error) {
        console.log(error)
        window.alertify.error(
          'Oops something went wrong, please try again later'
        )
      }
    },
    goBack() {
      if (this.loading) {
        return
      }
      if (this.step > 1) {
        this.step = this.step - 1
      } else {
        this.$router.replace('/welcome')
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    handleChange(form) {
      this.$refs[form].reset()
    },
    async nextStep() {
      let validated
      switch (this.step) {
        case 1:
          validated = await this.$refs.email.validate()

          if (!validated) {
            return false
          }
          try {
            this.loading = true
            const account = await this.$store.dispatch('user/createAccount', {
              email: this.email,
            })
            console.log(account)

            if (!account.email_verified) {
              this.step = 2
            }

            if (account.email_verified && !account.account_finalized) {
              this.step = 3
            }

            if (
              account.email_verified &&
              account.account_finalized &&
              account.profiles.length < 1
            ) {
              this.firstname = account.first_name
              this.lastname = account.last_name
              this.step = 4
            }

            if (
              account.email_verified &&
              account.account_finalized &&
              account.profiles.length > 0
            ) {
              this.accountExists = true
            }
            // this.step = 2
            this.loading = false
          } catch (error) {
            this.loading = false
            console.log(error.response)
            window.alertify.error(error.response.data)
          }

          break
        case 2:
          validated = await this.$refs.code.validate()

          if (!validated) {
            return false
          }
          try {
            this.loading = true
            let code = await this.$store.dispatch('user/verifyCode', {
              email: this.email,
              code: this.code,
            })

            if (code instanceof Error) throw new Error(code)
            this.step = 3
            window.alertify.success('Email successfully verified')
            this.loading = false
          } catch (error) {
            this.loading = false
            console.log(error.response)
            window.alertify.error(error.response.data)
          }
          break
        case 3:
          validated = await this.$refs.addPassword.validate()

          if (!validated) {
            return false
          }

          try {
            this.loading = true
            const updatePass = await this.$store.dispatch(
              'user/updatePassword',
              {
                email: this.email,
                password: this.password,
              }
            )
            if (updatePass instanceof Error) throw new Error(updatePass)
            this.step = 4
            this.loading = false
            // window.alertify.success('Password successfully added')
          } catch (error) {
            this.loading = false
            console.log(error.response)
            window.alertify.error(error.response.data)
          }
          break
        case 4:
          validated = await this.$refs.names.validate()

          if (!validated) {
            return false
          }
          this.step = 5
          break
        case 5:
          validated = await this.$refs.child.validate()

          if (!validated) {
            return false
          }
          this.step = 6
          break
        case 6:
          if (this.selectedAvatar == '') {
            window.alertify.error('Please select an avatar')
            return
          }
          this.step = 7
          break
        case 7:
          if (this.selectedLang == '') {
            window.alertify.error('Please select a language')
            return
          }
          this.step = 8
          break
        case 8:
          this.loading = true
          const today = new Date()
          console.log(today.toISOString(), '//////TODAY')
          const payload = {
            email: this.email,
            first_name: this.firstname,
            last_name: this.lastname,
            profiles: [
              {
                name: this.childs_name,
                age: this.selectedAge,
                avatar: this.selectedAvatar,
                primary_language: this.selectedLang,
              },
            ],
            subscription_started: today.toISOString(),
            terms_agreed_date: today.toISOString(),
            terms_version: this.terms.updated_at,
          }
          try {
            const res = await this.$store.dispatch('user/signUp', payload)

            if (res instanceof Error) throw new Error(res)
            this.step = 9
            window.alertify.success('Signed up successfully')
            this.loading = false
          } catch (error) {
            console.log(error.response)
            window.alertify.error(error.response.data)
            this.loading = false
          }
          break
        case 9:
          break
      }
    },
    setSelectedAge(age) {
      this.selectedAge = age
    },
    setSelectedavatar(item) {
      this.selectedAvatar = item
    },
    setSelectedLang(item) {
      this.selectedLang = item
    },
    async resendCode() {
      this.loading = true
      try {
        await this.$store.dispatch('user/sendCode', { email: this.email })
        this.loading = false
      } catch (error) {
        console.log(error.response)
        window.alertify.error(error.response.data)
        this.loading = false
      }
    },
    async login() {
      if (this.email == '' || this.password == '') {
        this.$router.replace('/login')
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

<style></style>
