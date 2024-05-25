import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import socketIO from 'socket.io-client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './assets/styles/index.css'
const socketConnect = socketIO.connect('https://server-kappa-nine-47.vercel.app/');

export const WebSocket = () => {
    return socketConnect;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>
)
