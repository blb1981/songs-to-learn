const initialState = {
  text: '',
  showCompleted: false,
}

const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: payload,
      }
    case 'SET_SHOW_COMPLETED':
      return {
        ...state,
        showCompleted: payload,
      }
    default:
      return state
  }
}

export default filtersReducer
