import { useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { Button, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'
import { useFormik } from 'formik'
import * as yup from 'yup'

import styles from '../styles/Home.module.scss'
import { addSong } from '../actions/songActions'

const validationSchema = yup.object({
  songName: yup.string().required('Required'),
  dueDate: yup.string().required('Required'),
})

const SongForm = () => {
  const monthFromNow = moment().add(3, 'M')

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: { songName: '', dueDate: monthFromNow },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addSong(values.songName, values.dueDate.format()))
      resetForm()
    },
    validateOnBlur: true,
    validateOnChange: true,
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.formControl}>
          <TextField
            label="Song name"
            name="songName"
            value={formik.values.songName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.setFieldValue('dueDate', e)
            }}
            renderInput={(params) => (
              <TextField
                className={styles.input}
                error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
                helperText={formik.touched.dueDate && formik.errors.dueDate}
                {...params}
              />
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
