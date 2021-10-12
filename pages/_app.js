import '../styles/globals.scss'
import configureStore from '../store/store'
import { Provider } from 'react-redux'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
// import dayjs from '@mui/lab/AdapterDayjs'
import moment from '@mui/lab/AdapterMoment'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configureStore}>
      <LocalizationProvider dateAdapter={moment}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </Provider>
  )
}

export default MyApp
