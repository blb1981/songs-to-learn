const initialState = []

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [action.payload, ...state]
    case 'DELETE_SONG':
      return state.filter((song) => song.songId !== action.payload)
    default:
      return []
  }
}

export default songsReducer
