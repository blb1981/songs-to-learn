import { useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'
import { v4 as uuidv4 } from 'uuid'
import { useFormik } from 'formik'
import * as yup from 'yup'

import styles from '../styles/Home.module.scss'
import { addSong } from '../actions/songActions'

const validationSchema = yup.object({
  songName: yup.string().required('Required'),
  dueDate: yup.date().required('Required'),
})

const SongForm = () => {
  const monthFromNow = moment().add(1, 'M')

  const dispatch = useDispatch()

  const [songName, setSongName] = useState('')
  const [dueDate, setDueDate] = useState(monthFromNow)

  const handleAddSong = (e) => {
    e.preventDefault()

    const id = uuidv4()

    dispatch(addSong(songName, dueDate.format(), id))

    setSongName('')
    setDueDate(monthFromNow)
  }

  const formik = useFormik({
    initialValues: { songName, dueDate },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <div
    // initialValues={{ songName: '', dueDate }}
    // validationSchema={Yup.object({
    //   songName: Yup.string().required('Required'),
    //   dueDate: Yup.date().required('Required'),
    // })}
    >
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.formControl}>
          <TextField
            label="Song name"
            name="songName"
            value={formik.values.songName}
            onChange={formik.handleChange}
            error={formik.touched.songName && Boolean(formik.errors.songName)}
            helperText={formik.touched.songName && formik.errors.songName}
            className={styles.input}
          />
        </div>
        <div className={styles.formControl}>
          <DatePicker
            label="Due date"
            name="dueDate"
            value={formik.values.dueDate}
            onChange={formik.handleChange}
            error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
            helperText={formik.touched.dueDate && formik.errors.dueDate}
            renderInput={(params) => (
              <TextField className={styles.input} {...params} />
            )}
            showTodayButton
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
    </div>
  )
}

export default SongForm
