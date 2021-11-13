<template>
  <main class="subpage pb-12">
    <div v-show="this.showFilter" class="bookFilterContainer">
      <div class="bookFilter">
        <h3 class="font-display font-bold mb-4">Filter By</h3>
        <p>Language</p>
        <div class="languagesSelectedContainer hideScrollbar">
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">English</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Afrikaans</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
          <label class="checkboxContainer">
            <input v-model="marketing" name="marketing" type="checkbox" />
            <span class="checkmark"></span>
            <label class="ml-4" for="marketing">Sotho</label>
          </label>
        </div>
        <button
          @click="applyFilters"
          style="margin-top: auto; min-height: 4rem"
          class="btn bg-secondary mt-auto mx-auto"
        >
          Apply
        </button>
      </div>
    </div>
    <header>
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Read</p>
    </header>
    <div class="lg:max-w-6xl lg:mx-auto p-4">
      <div id="myBooks">
        <header class="learnHeader">
          <h3 class="learnTitle">My Books</h3>
          <img
            class="cursor-pointer"
            @click="this.toggleMyBooks"
            v-show="this.showMyBooks"
            src="/icons/View.svg"
            alt=""
          />
          <img
            class="cursor-pointer"
            @click="this.toggleMyBooks"
            v-show="!this.showMyBooks"
            src="/icons/Hide.svg"
            alt=""
          />
        </header>

        <main class="booksContainer" v-show="this.showMyBooks">
          <template v-for="book in books">
            <router-link
              class="singleBook"
              :key="book.id + '_mybooks'"
              :to="`/read/${book.id}`"
            >
              <img :src="book.thumb" alt="" />
              <div v-if="book.isRead" class="isread">
                <img src="/icons/Initial.svg" alt="" />
              </div>
            </router-link>
          </template>
        </main>
      </div>
      <div id="allBooks">
        <header class="learnHeader">
          <h3 class="learnTitle">All Books</h3>
          <img
            class="cursor-pointer"
            @click="() => (this.showFilter = true)"
            src="/icons/filter.svg"
            alt=""
          />
        </header>
        <div
          class="
            flex flex-row
            items-center
            my-2
            overflow-y-scroll
            px-2
            hideScrollbar
            lg:flex-wrap
          "
          id="bookFilters"
        >
          <template v-for="(filter, index) in filters">
            <span :key="index + '_filter'" class="pill">{{ filter }}</span>
          </template>
        </div>
        <div class="booksContainer">
          <template v-for="book in books">
            <router-link
              class="singleBook"
              :key="book.id + '_allbooks'"
              :to="`/read/${book.id}`"
            >
              <img :src="book.thumb" alt="" />
              <div v-if="book.isRead" class="isread">
                <img src="/icons/Initial.svg" alt="" />
              </div>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'readBrowse',
  data() {
    return {
      showFilter: false,
      showMyBooks: false,
      filters: [
        'English',
        'Afrikaans',
        'Zulu',
        'English',
        'Afrikaans',
        'Zulu',
        'English',
        'Afrikaans',
        'Zulu',
      ],
      books: [
        {
          thumb:
            'https://cdn.heyzine.com/files/uploaded/500b260ef6e61448e92b08ea76c8118901176fd1.pdf-thumb.jpg',
          id: 1,
          isRead: true,
        },
        {
          thumb:
            'https://cdn.heyzine.com/files/uploaded/500b260ef6e61448e92b08ea76c8118901176fd1.pdf-thumb.jpg',
          id: 2,
          isRead: false,
        },
        {
          thumb:
            'https://cdn.heyzine.com/files/uploaded/500b260ef6e61448e92b08ea76c8118901176fd1.pdf-thumb.jpg',
          id: 3,
          isRead: false,
        },
        {
          thumb:
            'https://cdn.heyzine.com/files/uploaded/500b260ef6e61448e92b08ea76c8118901176fd1.pdf-thumb.jpg',
          id: 4,
          isRead: false,
        },
      ],
    }
  },
  methods: {
    applyFilters() {
      this.showFilter = false
    },
    goBack() {
      this.$router.replace('/')
    },
    toggleMyBooks() {
      this.showMyBooks = !this.showMyBooks
    },
  },
}
</script>
<style>
.booksContainer {
  @apply grid lg:grid-cols-2 gap-4  gap-y-12 grid-cols-1 my-4 justify-items-center;
}
.learnTitle {
  @apply font-display font-bold;
}

.learnHeader {
  @apply flex flex-row items-center justify-between w-full py-4 border-b;
}

.singleBook {
  @apply block relative w-full;
  max-width: 400px;
}

.isread {
  @apply absolute top-0 bottom-0 left-0 right-0 bg-white bg-opacity-75 flex flex-row items-center justify-center;
}

.bookFilterContainer {
  @apply fixed top-0 left-0 right-0 bottom-0 z-50 bg-white bg-opacity-80 blur-xl lg:flex flex-col items-center justify-center;
}
.bookFilter {
  @apply fixed lg:static z-50 bg-white p-4  rounded-md flex flex-col;
  box-shadow: 0px 0px 8px #ffc000;
  top: 2rem;
  bottom: 2rem;
  right: 2rem;
  left: 2rem;
}

.pill {
  @apply p-1 rounded-full w-24 text-center block bg-secondary mr-2 lg:my-2;
  min-width: 6rem;
}

.languagesSelectedContainer {
  @apply lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center lg:flex-wrap lg:mb-8 overflow-x-scroll;
}
</style>
