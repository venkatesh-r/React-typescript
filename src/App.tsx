import React, { useState } from 'react';
import './App.css';
import AddList from './components/AddList';
import './components/List';
import List from './components/List';

export interface IList {
  people:{
   name: string
   age: number
   url: string
   notes?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IList["people"]>([
    {
      name: "Sachin Tendulkar",
      age: 49,
      url: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171004/sachin-tendulkar.jpg",
      notes: "God of Cricket"
    }
  ]);

  return (
    <div className="App">
       <p>App component</p>
       <List people={people}/>
       <AddList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
