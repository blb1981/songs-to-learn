export const addSong = (songName, dueDate) => (dispatch) => {
  dispatch({ type: 'ADD_TODO', payload: { songName, dueDate } })
}
