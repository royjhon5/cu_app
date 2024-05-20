import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import socketIO from 'socket.io-client';
const baseUrl = window.location.origin;
const socketConnect = socketIO.connect(baseUrl.split(':')[0]+':'+baseUrl.split(':')[1]+':8000');

export const WebSocket = () => {
    return socketConnect;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
