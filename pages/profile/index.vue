<template>
  <main class="subpage">
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
    </header>
    <section class="" v-show="this.step == 0">
      <div
        class="w-80 grid grid-cols-2 gap-y-8 justify-items-center mt-16 mx-auto"
      >
        <template v-for="item in profiles">
          <div :key="'profile_' + item" class="selectedAvatar w-64 relative">
            <img
              v-show="showEdit"
              src="/icons/Edit.svg"
              class="h-6 w-6 absolute top-0 right-0 cursor-pointer"
              alt=""
              @click="editProfile"
            />
            <img :src="`/avatars/${item}.svg`" alt="" />
          </div>
        </template>
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
        Please Choose a primary language preference for Adeena
      </p>
      <div class="">
        <template v-for="item in lang">
          <div
            @click="setSelectedLang(item)"
            :key="'lang_' + item"
            :class="selectedLang == item ? 'langSelected' : 'lang'"
          >
            {{ item }}
          </div>
        </template>
      </div>
    </section>
    <section v-show="this.step == 3">
      <p class="text-center">Please choose an avatar, for Adeena</p>
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
        v-if="this.step == 3"
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
      age: [1, 2, 3, 4, 5, 6],
      avatars: [
        'boy_1',
        'boy_2',
        'boy_3',
        'girl_1',
        'girl_2',
        'girl_3',
        'girl_4',
      ],
      profiles: ['boy_1', 'girl_3', 'girl_4'],
      lang: ['english', 'afrikaans', 'zulu', 'venda'],
      selectedLang: '',
      selectedAge: 0,
      selectedAvatar: '',
      showEdit: false,
    }
  },
  methods: {
    goBack() {
      if (this.step > 1) {
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
          validated = await this.$refs.email.validate()

          if (!validated) {
            return false
          }
          break
        case 2:
          validated = await this.$refs.code.validate()

          if (!validated) {
            return false
          }
          break
        case 3:
          validated = await this.$refs.addPassword.validate()

          if (!validated) {
            return false
          }
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
    async editProfile(id) {
      try {
        return true
        // fetch profile
        // update state
        // move to next step
      } catch (error) {
        console.log(error)
      }
    },
    async addUpdateProfile() {
      return true
    },
  },
}
</script>
<style></style>
