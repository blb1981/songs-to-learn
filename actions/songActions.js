export const addSong = (songName, dueDate, songId) => (dispatch) => {
  dispatch({ type: 'ADD_SONG', payload: { songName, dueDate, songId } })
}
export const deleteSong = (songId) => (dispatch) => {
  dispatch({ type: 'DELETE_SONG', payload: songId })
}
