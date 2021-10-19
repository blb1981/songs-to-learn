import { useSelector } from 'react-redux'
import Head from 'next/head'
import {
  CssBaseline,
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
import SongForm from '../components/SongForm'

const Home = () => {
  const songs = useSelector((state) => state.songs)

  return (
    <div className={styles.root}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>Songs To Learn</title>
      </Head>
      <CssBaseline />
      <Typography className={styles.headline} variant="h1">
        Songs To Learn
      </Typography>
      <SongForm />

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
            {songs.map((song) => {
              return (
                <Song
                  key={song.songId}
                  name={song.songName}
                  dueDate={song.dueDate}
                  id={song.songId}
                />
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
