export default {
  GET_LOGO(state) {
    return {
      nickName: state.logo.nick_name,
      groom: state.logo.groom,
      bride: state.logo.bride,
    }
  },
}
