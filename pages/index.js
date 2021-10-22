import Head from 'next/head'
import { CssBaseline, Grid } from '@mui/material'

import styles from '../styles/Home.module.scss'

import Filters from '../components/Filters'
import Header from '../components/Header'
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
          <Header />
          <SongForm />
          <Filters />
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center" p={3}>
        <Grid item xs={12} md={10}>
          <SongList />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
