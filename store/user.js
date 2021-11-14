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
}
