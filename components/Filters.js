import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setTextFilter } from '../actions/filterActions'

const Filters = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleTextInput = (e) => {
    setText(e.target.value)
    dispatch(setTextFilter(text))
  }
  return (
    <div
      style={{
        background: 'pink',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        Show completed? <input type="checkbox" />
      </div>
      <div>
        <input type="text" value={text} onChange={handleTextInput} />
      </div>
    </div>
  )
}

export default Filters
