import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Home from './Pages/Home/Home';
import Login from './Pages/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
