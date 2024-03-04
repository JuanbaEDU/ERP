import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.sass';

// Importa tus componentes
import IndexPage from './Index/IndexPage';
import UserList from './User/UserList';
import UserPage from './User/UserPage';
import UserDetails from "./User/UserDetail";
import { Link } from 'react-router-dom';

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <div className='navigator'>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/users">Usuarios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
      <TransitionGroup>
        <UserPage>
          <Routes location={location}>
            <Route path="/" exact element={
              <CSSTransition classNames="fade" timeout={300}>
                <IndexPage />
              </CSSTransition>
            } />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </UserPage>
      </TransitionGroup>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
