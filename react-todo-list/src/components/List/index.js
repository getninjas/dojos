import React from 'react'
import ListItem from '../ListItem'

const List = ({
  items = [],
  onRemove = () => {}
}) => {
  return (
    <ol>
      {items.map(({item, id}) => (
        <ListItem onRemove={onRemove} item={item} key={id} itemId={id}/>
      ))}
    </ol>
  )
}

export default List