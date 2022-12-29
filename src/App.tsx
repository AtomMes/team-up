import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import Home from './Pages/Home/Home.tsx';
import SignIn from './Pages/SignIn/SignIn.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import SignUp from './Pages//SignUp/SignUp.tsx';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>

          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
