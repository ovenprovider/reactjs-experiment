// Libraries
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

// Containers
import ToDoListForm from '../containers/ToDoListForm'
import ToDoListItem from '../containers/ToDoListItem'

import { ListItem } from '../services/@types/ToDoList'
// Styles
import './styles/ToDo.scss'

const ToDo: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([])

  const handleAddListItem = (text: string) => {
    const newItem = { id: uuid(), text, completed: false }
    setItems([...items, newItem])
  }

  const handleRemoveListItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handleListItemCheckbox = (id: string) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    )
    setItems(newItems)
  }

  const ToDoList = () =>
    items.map((item) => (
      <ToDoListItem
        item={item}
        handleRemoveListItem={handleRemoveListItem}
        handleListItemCheckbox={handleListItemCheckbox}
      />
    ))

  return (
    <div className="to-do">
      <h1>To Do</h1>
      <ToDoListForm handleAddListItem={handleAddListItem} />
      <div className="to-do-list">{ToDoList()}</div>
    </div>
  )
}

export default ToDo
