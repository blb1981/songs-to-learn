import { useSelector } from 'react-redux'
import Head from 'next/head'
import {
  CssBaseline,
  Grid,
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
import { useEffect } from 'react'

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

      <Grid container spacing={3} justifyContent="center" p={3}>
        <Grid item xs={12} sm={10} md={8} lg={4} spacing={3}>
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
                {songs.length === 0 ? (
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      <Typography>No songs. Get busy!</Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  songs.map((song) => {
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
