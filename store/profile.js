const initialState = () => ({ currentProfile: null, profiles: [] })

export const state = initialState

export const getters = {
  getCurrentProfile(state) {
    return state.currentProfile
  },
  getAllProfiles(state) {
    return state.profiles
  },
}
export const mutations = {
  setCurrentProfile(state, payload) {
    state.currentProfile = payload
  },
  setProfiles(state, payload) {
    state.profiles = payload
  },
}
export const actions = {
  async getUser(context, payload) {
    return await this.$axios.get(`/user`).then((res) => {
      // context.commit('setCurrentProfile', res.data.user.profiles[0])

      context.commit('setProfiles', res.data.user.profiles)
      return res.data
    })
  },
  async addNewProfile(context, payload) {
    return await this.$axios.post('/profile/add', payload).then((res) => {
      return res.data
    })
  },
  async updateProfile(context, payload) {
    return await this.$axios.post('/profile/update', payload).then((res) => {
      return res.data
    })
  },
  async deleteProfile(context, payload) {
    return await this.$axios
      .delete('/profile/delete', { data: payload })
      .then((res) => {
        return res.data
      })
  },
  async switchProfile(context, payload) {
    console.log(payload)
    context.commit('setCurrentProfile', payload)
  },
  async trackBook(context, payload) {
    return await this.$axios
      .post('/profile/track/books', payload)
      .then((res) => {
        return res.data
      })
  },
}
