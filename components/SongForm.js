import { useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'

import styles from '../styles/Home.module.scss'
import { addSong } from '../actions/songActions'

const SongForm = () => {
  // Calculate one month from current date for default display in datepicker
  const monthFromNow = moment().add(1, 'M')

  const dispatch = useDispatch()

  // Form data kept in local state, using React hooks
  const [songToAdd, setSongToAdd] = useState('')
  const [dueDate, setDueDate] = useState(monthFromNow)

  // Handler for form submission to add song to list
  const onAddSong = (e) => {
    e.preventDefault()

    // Send data to redux store
    dispatch(addSong(songToAdd, dueDate.format()))

    // Reset form state after submission
    setSongToAdd('')
    setDueDate(monthFromNow)
  }
  return (
    <form onSubmit={onAddSong} className={styles.form}>
      <div className={styles.formControl}>
        <TextField
          label="Song name"
          value={songToAdd}
          onChange={(e) => setSongToAdd(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.formControl}>
        <DatePicker
          label="Due date"
          onChange={(dueDate) => {
            setDueDate(dueDate)
          }}
          value={dueDate}
          clearable
          renderInput={(params) => (
            <TextField className={styles.input} {...params} />
          )}
        />
      </div>
      <div className={styles.formControl}>
        <Button
          type="submit"
          variant="contained"
          className={styles.input}
          size="large"
        >
          Add Song
        </Button>
      </div>
    </form>
  )
}

export default SongForm
