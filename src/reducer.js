const reducer = (state, action) => {
  if (action.type === 'USER_LOGIN') {
    return {
      ...state,
      user: action.payload,
    }
  }
  if (action.type === 'USER_LOGOUT') {
    return {
      ...state,
      user: null,
    }
  }
}

export default reducer
