import React from 'react'
import ListItem from '../ListItem'

const List = ({
  items = [],
  onRemove = () => {},
  onEdit = () => {}
}) => {
  return (
    <div className="container">
      <ul className="todo__items">
        {items.map(({item, id}) => (
          <ListItem onRemove={onRemove} onEdit={onEdit} item={item} key={id} itemId={id}/>
        ))}
      </ul>
    </div>
  )
}

export default List