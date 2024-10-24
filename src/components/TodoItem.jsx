import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todoitems-store'

export const TodoItem = ({todoname, duedate}) => {
    const {deleteItems} = useContext(TodoItemsContext)
  return (
    <div className='row my-3 text-success text-start'>
        <div className="col-md-6 ">
            {todoname}
        </div>
        <div className="col-md-4">
            {duedate}
        </div>
        <div className="col-md-2">
            <button className="btn btn-danger" onClick={()=> deleteItems(todoname)}>
                Remove
            </button>
        </div>
    </div>
  )
}
