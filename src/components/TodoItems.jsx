import React from 'react'
import { TodoItem } from './TodoItem'
import { useContext } from 'react'
import { TodoItemsContext } from '../store/todoitems-store'

export const TodoItems = () => {
  const {todoitems} = useContext(TodoItemsContext);

  return (
    <>
    {todoitems.map((items) => <TodoItem todoname={items.name} key={items.name} duedate={items.date}></TodoItem>)}
    </>
  )
}
