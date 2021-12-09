<template>
  <main v-if="this.profiles.length > 0" class="subpage">
    <security />
    <header>
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />
      <p v-show="this.step == 0">Switch profile</p>

      <p class="capatilize" v-show="this.step > 0">
        {{ this.context }} profile
      </p>
      <img
        v-show="
          this.context == 'Edit' && this.step > 0 && this.profiles.length > 1
        "
        @click="this.delete"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Delete.svg"
        alt=""
      />
    </header>
    <section class="" v-show="this.step == 0">
      <div
        class="w-80 grid grid-cols-2 gap-y-8 justify-items-center mt-16 mx-auto"
      >
        <template v-for="item in profiles">
          <div
            :key="'profile_' + item._id"
            class="selectedAvatar w-full relative cursor-pointer"
            @click="profileOptions(item)"
          >
            <img
              v-show="showEdit"
              src="/icons/Edit.svg"
              class="h-6 w-6 absolute top-0 right-0 cursor-pointer"
              alt=""
            />
            <img :src="`/avatars/${item.avatar}.svg`" alt="" />
            <p class="text-center">{{ item.name }}</p>
          </div>
        </template>
        <div
          @click="this.addProfile"
          v-if="this.profiles.length < 4"
          class="
            h-6
            w-6
            border-dashed border-2 border-primaryLight
            rounded-full
            flex flex-row
            items-center
            justify-center
            selectedAvatar
            cursor-pointer
          "
        >
          <img class="w-4 h-4 m-auto" src="/icons/Plus.svg" alt="" />
        </div>
      </div>
    </section>
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
    <footer>
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
      <button
        @click="() => (this.showEdit = false)"
        v-if="this.step == 0 && this.showEdit"
        class="btn mt-auto block"
      >
        Cancel
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
  components: {
    ValidationProvider,
    ValidationObserver,
  },
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
  computed: {
    profiles() {
      return this.$store.getters['profile/getAllProfiles']
    },
    languages() {
      return this.$store.getters['content/getLanguages']
    },
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
          this.loading = false
          this.step = 0
        } catch (error) {
          console.log(error)
          window.alertify.error(error.response.data)
          this.loading = false
        }
      }
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
<style></style>
