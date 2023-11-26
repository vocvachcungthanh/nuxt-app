import { Refuse } from '@/libraries/core/refuse'

const axios = new Refuse()

export default {
  async ACT_GET_MENU(context) {
    try {
      const response = await axios.get('menus')

      if (response.status === 200) {
        context.commit('SET_MENUS', response.data)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
