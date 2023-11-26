import Vuex from 'vuex'

import { storeCountDown } from './CountDown'
import { storeLogo } from '~/store/logo'
import { storeMenus } from '~/store/menus'
import { storeSliders } from '~/store/sliders'

const store = () =>
  // eslint-disable-next-line import/no-named-as-default-member
  new Vuex.Store({
    modules: {
      storeLogo,
      storeMenus,
      storeSliders,
      storeCountDown,
    },
  })

export default store
