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
                <p style="color: #f55c4a">Titile</p>
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
                <p style="color: #f55c4a">Titile</p>
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
