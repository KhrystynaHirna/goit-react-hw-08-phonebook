import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import Spinner from 'react-bootstrap/Spinner';
import App from 'components/app/App';
import './index.css';
import store from 'redux/store/Store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store.store}>
      <React.StrictMode>
        <PersistGate persistor={store.persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </React.StrictMode>
  </Provider>
);