import React from 'react'
import ListItem from '../ListItem'

const List = ({
  items = [],
  onRemove = () => {},
  onEdit = () => {}
}) => {
  return (
    <ol>
      {items.map(({item, id}) => (
        <ListItem onRemove={onRemove} onEdit={onEdit} item={item} key={id} itemId={id}/>
      ))}
    </ol>
  )
}

export default List