import React from 'react'
import ListItem from '../ListItem'

const List = (props) => {
  return (
    <ol>
      {props.items.map(item => (
        <ListItem item={item.item} key={item.id} />
      ))}
    </ol>
  )
}

export default List