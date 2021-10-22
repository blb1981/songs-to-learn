import { useSelector } from 'react-redux'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  TableBody,
} from '@mui/material'

import styles from '../styles/Home.module.scss'
import Song from '../components/Song'
import songsSelector from '../selectors/songsSelector'

const SongList = () => {
  const filters = useSelector((state) => state.filters)
  const songs = useSelector((state) => state.songs)

  const selectedSongs = songsSelector(songs, filters)
  // let songs = useSelector((state) => state.songs)

  return (
    <TableContainer className={styles.list}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Song</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.length === 0 ? (
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <Typography>No songs. Get busy!</Typography>
              </TableCell>
            </TableRow>
          ) : (
            selectedSongs.map((song) => {
              return (
                <Song
                  key={song.id}
                  songName={song.songName}
                  dueDate={song.dueDate}
                  isComplete={song.isComplete}
                  id={song.id}
                />
              )
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SongList
