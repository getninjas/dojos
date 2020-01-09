import React from 'react'

const AddItemForm = ({
  placeholder = '',
  value = ''
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={value} type="text" placeholder={placeholder} />
    </form>
  )
}

export default AddItemForm