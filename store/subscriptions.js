const initialState = () => ({})

export const state = initialState

export const getters = {}
export const mutations = {}
export const actions = {
  async getSubscriptions(context, payload) {
    return await this.$axios.get(`/subscriptions`).then((res) => {
      return res.data
    })
  },
  async updateSubscription(context, payload) {
    return await this.$axios
      .post(`/subscriptions/update`, payload)
      .then((res) => {
        return res.data
      })
  },
}
