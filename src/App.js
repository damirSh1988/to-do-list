import React from 'react';
import './App.css';
import Pager from './ComponentPager/Pager';
import Title from './TitleComponent/Title';
import { v4 as uuid } from "uuid";
import { useState } from 'react';
import ItemList from './ItemListComponent/ItemList';


function App() {
    const [items, setItems] = useState([
      {
        id: uuid(),
        todoName: 'Write Essay',
        status: 'todo',

    },
    {
        id: uuid(),
        todoName: 'One Hour CSS Course Online',
        status: 'todo',

    },
    {
        id: uuid(),
        todoName: 'Buy One Way Tickets to San Fransico',
        status: 'todo',

    },
    {
        id: uuid(),
        todoName: 'Go to Gym',
        status: 'todo',

    },
    {
        id: uuid(),
        todoName: 'Buy Groceries',
        status: 'done',

    },
    ]);
  
   
    
    console.log(items)

  return (
    <div className="App m-5">
      <Title/>
      <Pager items ={items} setItems = {setItems}/>
      <ItemList items ={items} setItems = {setItems}/>
    </div>
  );
}

export default App;
