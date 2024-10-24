import './App.css'
import { AddData } from './components/AddData'
import AppName from './components/AppName'
import { TodoItems } from './components/TodoItems'
import { useReducer } from "react";
import { TodoItemsContext } from './store/todoitems-store';
import { Message } from './components/Message';


const todoItemsReducer = (state, action) =>{
  let newTodoItems = state;

  if (action.type == 'NEW_ITEM'){
    newTodoItems = [
      ...state, {name: action.payload.todoname, date: action.payload.duedate} 
    ];
    
  }
  else if (action.type === 'DELETE_ITEM'){
    newTodoItems = state.filter((items) => items.name !== action.payload.todoname);
    
  }

  return newTodoItems;
}

function App() {
  const [todoitems, dispatchTodoItems] = useReducer(todoItemsReducer, [])
  // const [todoitems, settodoitems] = useState([]);

  const addItems = (todoname, duedate) =>{
    const newItemsAction = {
      type: 'NEW_ITEM',
      payload: {
        todoname,
        duedate
      }
    }
    dispatchTodoItems(newItemsAction);

    // const newItems = [
    //   ...todoitems, {name:todoname, date:duedate}
    // ];
    // settodoitems(newItems);
  }

  const deleteItems = (todoname) =>{
    const deleteItemsAction = {
      type : 'DELETE_ITEM',
      payload: {
        todoname
      }
    }
    dispatchTodoItems(deleteItemsAction)
    // const newItems = todoitems.filter((items) => items.name !== todoname);
    // settodoitems(newItems);
  };

  return (
    <TodoItemsContext.Provider value={
    {
      todoitems,
      addItems,
      deleteItems
    }
    }>
      <div className="container text-center">
        <AppName />
        <AddData />

        <Message />

        <TodoItems onNewItem={addItems} />
      </div>
    </TodoItemsContext.Provider>
  )
}

export default App
