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
        {hasError ? (<span style={{ 'color': 'red', 'display': 'block' }}>Campo não pode ser nulo</span>) : ''}
      </div>
    </form>
  )
}

export default AddItemForm
