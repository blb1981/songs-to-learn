import { Button, TableRow, TableCell, Popover } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import moment from 'moment'

import styles from '../styles/Home.module.scss'

const Song = ({ name, dueDate, id }) => {
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
        <Button
          variant="contained"
          color="error"
          onClick={() => console.log(id)}
        >
          X
        </Button>
        <Popover></Popover>
      </TableRow>
    </>
  )
}

export default Song
