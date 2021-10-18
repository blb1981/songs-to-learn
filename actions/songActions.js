export const addSong = (songName, dueDate, songId) => (dispatch) => {
  dispatch({ type: 'ADD_TODO', payload: { songName, dueDate, songId } })
}
