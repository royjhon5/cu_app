import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <HelmetProvider>
            <App /> 
        </HelmetProvider>
    </Provider>
     
)
