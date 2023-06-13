import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>our menu</h1>
          <div className="underline"></div>
        </div>
        <Categories></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
