import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

const Home = lazy(() => import('./pages/Home/index'));
const Error = lazy(() => import('./components/Error/index'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <div className='container'>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </div>
    </Router>
  </React.StrictMode>
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
