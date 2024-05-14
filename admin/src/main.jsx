import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import socketIO from 'socket.io-client';
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
