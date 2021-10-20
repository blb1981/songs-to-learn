import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  TableCell,
  TableRow,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import moment from 'moment'

import styles from '../styles/Home.module.scss'
import { deleteSong, updateSong } from '../actions/songActions'

const Song = ({ songName, dueDate, id, isComplete }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()
  const onDeleteSong = () => {
    dispatch(deleteSong(id))
    setAnchorEl(null)
  }
  const onToggleComplete = () => {
    const completedSong = {
      songName,
      dueDate,
      id,
      isComplete: !isComplete,
    }
    dispatch(updateSong(id, completedSong))
    setAnchorEl(null)
  }

  // Popover related functions
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const popoverId = open ? 'simple-popover' : undefined
  // End popover functions

  return (
    <>
      <TableRow>
        <TableCell>
          <div className={styles.song}>
            <span className={isComplete && `${styles.songCompleted}`}>
              {songName}
            </span>
          </div>
        </TableCell>
        <TableCell
          align="right"
          className={isComplete && `${styles.songCompleted}`}
        >
          {moment(dueDate).format('l')}
        </TableCell>
        <TableCell align="right">
          <Popover
            id={popoverId}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
          >
            <List disablePadding={true}>
              <ListItem>
                <ListItemText>
                  <ListItemText>{songName}</ListItemText>
                </ListItemText>
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemButton onClick={onToggleComplete}>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Mark {isComplete ? 'Incomplete' : 'Complete'}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={onDeleteSong}>
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText>Delete</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>
          <MoreVertIcon
            aria-describedby={popoverId}
            onClick={handleClick}
            className={styles.menuToggle}
          />
        </TableCell>
      </TableRow>
    </>
  )
}

export default Song
