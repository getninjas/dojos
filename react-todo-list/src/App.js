import React from 'react';
import AddItemForm from './components/AddItemForm';
import List from './components/List'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: '827378923', item: 'Lavar louça' }],
    };
  } 

  render () {
    const { items } = this.state;

    return (
      <div className="App">
        <AddItemForm />
        <List list={items}/>
      </div>
    );
  }
}

export default App;
