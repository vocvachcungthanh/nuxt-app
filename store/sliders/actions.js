import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_GET_SLIDERS({ commit }) {
    try {
      const response = await axios.get('sliders')

      if (response.status === 200) {
        commit('SET_SLIDERS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
