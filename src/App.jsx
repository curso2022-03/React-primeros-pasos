import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItems } from './data/MenuItems';

export function App() {
  return (
    <Router>
      <Header />
      {MenuItems.map((item) => {
        return <Route path={item.path} exact component={item.component} />;
      })}
    </Router>
  );
}
