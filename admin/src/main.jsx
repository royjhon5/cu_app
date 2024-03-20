import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/style.scss';
import { store } from '../src/store/index.js'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker.jsx';
import { BrowserRouter } from 'react-router-dom';
import config from './config.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <App /> 
        </BrowserRouter>
    </Provider>
);

serviceWorker.unregister();