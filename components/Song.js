import { TableRow, TableCell, Popover } from '@mui/material'
import moment from 'moment'

import styles from '../styles/Home.module.scss'

const Song = ({ name, dueDate }) => {
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
        <TableCell>X</TableCell>
        <Popover></Popover>
      </TableRow>
    </>
  )
}

export default Song
