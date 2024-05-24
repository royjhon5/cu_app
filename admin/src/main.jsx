import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
import socketIO from 'socket.io-client';
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
