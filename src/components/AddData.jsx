import React, { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todoitems-store";

export const AddData = () => {
    const todoNameElement = useRef();
    const dueDateElement = useRef()

    const {addItems} = useContext(TodoItemsContext);

    const handleOnSubmit = (event) => {
      event.preventDefault()
      const todoname = todoNameElement.current.value;
      const duedate = dueDateElement.current.value;
      addItems(todoname, duedate)
      todoNameElement.current.value = ''
      dueDateElement.current.value = ''
    }
  return (
    <form onSubmit={handleOnSubmit}> 
      <div className="row my-5">
        <div className="col-md-6">
          <input type="text" ref={todoNameElement} className="form-control bg-warning" placeholder="Enter Todo"/>
        </div>
        <div className="col-md-4">
            <input type="date" ref={dueDateElement} className="form-control bg-warning" />
        </div>
        <div className="col-md-2 text-start">
            <button type="submit" className="btn btn-info">Add data</button>
        </div>
      </div>
    </form>
  );
};
