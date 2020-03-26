import React from 'react'

const AddItemForm = ({
  addItem = () => {},
  placeholder = '',
  valueInput = '',
  changeValue = () => {},
  hasError = false,
}) => {
  return (
    <form className="form__todo" onSubmit={
      e => {
        e.preventDefault()

        addItem(valueInput)
      }
    }>
      <div>
        <input className="input input__item" value={valueInput} onChange={e => changeValue(e)}
        type="text" placeholder={placeholder} />
        {hasError ? (<span className="input__item--invalid" style={{ 'color': 'red', 'display': 'block' }}>Você não pode inserir uma tarefa vazia</span>) : ''}
      </div>
    </form>
  )
}

export default AddItemForm
