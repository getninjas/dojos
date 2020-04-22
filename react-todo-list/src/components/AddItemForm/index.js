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
        <input className={`input input__item ${hasError ? 'input__item--invalid' : ''}`} value={valueInput} onChange={e => changeValue(e)}
        type="text" placeholder={placeholder} />
        {hasError ? (<span className="input__message input__message--invalid">Você não pode inserir uma tarefa vazia</span>) : ''}
      </div>
    </form>
  )
}

export default AddItemForm
