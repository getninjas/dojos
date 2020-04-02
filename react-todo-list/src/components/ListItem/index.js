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
    const {
      itemId,
      onRemove= () => {}
    } = this.props;

    const {
      editMode
    } = this.state;

   if(editMode) {
    this.setState({ editMode: false })
   } else {
     onRemove(itemId)
   }
  }

  handleInputChange(event) {
    this.setState({ text: event.target.value })
  }

  render() {
    const { editMode, text } = this.state;
    const enableInput = editMode ? {} : { disabled: 'disabled' }

    return (
      <li className="border">
        <div>
          <input
            className="input-item"
            type="text"
            value={text}
            onChange={this.handleInputChange.bind(this)}
            {...enableInput}
          />

          <button class="btn" onClick={this.handleEdit.bind(this)}>
            {
              editMode
                ? (<img src="../images/check.svg" />)
                : (<img src="../images/pencil.svg" />)
            }
          </button>
          <button class="btn" onClick={this.handleCancel.bind(this)}>
            {
              editMode
              ? (<img src="../images/close.svg" />)
              : (<img src="../images/trash.svg" />)
            }
            </button>
        </div>
      </li>
    );
  }
}

export default ListItem
