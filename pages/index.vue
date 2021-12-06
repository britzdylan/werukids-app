<template>
  <main
    v-if="this.currentProfile != null"
    class="max-w-7xl mx-auto lg:py-24 p-4 pb-24"
  >
    <div class="flex flex-row items-center mb-4">
      <h1 class="font-display mr-4">Hi {{ this.currentProfile.name }}</h1>
      <div class="mr-8 cursor-pointer">
        <img
          class="w-14 h-14"
          :src="`/avatars/${this.currentProfile.avatar}.svg`"
          alt=""
        />
      </div>
    </div>
    <hr class="mb-4" />
    <section class="grid lg:grid-cols-2 gap-4 items-stretch">
      <div>
        <h3 class="font-display mb-8">Today's Plan</h3>
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
            <!-- <img src="/icons/read.svg" class="" alt="" /> -->
          </div>
          <div class="learnCard bg-secondary opacity-40">
            <p>Play</p>
            <button class="rounded-full bg-white text-body py-2 px-6 mt-8">
              Coming Soon
            </button>
            <!-- <img src="/icons/play.svg" class="" alt="" /> -->
          </div>
          <div class="learnCard bg-success opacity-40">
            <p>Watch</p>
            <button class="rounded-full bg-white text-body py-2 px-6 mt-8">
              Coming Soon
            </button>
            <!-- <img src="/icons/watch.svg" class="" alt="" /> -->
          </div>
        </div>
      </div>
      <div>
        <h3 class="font-display mb-8">Achievements</h3>
        <div>
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
                <h1 class="font-bold font-display leading-8">Level 21</h1>
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
                  <img src="/icons/star.svg" class="mx-1 h-4 w-4" alt="" /><img
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
            class="flex flex-row items-center p-6 rounded-xl bg-white shadow-sm"
          >
            <div class="w-full text-center">
              <small class="opacity-75 font-bold">Badges Earned</small>
              <div
                class="grid grid-cols-3 gap-4 items-center content-center py-4"
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
  </main>
</template>

<script>
export default {
  layout: 'home',
  computed: {
    currentProfile() {
      return this.$store.getters['profile/getCurrentProfile']
    },
    badges() {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
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
