import React from 'react';
import AddItemForm from './components/AddItemForm';
import List from './components/List'

import './App.scss';

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

  editItem(text, itemId) {
    const { listItems } = this.state;

    this.setState(prevState => listItems.map(item => {
      if(item.id === itemId) {
        item.item = text;
      }

      return item;
    }))
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

    console.log(listItems);


    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <h1 className="header__title">To Do List</h1>
          </div>
        </header>
        <div className="container form__container">
          <AddItemForm
            valueInput={value}
            addItem={this.addItem.bind(this)}
            changeValue={this.changeValue.bind(this)}
            hasError={hasError}
            placeholder="Digite aqui uma tarefa"
          />
        </div>
        <List items={listItems} onRemove={this.removeItem.bind(this)} onEdit={this.editItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
