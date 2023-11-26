import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_COUNT_DOWN({ commit }) {
    try {
      const response = await axios.get('count-down')

      if (response.status === 200) {
        commit('SET_COUNT_DOWN', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
