<template>
  <main
    v-if="this.currentProfile != null"
    class="max-w-7xl mx-auto lg:py-24 p-4 pb-24"
  >
    <security />

    <section v-show="this.step == 0">
      <div class="flex flex-col items-center justify-center mb-4">
        <div class="mr-8 cursor-pointer">
          <img
            class="w-14 h-14"
            :src="`/avatars/${this.currentProfile.avatar}.svg`"
            alt=""
          />
        </div>
        <h1 class="mr-4 text-4xl text-center">
          Hi {{ this.currentProfile.name }}
          <img
            src="/icons/Edit.svg"
            class="h-6 w-6 inline top-0 right-0 cursor-pointer"
            alt=""
            @click="() => editProfile(this.currentProfile)"
          />
        </h1>
      </div>
      <hr class="mb-4" />
      <section class="">
        <!-- <div>
        <h3 class=" mb-8">Today's Plan</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div
            style="background-image: url('/images/bookBG.png')"
            class="
              learnCard
              bg-primary
              lg:col-span-2
              bg-contain bg-bottom bg-no-repeat
            "
          >
            <p>Read</p>
            <button
              @click="() => this.$router.push('/read')"
              class="rounded-full bg-white text-body py-2 px-6 mt-8"
            >
              Start
            </button>
            <img src="/icons/read.svg" class="" alt="" />
          </div>
          <div class="learnCard bg-secondary opacity-40">
            <p>Play</p>
            <button class="rounded-full bg-white text-body py-2 px-6 mt-8">
              Coming Soon
            </button>
            <img src="/icons/play.svg" class="" alt="" />
          </div>
          <div class="learnCard bg-success opacity-40">
            <p>Watch</p>
            <button class="rounded-full bg-white text-body py-2 px-6 mt-8">
              Coming Soon
            </button>
            <img src="/icons/watch.svg" class="" alt="" />
          </div>
        </div>
      </div> -->
        <div>
          <h3 class="mb-8 text-center lg:text-left">Achievements</h3>
          <div class="grid lg:grid-cols-2 gap-4 items-start">
            <div
              id="starsEarned"
              class="
                flex flex-col
                items-center
                p-6
                rounded-xl
                bg-white
                shadow-sm
                mb-4
              "
            >
              <div class="w-full text-center">
                <!-- <small class="opacity-75 font-bold">You are level</small> -->
                <div class="text-center">
                  <h1 class="font-bold leading-8">Level 21</h1>
                </div>
                <small class="opacity-75 font-bold"
                  >You need 28 more stars to level up</small
                >

                <div
                  id="progress"
                  class="
                    relative
                    w-full
                    h-12
                    bg-gray-100
                    rounded-full
                    overflow-hidden
                    mt-4
                  "
                >
                  <div
                    class="
                      h-12
                      bg-primaryDark
                      flex flex-row
                      items-center
                      justify-center
                      text-white
                    "
                    style="width: 20%"
                  ></div>
                  <div
                    class="
                      flex flex-row
                      items-center
                      justify-center
                      absolute
                      top-0
                      left-0
                      right-0
                      bottom-0
                    "
                  >
                    <img
                      src="/icons/star.svg"
                      class="mx-1 h-4 w-4"
                      alt=""
                    /><img
                      src="/icons/star.svg"
                      class="mx-1 h-6 w-6"
                      alt=""
                    /><img src="/icons/star.svg" class="mx-1 h-4 w-4" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              id="badges"
              class="
                flex flex-row
                items-center
                p-6
                rounded-xl
                bg-white
                shadow-sm
              "
            >
              <div class="w-full text-center">
                <small class="opacity-75 font-bold">Badges Earned</small>
                <div
                  class="
                    grid grid-cols-3
                    gap-4
                    items-center
                    content-center
                    py-4
                  "
                >
                  <template v-for="item in badges">
                    <img
                      v-if="item < 4"
                      :key="item + 'badge'"
                      :src="`/badges/${item}.svg`"
                      class="mx-auto h-32 w-32"
                      alt=""
                    />
                    <img
                      v-if="item >= 4"
                      :key="item + 'badge'"
                      src="/badges/placeholder.svg"
                      class="mx-auto h-32 w-32"
                      alt=""
                    />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div class="subpage">
      <div class="text-center w-full flex flex-row items-center justify-center">
        <h3 class="capatilize" v-show="this.step > 0">
          {{ this.context }} profile
        </h3>
        <img
          v-show="
            this.context == 'Edit' && this.step > 0 && this.profiles.length > 1
          "
          @click="this.delete"
          class="h-6 w-6 cursor-pointer inline ml-6"
          src="/icons/Delete.svg"
          alt=""
        />
        <!-- <img
          @click="this.goBack"
          class="h-6 w-6 cursor-pointer"
          src="/icons/Close.svg"
          alt=""
        /> -->
      </div>
      <section v-show="this.step == 1">
        <p class="text-center">{{ this.context }} your childs name and age</p>
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
      <section v-show="this.step == 2">
        <p class="text-center">
          Please Choose a primary language preference for {{ this.childs_name }}
        </p>
        <div class="">
          <template v-for="item in languages">
            <div
              @click="setSelectedLang(item.id)"
              :key="'lang_' + item.id"
              :class="selectedLang == item.id ? 'langSelected' : 'lang'"
            >
              {{ item.Title }}
            </div>
          </template>
        </div>
      </section>
      <section v-show="this.step == 3">
        <p class="text-center">
          Please choose an avatar, for {{ this.childs_name }}
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
      <footer class="block" v-show="this.step > 0">
        <button
          v-if="this.step > 0 && this.step < 3"
          @click="nextStep"
          class="btn primary"
        >
          Next
        </button>
        <button
          v-show="this.step == 3 && !this.loading"
          @click="this.addUpdateProfile"
          class="btn primary"
        >
          Save
        </button>
        <button
          @click="() => (this.showEdit = true)"
          v-if="this.step == 0 && !this.showEdit"
          class="btn mt-auto block"
        >
          Edit Profile
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
      <button @click="() => (this.step = 0)" class="btn mt-auto block mx-auto">
        Cancel
      </button>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: 'home',
  data() {
    return {
      context: 'Add',
      step: 0,
      childs_name: '',
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
      // profiles: ['boy_1', 'girl_3', 'girl_4'],

      selectedLang: '',
      selectedAge: null,
      selectedAvatar: '',
      profileId: null,
      showEdit: false,
      loading: false,
    }
  },
  mounted() {
    if (this.$auth.user.billing.subscription_status == 'suspended') {
      this.$router.replace('/account/trail')
    }
    this.fetchContent()
    this.calcTrailTime()
  },
  methods: {
    calcTrailTime() {
      if (this.$auth.user.billing.subscription_status == 'trail') {
        const start_date = this.$auth.user.createdAt.toString()
        const today = new Date()
        console.log(today)
        const trailStarted = new Date(start_date)

        const difference = today.getTime() - trailStarted.getTime()
        const days = Math.ceil(difference / (1000 * 3600 * 24))
        console.log(days)
        const active = 7 - days > 0 ? true : false
        if (!active) {
          this.$router.replace('/account/trail')
        }
      }
    },
    async fetchContent() {
      try {
        let res = await this.$store.dispatch('content/fetchLang')
        if (res instanceof Error) throw new Error(res)
      } catch (error) {
        console.log(error)
        window.alertify.error(
          'Oops something went wrong, please try again later'
        )
      }
    },
    addProfile() {
      this.context = 'Add'
      this.$nuxt.$emit('security')
      //   this.step = 1
    },
    goBack() {
      if (this.step > 0) {
        this.step = this.step - 1
      } else {
        this.$router.replace('/')
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
          validated = await this.$refs.child.validate()

          if (!validated) {
            return false
          }
          if (this.selectedAge == null || !this.selectedAge) {
            window.alertify.error('Please choose an age')
            return
          }
          this.step++
          break
        case 2:
          if (this.selectedLang == null || !this.selectedLang) {
            window.alertify.error('Please choose language')
            return
          }
          this.step++

          break
        case 3:
          if (this.selectedAvatar == null || !this.selectedAvatar) {
            window.alertify.error('Please choose an avatar')
            return
          }
          this.step++

          break
        case 4:
          validated = await this.$refs.names.validate()

          if (!validated) {
            return false
          }
          break
        case 5:
          validated = await this.$refs.child.validate()

          if (!validated) {
            return false
          }
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
    profileOptions(item) {
      if (this.showEdit) {
        this.editProfile(item)
      }

      if (!this.showEdit) {
        this.switchProfile(item)
      }
    },
    async editProfile(item) {
      this.$nuxt.$emit('security')
      this.selectedAvatar = item.avatar
      this.selectedAge = item.age
      this.childs_name = item.name
      this.selectedLang = item.primary_language
      this.context = 'Edit'

      this.profileId = item._id
    },
    async resetLocalState() {
      this.selectedLang = ''
      this.selectedAge = null
      this.selectedAvatar = ''
      this.profileId = null
      this.childs_name = ''
    },
    async delete() {
      window.alertify
        .confirm(
          `Are you sure you want to delete ${this.childs_name}'s profile?`,
          async () => {
            this.loading = true

            try {
              let res = await this.$store.dispatch('profile/deleteProfile', {
                id: this.profileId,
              })
              if (res instanceof Error) throw new Error(res)
              res = this.$store.dispatch('profile/getUser')
              if (res instanceof Error) throw new Error(res)
              this.resetLocalState()
              await this.$auth.fetchUser()
              window.alertify.success('Profile successfully Deleted')
              this.loading = false
              this.step = 0
            } catch (error) {
              console.log(error)
              window.alertify.error(error.response.data)
              this.loading = false
            }
          }
        )
        .set('labels', { ok: 'DELETE', cancel: 'Cancel' })
    },
    async switchProfile(id) {
      await this.$store.dispatch('profile/switchProfile', id)
      this.$router.replace('/')
    },
    async addUpdateProfile() {
      this.loading = true
      const payload = {
        profile: {
          name: this.childs_name,
          age: this.selectedAge,
          avatar: this.selectedAvatar,
          primary_language: this.selectedLang,
        },
      }
      if (this.context == 'Add') {
        try {
          let res = await this.$store.dispatch('profile/addNewProfile', payload)
          if (res instanceof Error) throw new Error(res)
          res = this.$store.dispatch('profile/getUser')
          if (res instanceof Error) throw new Error(res)
          this.resetLocalState()
          await this.$auth.fetchUser()
          window.alertify.success('Profile successfully added')
          this.getUser()
          this.loading = false
          this.step = 0
        } catch (error) {
          console.log(error)
          window.alertify.error(error.response.data)
          this.loading = false
        }
      }

      if (this.context == 'Edit') {
        try {
          let res = await this.$store.dispatch('profile/updateProfile', {
            id: this.profileId,
            data: { ...payload.profile },
          })
          if (res instanceof Error) throw new Error(res)
          res = this.$store.dispatch('profile/getUser')
          if (res instanceof Error) throw new Error(res)
          this.resetLocalState()
          await this.$auth.fetchUser()
          window.alertify.success('Profile successfully updated')
          this.getUser()

          this.loading = false
          this.step = 0
        } catch (error) {
          console.log(error)
          window.alertify.error(error.response.data)
          this.loading = false
        }
      }
    },
    async getUser() {
      try {
        const res = await this.$store.dispatch('profile/getUser')
        if (res instanceof Error) throw new Error(res)
        const newProfile = res.user.profiles.filter(
          (profile) => profile.id == this.currentProfile.id
        )
        if (newProfile.length > 0) {
          this.$store.dispatch('profile/switchProfile', newProfile[0])
        }
      } catch (error) {
        console.log(error)
        window.alertify.error(error.response.data)
        this.loading = false
      }
    },
  },
  computed: {
    currentProfile() {
      return this.$store.getters['profile/getCurrentProfile']
    },
    profiles() {
      return this.$store.getters['profile/getAllProfiles']
    },
    languages() {
      return this.$store.getters['content/getLanguages']
    },
    badges() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
  },
  created() {
    this.$nuxt.$on('securityPassed', () => {
      this.step = 1
      console.log('securityPassed')
    })
  },
  destroyed() {
    this.$nuxt.$off('securityPassed')
  },
}
</script>

<style scoped>
.learnCard {
  @apply rounded-xl  p-4 w-full;
}

.learnCard > p {
  @apply text-left text-xl cursor-pointer text-white;
}
</style>
