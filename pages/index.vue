<template>
  <main class="subpage pb-12">
    <loader v-if="this.loading" />
    <!-- <header v-if="!this.loading">
      <img
        @click="this.goBack"
        class="h-6 w-6 cursor-pointer"
        src="/icons/Back.svg"
        alt=""
      />

      <p>Let's Read</p>
    </header> -->
    <div class="pageBanner">
      <img class="w-full" src="/images/read.jpg" alt="" />
    </div>
    <button @click="() => (this.showFilter = true)" class="btn primary fab">
      Change Language
    </button>
    <div v-show="this.showFilter" class="bookFilterContainer">
      <div class="bookFilter">
        <h3 class="font-bold mb-4">Change Language</h3>

        <div class="languagesSelectedContainer hideScrollbar">
          <template v-for="lang in this.languages">
            <label :key="lang.id + '_'" class="checkboxContainer">
              <input
                @change="changeLangFilter(lang.id)"
                name="language"
                type="checkbox"
                :checked="isSelected(lang.id)"
              />
              <span class="checkmark"></span>
              <label class="ml-4" for="language">{{ lang.Title }}</label>
            </label>
          </template>
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
    <div v-if="!this.loading" class="lg:max-w-screen-lg lg:mx-auto p-4 w-full">
      <div id="allBooks">
        <div class="booksContainer">
          <template v-for="book in filteredBooks">
            <router-link
              class="singleBook"
              :key="book.id + '_allbooks'"
              :to="`/read/${book.id}`"
            >
              <img :src="`${strapiUrl}${book.cover.url}`" alt="" />
              <div class="bookDetails">
                <p>{{ book.Title }}</p>
                <template v-for="(lang, index) in book.languages">
                  <small class="uppercase mr-0" :key="lang.id + '_lang'"
                    >{{ lang.Title
                    }}<span v-if="book.languages.length > index + 1">,</span>
                  </small>
                </template>
              </div>
              <div class="actions">
                <img
                  class="rotate-180 transform h-12"
                  src="/icons/Back.svg"
                  alt=""
                />
              </div>

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
  name: 'Read',
  layout: 'home',
  data() {
    return {
      loading: true,
      showFilter: false,
      selectedLang: [],
      filteredBooks: [],
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
    if (this.$auth.user.billing.subscription_status == 'suspended') {
      this.$router.replace('/account/trail')
    }
    this.getBooks()
    // this.getCategories()
    this.calcTrailTime()
  },
  methods: {
    isSelected(id) {
      return this.selectedLang.includes(id)
    },
    calcTrailTime() {
      if (this.$auth.user.billing.subscription_status == 'trail') {
        const start_date = this.$auth.user.createdAt.toString()
        const today = new Date()
        console.log(today)
        const trailStarted = new Date(start_date)

        const difference = today.getTime() - trailStarted.getTime()
        const days = Math.ceil(difference / (1000 * 3600 * 24))
        console.log(days, 'days')
        const active = 7 - days > 0 ? true : false
        if (!active) {
          this.$router.replace('/account/trail')
        }
      }
    },
    async getBooks() {
      this.loading = true
      try {
        let res = await this.$store.dispatch('content/fetchBooks')
        if (res instanceof Error) throw new Error(res)
        this.selectedLang.push(
          this.$store.state.profile.currentProfile.primary_language
        )
        this.filteredBooks = []
        res.map((item) => {
          item.languages.map((lang) => {
            if (this.selectedLang.includes(lang.id)) {
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
    // async getCategories() {
    //   this.loading = true
    //   try {
    //     let res = await this.$store.dispatch('content/fetchCategories')
    //     if (res instanceof Error) throw new Error(res)
    //     this.loading = false
    //   } catch (error) {
    //     console.log(error)
    //     window.alertify.error(
    //       'Oops something went wrong, please try again later'
    //     )
    //     this.loading = false
    //   }
    // },
    changeLangFilter(id) {
      const hasId = this.selectedLang.includes(id)
      if (!hasId) {
        this.selectedLang.push(id)
      }

      if (hasId) {
        this.selectedLang.map((item, index) => {
          if (item == id) {
            this.selectedLang.splice(index, 1)
          }
        })
      }
    },
    applyFilters() {
      this.filteredBooks = []
      this.books.map((item) => {
        item.languages.map((lang) => {
          if (this.selectedLang.includes(lang.id)) {
            this.filteredBooks.push(item)
          }
        })
      })
      this.showFilter = false
    },
    goBack() {
      this.$router.replace('/')
    },
    // toggleMyBooks() {
    //   this.showMyBooks = !this.showMyBooks
    // },
    // setSelectedCategory(id) {
    //   console.log(id)

    //   if (!id) {
    //     console.log('No ID')
    //     this.selectedCategory = null
    //     this.displayBooks = [...this.filteredBooks]
    //   } else {
    //     this.selectedCategory = id
    //     this.displayBooks = this.filteredBooks.filter(
    //       (item) => item.book_category.id == id
    //     )
    //   }
    // },
    // setSelectedLang(id) {
    //   console.log(id)
    //   this.selectedLang = id
    //   this.filteredBooks = []
    //   this.books.map((item) => {
    //     item.languages.map((lang) => {
    //       if (lang.id == id) {
    //         this.filteredBooks.push(item)
    //       }
    //     })
    //   })
    //   this.setSelectedCategory(this.selectedCategory)
    // },
  },
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
