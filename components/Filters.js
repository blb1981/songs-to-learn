import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from '@mui/material'
import { setTextFilter } from '../actions/filterActions'
import { setShowCompletedFilter } from '../actions/filterActions'

const Filters = () => {
  const [text, setText] = useState('')
  const [showCompleted, setShowCompleted] = useState(false)

  const dispatch = useDispatch()

  const handleTextFilter = (e) => {
    setText(e.target.value)
    dispatch(setTextFilter(e.target.value))
  }
  const handleShowCompleted = (e) => {
    setShowCompleted(e.target.checked)
    dispatch(setShowCompletedFilter(e.target.checked))
  }

  console.log(text)
  return (
    <Grid container justifyContent="space-between" alignItems="flex-end">
      <Grid item xs={4} md={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={showCompleted}
                onChange={handleShowCompleted}
              />
            }
            label="Show completed?"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={4} md={6}>
        <FormGroup>
          <TextField
            value={text}
            onChange={handleTextFilter}
            label="Search..."
          />
        </FormGroup>
      </Grid>
    </Grid>
  )
}

export default Filters
