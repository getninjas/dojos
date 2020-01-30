import React from 'react'

const ListItem = ({
  item = '',
  itemId = 0,
  onRemove = () => {}
}) => {
  return (
    <li>
      {item} <button onClick={() => onRemove(itemId)}>Remover</button>
    </li>
  )
}

export default ListItem