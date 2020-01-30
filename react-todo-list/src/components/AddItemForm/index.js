import React from 'react'

const AddItemForm = ({
  addItem = () => {},
  placeholder = '',
  valueInput = '',
  changeValue = () => {},
  hasError = false,
}) => {
  return (
    <form onSubmit={
      e => {
        e.preventDefault()
        
        addItem(valueInput)
      }
    }>
      <div>
        <input value={valueInput} onChange={e => changeValue(e)} 
        type="text" placeholder={placeholder} />
        {hasError ? (<span style={{ 'color': 'red', 'display': 'block' }}>Campo nao pode ser nulo</span>) : ''}
      </div>
    </form>
  )
}

export default AddItemForm