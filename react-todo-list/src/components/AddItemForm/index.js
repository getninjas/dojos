import React from 'react'

const AddItemForm = ({
  addItem = () => {},
  placeholder = '',
  valueInput = '',
  changeValue = () => {}
}) => {
  return (
    <form onSubmit={
      e => {
        e.preventDefault()
        
        addItem(valueInput)
      }
    }>
      <input value={valueInput} onChange={e => changeValue(e)} 
      type="text" placeholder={placeholder} />
    </form>
  )
}

export default AddItemForm