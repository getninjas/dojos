import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      text: props.item,
    }

    this.handleEdit.bind(this);
  }

  handleEdit() {
    const {
      itemId,
      onEdit = () => {}
    } = this.props;

    const { editMode, text } = this.state;

    this.setState(prevState => ({editMode : !prevState.editMode}))

    if(editMode) {
      onEdit(text, itemId)
    }
  }

  handleCancel() {
   this.setState({ editMode: false })
  }

  handleInputChange(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    const {
      item = '',
      itemId = 0,
      onRemove = () => {},
      onEdit = () => {}
    } = this.props;

    const { editMode, text } = this.state;
    const enableInput = editMode ? {} : { disabled: 'disabled' }

    return (
      <li>
        <input
          type="text"
          value={text}
          onChange={this.handleInputChange.bind(this)}
          {...enableInput}
        />
        <button onClick={() => onRemove(itemId)}>Remover</button>
        <button onClick={this.handleEdit.bind(this)}>{editMode ? 'Salvar' : 'Editar'}</button>
        <button onClick={this.handleCancel.bind(this)}>Cancelar</button>
      </li>
    );
  }
}

export default ListItem
