const initialState = () => ({
  terms: null,
  languages: [],
  books: [],
  categories: [],
})

export const state = initialState

export const getters = {
  getTerms(state) {
    return state.terms
  },
  getLanguages(state) {
    return state.languages
  },
  getBooks(state) {
    return state.books
  },
  getCategories(state) {
    return state.categories
  },
}
export const mutations = {
  setTerms(state, payload) {
    state.terms = payload
  },
  setBooks(state, payload) {
    state.books = payload
  },
  setLang(state, payload) {
    state.languages = payload
  },
  setCategories(state, payload) {
    state.categories = payload
  },
}
export const actions = {
  async fetchTerms(context, payload) {
    return await fetch(`${new URL(process.env.strapiUrl)}terms-and-conditions`)
      .then((response) => response.json())
      .then((data) => context.commit('setTerms', data))
  },
  async fetchBooks(context, payload) {
    return await fetch(`${new URL(process.env.strapiUrl)}books`)
      .then((response) => response.json())
      .then((data) => {
        context.commit('setBooks', data)
        return data
      })
  },
  async fetchBook(context, payload) {
    return await fetch(`${new URL(process.env.strapiUrl)}books/${payload}`)
      .then((response) => response.json())
      .then((data) => {
        return data
      })
  },
  async fetchLang(context, payload) {
    return await fetch(`${new URL(process.env.strapiUrl)}languages`)
      .then((response) => response.json())
      .then((data) => context.commit('setLang', data))
  },
  async fetchCategories(context, payload) {
    return await fetch(`${new URL(process.env.strapiUrl)}book-categories`)
      .then((response) => response.json())
      .then((data) => {
        context.commit('setCategories', data)
        return data
      })
  },
}
