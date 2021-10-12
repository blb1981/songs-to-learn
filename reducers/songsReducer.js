const initialState = []

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state]
    default:
      return []
  }
}

export default songsReducer
