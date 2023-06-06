import React, { useState } from 'react'

type ToDoListFormProps = {
  handleAddListItem: (text: string) => void
}

const ToDoListForm: React.FC<ToDoListFormProps> = ({ handleAddListItem }) => {
  const [inputText, setInputText] = useState('')

  const addListItem = (text: string) => {
    handleAddListItem(text)
    setInputText('')
  }
  const handleInputTextOnChange = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    setInputText(event.currentTarget.value)
  }

  return (
    <div className="to-do-list-item">
      <input onChange={handleInputTextOnChange} value={inputText} />
      <button onClick={() => addListItem(inputText)}>Add item</button>
    </div>
  )
}

export default ToDoListForm
