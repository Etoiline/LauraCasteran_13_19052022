import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { store } from './app/store';
import Template from './component/template/Template';
import './index.css';
import Dashboard from './pages/dashboard/Dashboard';
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
        <Route path ='/dashboard' element= {<Dashboard />} />
        {/* <Route path ='*' element= {<Error />} />
        <Route path ='/about' element= {<APropos />} />
        <Route path="/logement/:idLogement" element={<Logement />} /> */}
      </Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

