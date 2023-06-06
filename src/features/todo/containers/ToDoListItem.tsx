// Libraries
import React from 'react'

// Types
import { ListItem } from './../services/@types/ToDoList'

// Styles
import './styles/ToDoListItem.scss'

type ToDoListItemProps = {
  item: ListItem
  handleRemoveListItem: (id: string) => void
  handleListItemCheckbox: (id: string) => void
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({
  item,
  handleRemoveListItem,
  handleListItemCheckbox,
}) => {
  return (
    <span className="to-do-list-item" key={item.id}>
      <button onClick={() => handleRemoveListItem(item.id)}>X</button>
      <div onClick={() => handleListItemCheckbox(item.id)}>
        <span className="to-do-list-item-text">{item.text}</span>
        <input
          type="checkbox"
          onChange={() => {
            console.log('test')
          }}
          checked={item.completed}
        />
      </div>
    </span>
  )
}

export default ToDoListItem
