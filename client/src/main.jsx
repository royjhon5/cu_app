import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import socketIO from 'socket.io-client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './assets/styles/index.css'
const baseUrl = window.location.origin;
const socketConnect = socketIO.connect(baseUrl.split(':')[0]+':'+baseUrl.split(':')[1]+':8000');

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
