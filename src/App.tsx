import React from 'react';
import logo from './logo.svg';
import styles from './app.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Expenses } from './pages/Expenses';
import { Categories } from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/expenses" exact>
          <Expenses />
        </Route>
        <Route path="/categories" exact>
          <Categories />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
