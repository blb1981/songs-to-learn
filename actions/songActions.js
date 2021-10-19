export const addSong = (songName, dueDate, id) => (dispatch) => {
  dispatch({
    type: 'ADD_SONG',
    payload: {
      songName,
      dueDate,
      id,
      isComplete: false,
    },
  })
}
export const updateSong = (updatedSong) => (dispatch) => {
  dispatch({ type: 'UPDATE_SONG', payload: updatedSong })
}
export const deleteSong = (songId) => (dispatch) => {
  dispatch({ type: 'DELETE_SONG', payload: songId })
}
