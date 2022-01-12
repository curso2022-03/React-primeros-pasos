import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MenuItems } from './data/MenuItems';

export function App() {
  return (
    <Router>
      <Header />
      {/** Si no tenemos un id añadir al map otro elemento :
       * MenuItems.map((item, index)
       * y luego en la key seia
       * key={index}
       */}
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
