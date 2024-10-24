import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todoitems-store'

export const Message = () => {
  const {todoitems} = useContext(TodoItemsContext)
  return (
    <>
    {todoitems.length == 0 && <h1 className='text-danger   fw-bold my-5'>Enjoy!</h1>}
    </>
  )
}
