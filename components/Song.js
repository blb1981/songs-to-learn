import { useDispatch } from 'react-redux'
import { Button, TableRow, TableCell, Popover } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import moment from 'moment'

import styles from '../styles/Home.module.scss'
import { deleteSong, updateSong } from '../actions/songActions'

const Song = ({ songName, dueDate, id, isComplete }) => {
  const dispatch = useDispatch()
  const onDeleteSong = () => {
    dispatch(deleteSong(id))
  }
  const onToggleComplete = () => {
    const completedSong = {
      songName,
      dueDate,
      id,
      isComplete: !isComplete,
    }
    dispatch(updateSong(completedSong))
  }
  return (
    <>
      <TableRow>
        <TableCell>
          <div className={styles.song}>
            <span className={styles.songName}>{songName}</span>
          </div>
        </TableCell>
        <TableCell align="right">{moment(dueDate).format('l')}</TableCell>
        <TableCell align="right">
          <Button
            variant="contained"
            color="success"
            onClick={onToggleComplete}
          >
            !
          </Button>
          <Button variant="contained" color="error" onClick={onDeleteSong}>
            X
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Song
