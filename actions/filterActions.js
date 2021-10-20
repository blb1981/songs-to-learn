export const setTextFilter =
  (text = '') =>
  (dispatch) => {
    dispatch({ type: 'SET_TEXT_FILTER', payload: text })
  }
