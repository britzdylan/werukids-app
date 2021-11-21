const initialState = () => ({})

export const state = initialState

export const getters = {}
export const mutations = {}
export const actions = {
  // async getSubscriptions(context, payload) {
  //   return await this.$axios.get(`/subscriptions`).then((res) => {
  //     return res.data
  //   })
  // },
  // async updateSubscription(context, payload) {
  //   return await this.$axios
  //     .post(`/subscriptions/update`, payload)
  //     .then((res) => {
  //       return res.data
  //     })
  // },
  // async updateBilling(context, payload) {
  //   return await this.$axios
  //     .post(`/subscriptions/billing/update`, payload)
  //     .then((res) => {
  //       return res.data
  //     })
  // },
  async initSubscription(context, payload) {
    return await this.$axios
      .post(`/subscriptions/init`, payload)
      .then((res) => {
        return res.data
      })
  },
  async verifyPayment(context, payload) {
    return await this.$axios
      .post(`/subscriptions/verify`, payload)
      .then((res) => {
        return res.data
      })
  },
  async manageSubscription(context, payload) {
    return await this.$axios
      .post(`/subscriptions/manage`, payload)
      .then((res) => {
        return res.data
      })
  },
}
