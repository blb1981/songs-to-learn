import Head from 'next/head'
import { CssBaseline, Grid, Typography } from '@mui/material'

import styles from '../styles/Home.module.scss'

import Filters from '../components/Filters'
import SongList from '../components/SongList'
import SongForm from '../components/SongForm'

const Home = () => {
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
        <Grid item xs={12} sm={10} md={6} lg={4}>
          <Typography className={styles.headline} variant="h1">
            Songs To Learn
          </Typography>
          <SongForm />
          <Filters />
          <SongList />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
