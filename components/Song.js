import { useDispatch } from 'react-redux'
import { Button, TableRow, TableCell, Popover } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import moment from 'moment'

import styles from '../styles/Home.module.scss'
import { deleteSong } from '../actions/songActions'

const Song = ({ name, dueDate, id }) => {
  const dispatch = useDispatch()
  const onDeleteSong = () => {
    dispatch(deleteSong(id))
  }
  return (
    <>
      <TableRow>
        <TableCell>
          <div className={styles.song}>
            <span className={styles.songName}>{name}</span>
          </div>
        </TableCell>
        <TableCell align="right">
          {moment(dueDate).format('ll')} ({moment(dueDate).fromNow(true)})
        </TableCell>
        <TableCell align="right">
          <Button variant="contained" color="error" onClick={onDeleteSong}>
            X
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Song
