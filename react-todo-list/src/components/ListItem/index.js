import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    }
  }

  render() {
    const {
      item = '',
      itemId = 0,
      onRemove = () => {},
      onEdit = () => {}
    } = this.props;

    const { editMode } = this.state;
    const enableInput = editMode ? {} : { disabled: 'disabled' }

    return (
      <li>
        <input
          type="text"
          value={item}
          {...enableInput}
        />
        <button onClick={() => onRemove(itemId)}>Remover</button>
        <button onClick={() => onEdit(itemId)}>Editar</button>
      </li>
    );
  }
}

export default ListItem