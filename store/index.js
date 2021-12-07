const initialState = () => ({
  trailActive: null,
})

export const state = initialState

export const getters = {}
export const mutations = {
  setTrail(state, payload) {
    state.trailActive = payload
  },
}
export const actions = {
  async submitRating(context, payload) {
    return await this.$axios.post('/rating/add', payload).then((res) => {
      return res.data
    })
  },
}
