import React from 'react';
import AddItemForm from './components/AddItemForm';
import List from './components/List'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      listItems: [],
    };
  } 

  addItem(item) {
    if (item === '') {
      return
    }
    
    const newItem = {
      id: (new Date()).getTime(),
      item,
    }

    this.setState({
      ...this.state,
      listItems: [...this.state.listItems, newItem],
      value: ''
    })
  }

  removeItem(id) {
    this.setState(prevState => ({
      ...prevState,
      listItems: prevState.listItems.filter(item => item.id !== id),
    }));
  }

  changeValue(e) {
    this.setState({
      ...this.state,
      value: e.target.value
    })
  }

  render () {
    const {
      listItems,
      value
    } = this.state;

    return (
      <div className="App">
        <AddItemForm
          valueInput={value}
          addItem={this.addItem.bind(this)}
          changeValue={this.changeValue.bind(this)}
        />
        <List items={listItems} onRemove={this.removeItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
