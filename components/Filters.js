import { useState } from 'react'
import { useDispatch } from 'react-redux'

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
    <div
      style={{
        background: 'pink',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        Show completed?{' '}
        <input
          type="checkbox"
          value={showCompleted}
          onChange={handleShowCompleted}
        />
      </div>
      <div>
        <input type="text" value={text} onChange={handleTextFilter} />
      </div>
    </div>
  )
}

export default Filters
