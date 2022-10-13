import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import { SortCelebritiesProvider } from './utils/context';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading'

const Home = lazy(() => import('./pages/Home/index'));
const Celebrities = lazy(() => import('./pages/Celebrities/index'));
const Error = lazy(() => import('./components/Error/index'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <SortCelebritiesProvider>
        <GlobalStyle/>
        <Header />
        <div className='container'>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path='/' element={<Home/>} exact/>
              <Route path='/celebrities' element={<Celebrities/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>
          </Suspense>
          <Footer/>
        </div>
      </SortCelebritiesProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
