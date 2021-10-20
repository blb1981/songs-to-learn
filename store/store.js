import { configureStore } from '@reduxjs/toolkit'
import songsReducer from '../reducers/songsReducer'
import filtersReducer from '../reducers/filtersReducer'

export default configureStore({
  reducer: {
    songs: songsReducer,
    filters: filtersReducer,
  },
})
