<template>
  <main class="subpage pb-12">
    <loader v-if="this.loading" />
    <!-- <div v-show="this.showFilter" class="bookFilterContainer">
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
    </div> -->
    <header v-if="!this.loading">
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Read</p>
    </header>
    <div v-if="!this.loading" class="lg:max-w-6xl lg:mx-auto p-4">
      <div id="allBooks">
        <header class="learnHeader">
          <!-- <h3 class="learnTitle">All Books</h3> -->
          <div
            id="categories"
            class="hideScrollbar flex flex-row items-center w-full"
          >
            <template v-for="item in categories">
              <div
                @click="setSelectedCategory(item.id)"
                :key="item.id + '_category'"
              >
                <div
                  :class="selectedCategory == item.id ? 'selected' : ''"
                  class="category"
                >
                  <img :src="`${strapiUrl}${item.cover.url}`" alt="" />
                </div>
                <p>{{ item.Title }}</p>
              </div>
            </template>
          </div>
          <!-- <img
            class="cursor-pointer"
            @click="() => (this.showFilter = true)"
            src="/icons/filter.svg"
            alt=""
          /> -->
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
          <template v-for="(filter, index) in languages">
            <span
              @click="setSelectedLang(filter.id)"
              :key="index + '_filter'"
              :class="selectedLang == filter.id ? 'pillselected' : 'pill'"
              >{{ filter.Title }}</span
            >
          </template>
        </div>
        <div class="booksContainer">
          <template v-for="book in displayBooks">
            <router-link
              class="singleBook"
              :key="book.id + '_allbooks'"
              :to="`/read/${book.id}`"
            >
              <img :src="`${strapiUrl}${book.cover.url}`" alt="" />
              <!-- <div v-if="book.isRead" class="isread">
                <img src="/icons/Initial.svg" alt="" />
              </div> -->
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
      loading: true,
      showFilter: false,
      showMyBooks: false,
      selectedCategory: null,
      selectedLang: null,
      filteredBooks: [],
      displayBooks: [],
    }
  },
  computed: {
    books() {
      return this.$store.getters['content/getBooks']
    },
    languages() {
      return this.$store.getters['content/getLanguages']
    },
    categories() {
      return this.$store.getters['content/getCategories']
    },
    strapiUrl() {
      return process.env.strapiUrl.trim()
    },
  },
  mounted() {
    this.getBooks()
    this.getCategories()
  },
  methods: {
    async getBooks() {
      this.loading = true
      try {
        let res = await this.$store.dispatch('content/fetchBooks')
        if (res instanceof Error) throw new Error(res)
        this.setSelectedLang(
          this.$store.state.profile.currentProfile.primary_language
        )
        this.filteredBooks = []
        res.map((item) => {
          item.languages.map((lang) => {
            if (lang.id == this.selectedLang) {
              this.filteredBooks.push(item)
            }
          })
        })
        this.displayBooks = [...this.filteredBooks]
        this.loading = false
      } catch (error) {
        console.log(error)
        window.alertify.error(
          'Oops something went wrong, please try again later'
        )
        this.loading = false
      }
    },
    async getCategories() {
      this.loading = true
      try {
        let res = await this.$store.dispatch('content/fetchCategories')
        if (res instanceof Error) throw new Error(res)
        this.loading = false
      } catch (error) {
        console.log(error)
        window.alertify.error(
          'Oops something went wrong, please try again later'
        )
        this.loading = false
      }
    },
    applyFilters() {
      this.showFilter = false
    },
    goBack() {
      this.$router.replace('/')
    },
    toggleMyBooks() {
      this.showMyBooks = !this.showMyBooks
    },
    setSelectedCategory(id) {
      this.selectedCategory = id
      if (id == null) {
        this.displayBooks = [...this.filteredBooks]
      } else {
        this.displayBooks = this.filteredBooks.filter(
          (item) => item.book_category.id == id
        )
      }
    },
    setSelectedLang(id) {
      console.log(id)
      this.selectedLang = id
      this.filteredBooks = []
      this.books.map((item) => {
        item.languages.map((lang) => {
          if (lang.id == id) {
            this.filteredBooks.push(item)
          }
        })
      })
      this.setSelectedCategory(this.selectedCategory)
    },
  },
}
</script>
<style>
#categories {
  @apply w-full overflow-y-scroll;
}
.category {
  @apply w-16 h-16 bg-primaryLight mr-12 cursor-pointer;

  border-radius: 76% 51% 53% 58% / 57% 57% 53% 61%;
}

.selected {
  @apply bg-secondary;
}
.booksContainer {
  @apply grid lg:grid-cols-6 gap-4  gap-y-12 sm:grid-cols-4 grid-cols-2 my-4 justify-items-center;
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
  @apply p-1 rounded-full w-24 text-center block  bg-inputBg mr-2 lg:my-2 cursor-pointer;
  min-width: 6rem;
}

.pillselected {
  @apply p-1 rounded-full w-24 text-center block  bg-secondary mr-2 lg:my-2 cursor-pointer;
  min-width: 6rem;
}

.languagesSelectedContainer {
  @apply lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center lg:flex-wrap lg:mb-8 overflow-x-scroll;
}
</style>
