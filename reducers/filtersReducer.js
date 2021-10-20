const initialState = {
  text: '',
}

const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: payload,
      }
    default:
      return state
  }
}

export default filtersReducer
