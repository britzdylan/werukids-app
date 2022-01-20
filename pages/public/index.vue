<template>
  <div>
    <div
      class="
        flex flex-row
        items-center
        justify-center
        py-2
        px-12
        bg-primary
        w-full
        text-white
        font-bold
        text-center
        md:text-sm
      "
    >
      <p>This is a demo - Sign up for the full experience!</p>
    </div>
    <header class="desktopHeader">
      <div class="w-32">
        <img class="h-6" src="/logo/main.svg" alt="" />
      </div>
      <nav class="flex flex-row items-center justify-center mx-auto">
        <router-link class="navItem" to="/public"> Books </router-link>

        <!-- <router-link
          :class="this.currentRoute == 'games' ? 'activeLink' : ''"
          class="navItem"
          to="/games"
        >
          Games
        </router-link>
        <router-link
          :class="this.currentRoute == 'videos' ? 'activeLink' : ''"
          class="navItem"
          to="/videos"
        >
          Videos
        </router-link>
        <router-link
          :class="this.currentRoute == 'profile' ? 'activeLink' : ''"
          class="navItem"
          to="/profile"
        >
          Profile
        </router-link> -->
      </nav>
      <div class="flex flex-row items-center w-auto">
        <router-link
          to="/signup"
          class="navItem bg-secondary py-3 rounded-xl text-white px-6"
        >
          Sign Up
        </router-link>
      </div>
    </header>
    <main class="subpage pb-12">
      <!-- <loader v-if="this.loading" /> -->
      <div class="pageBanner">
        <img class="w-full" src="/images/read.jpg" alt="" />
      </div>
      <div class="lg:max-w-screen-lg lg:mx-auto p-4 w-full">
        <div id="allBooks">
          <div class="booksContainer">
            <router-link class="singleBook" to="/public/book/1">
              <img src="/images/book_cover.PNG" alt="" />
              <div class="bookDetails">
                <p style="color: #f55c4a">Book Title</p>
                <small class="uppercase mr-0">English, Sotho </small>
              </div>
              <div class="actions">
                <svg
                  class="transform rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9632 5L8.99999 11.9632L15.9632 18.9263"
                    stroke="#F55C4A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </router-link>
            <router-link class="singleBook" to="/public/book/2">
              <img src="/images/book_cover.PNG" alt="" />
              <div class="bookDetails">
                <p style="color: #f55c4a">Book Title</p>
                <small class="uppercase mr-0">English, Sotho </small>
              </div>
              <div class="actions">
                <svg
                  class="transform rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9632 5L8.99999 11.9632L15.9632 18.9263"
                    stroke="#F55C4A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <nav
      class="
        justify-center
        flex flex-row
        items-center
        fixed
        bottom-0
        h-auto
        left-0
        right-0
        py-4
      "
    >
      <!-- <router-link to="/">
        <div class="mobileNavItem" id="home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="
                #FFC000
              "
              fill="transparent"
              stroke-width="1"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
      </router-link> -->
      <div class="flex flex-row items-center w-full">
        <router-link
          to="/signup"
          class="
            navItem
            text-center
            w-full
            bg-secondary
            py-3
            rounded-xl
            text-white
            px-6
          "
        >
          Sign Up
        </router-link>
      </div>
      <!-- <router-link to="/games">
        <div class="mobileNavItem" i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              :stroke="
                this.currentRoute == 'games' ? this.activeStroke : this.idle
              "
              :fill="
                this.currentRoute == 'games' ? this.activeFill : 'transparent'
              "
              stroke-width="1"
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
        </div>
      </router-link> -->

      <!-- <router-link to="/videos">
        <div class="mobileNavItem" id="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              :stroke="
                this.currentRoute == 'videos' ? this.activeStroke : this.idle
              "
              :fill="
                this.currentRoute == 'videos' ? this.activeFill : 'transparent'
              "
              stroke-width="1"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
      </router-link> -->
      <!-- <router-link to="/profile">
        <div class="mobileNavItem" id="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              :stroke="
                this.currentRoute == 'profile' ? this.activeStroke : this.idle
              "
              :fill="
                this.currentRoute == 'profile' ? this.activeFill : 'transparent'
              "
              stroke-width="1"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </router-link> -->
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Public',
  layout: 'public',
}
</script>
<style>
.fab {
  @apply mx-auto w-5/6 lg:w-72;
}

.pageBanner {
  @apply w-full lg:w-3/6 lg:rounded-xl mx-auto lg:my-2 shadow-sm overflow-hidden;
}
</style>
