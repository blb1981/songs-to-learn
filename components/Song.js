import { ListItem, ListItemText, Typography } from '@mui/material'
import moment from 'moment'

const Song = ({ name, dueDate }) => {
  return (
    <>
      <ListItem>
        <ListItemText>{name} - {moment(dueDate).format('L')}</ListItemText>
      </ListItem>
    </>
  )
}

export default Song
