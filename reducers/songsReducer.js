const initialState = []

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [action.payload, ...state]
    case 'UPDATE_SONG':
      return state.map((song) => {
        if (song.id === action.payload.id) {
          return action.payload
        }
      })
    case 'DELETE_SONG':
      return state.filter((song) => song.id !== action.payload)
    default:
      return state
  }
}

export default songsReducer
