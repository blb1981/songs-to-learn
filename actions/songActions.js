import { v4 as uuidv4 } from 'uuid'

export const addSong = (songName, dueDate) => (dispatch) => {
  const id = uuidv4()

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
export const updateSong = (id, updatedSong) => (dispatch) => {
  dispatch({ type: 'UPDATE_SONG', payload: { id, updatedSong } })
}
export const deleteSong = (songId) => (dispatch) => {
  dispatch({ type: 'DELETE_SONG', payload: songId })
}
