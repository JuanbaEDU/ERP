import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.sass';

// Importa tus componentes
import UserList from './User/UserList';
import UserPage from './User/UserPage';
import UserDetails from "./User/UserDetail";

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <UserPage>
          <Routes location={location}>
            <Route path="/" element={
              <CSSTransition classNames="fade" timeout={300}>
                <UserList />
              </CSSTransition>
            } />
            <Route path="/user/list" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetails />} />
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
