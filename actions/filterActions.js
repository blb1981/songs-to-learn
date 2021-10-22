export const setTextFilter =
  (text = '') =>
  (dispatch) => {
    dispatch({ type: 'SET_TEXT_FILTER', payload: text })
  }
export const setShowCompletedFilter =
  (showCompleted = false) =>
  (dispatch) => {
    dispatch({ type: 'SET_SHOW_COMPLETED', payload: showCompleted })
  }
