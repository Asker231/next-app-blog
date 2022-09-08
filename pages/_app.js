import { Provider } from 'react-redux'
import '../styles/globals.css'
import store from '../components/store/store.js';
import '../firebase.js'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>
 
  )
}

export default MyApp
