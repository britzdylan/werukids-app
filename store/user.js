const initialState = () => ({})

export const state = initialState

export const getters = {}
export const mutations = {}
export const actions = {
  // auth
  async createAccount(context, payload) {
    return await this.$axios.post(`/auth/create`, payload).then((res) => {
      return res.data
    })
  },
  async verifyCode(context, payload) {
    return await this.$axios.post(`/auth/code/verify`, payload).then((res) => {
      return res.data
    })
  },
  async sendCode(context, payload) {
    return await this.$axios.post(`/auth/code/send`, payload).then((res) => {
      return res.data
    })
  },
  async updatePassword(context, payload) {
    return await this.$axios
      .post(`/auth/password/update`, payload)
      .then((res) => {
        return res.data
      })
  },
  async signUp(context, payload) {
    return await this.$axios.post(`/auth/signup`, payload).then((res) => {
      return res.data
    })
  },
  async reset(context, payload) {
    return await this.$axios.post(`/auth/reset`, payload).then((res) => {
      return res.data
    })
  },

  async updateProfile(context, payload) {
    return await this.$axios.post(`/user/update`, payload).then((res) => {
      return res.data
    })
  },
  async updateNotifications(context, payload) {
    return await this.$axios
      .post(`/user/update/notifications`, payload)
      .then((res) => {
        return res.data
      })
  },
  async deleteAccount(context, payload) {
    return await this.$axios.delete(`/user/delete`, payload).then((res) => {
      return res.data
    })
  },
}
