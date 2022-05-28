import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { store } from './app/store';
import Template from './component/template/Template';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path ='/sign-in' element= {<SignIn />} />
        {/* <Route path ='*' element= {<Error />} />
        <Route path ='/about' element= {<APropos />} />
        <Route path="/logement/:idLogement" element={<Logement />} /> */}
      </Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
