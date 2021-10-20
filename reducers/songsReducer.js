const initialState = []

const songsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_SONG':
      return [payload, ...state]
    case 'UPDATE_SONG':
      return state.map((song) => {
        if (payload.id !== song.id) {
          return song
        }
        return {
          ...song,
          ...payload.updatedSong,
        }
      })

    // return state
    case 'DELETE_SONG':
      return state.filter((song) => song.id !== payload)
    default:
      return state
  }
}

export default songsReducer
