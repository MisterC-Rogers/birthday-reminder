import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3 className='title'>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
      <p className='note'>This is done with static dummy data and the functionality is only the clear all</p>
    </main>
  );
}

export default App;
