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
      hasError: false,
    };
  } 

  addItem(item) {
    if (item === '') {
      this.setState({
        ...this.state,
        hasError: true,
      })
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

  editItem(id) {
    
  }

  changeValue(e) {
    const { value } = e.target

    this.setState({
      ...this.state,
      value,
      hasError: false,
    })
  }

  render () {
    const {
      hasError,
      listItems,
      value
    } = this.state;


    return (
      <div className="App">
        <AddItemForm
          valueInput={value}
          addItem={this.addItem.bind(this)}
          changeValue={this.changeValue.bind(this)}
          hasError={hasError}
        />
        <List items={listItems} onRemove={this.removeItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
