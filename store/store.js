import { configureStore } from '@reduxjs/toolkit'
import songsReducer from '../reducers/songsReducer'

export default configureStore({
  reducer: {
    songs: songsReducer,
  },
})
