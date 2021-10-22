import { Typography } from '@mui/material'

import styles from '../styles/Home.module.scss'

const Header = () => {
  return (
    <Typography className={styles.headline} variant="h1">
      Songs To Learn
    </Typography>
  )
}

export default Header
