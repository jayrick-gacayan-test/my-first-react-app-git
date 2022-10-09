import React, { useState, useReducer, useEffect } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { HeaderTitle } from '../parts/HeaderTitle';

import '../custom.style/todo.style.css';

export default function TodoContainer(){
  const initialState = {
    id : null,
    name : "",
    title : "",
    completed : false
  }
    
  const [ editing, setEditing ] = useState(false); // checks if editing is enable
  const [ currentTodo, setCurrentTodo ] = useState(initialState); // getting the current todo
    
  const reducer = (state, action) => {
    switch(action.type){
      case "ADD": return [...state, action.todo];
      case "DELETE": return state.filter(todo => { return todo.id !== action.id });
      case "HANDLE_TODO_TASK": 
        return state.map(
          (todo) => {
            const { id, completed } = todo;
            return id === action.id ? { ...todo, completed: !completed } : todo;
          }
        );
      case "UPDATE":
        return state.map(
          (todo) => {
              const { todoData } = action;
              return todo.id === todoData.id ? todoData : todo;
          }
        );
      default : return state;
    }
  }

  const [ todos, dispatch ] = useReducer(reducer, getInitialTodos()); // use reducer
    
  useEffect(
    () => {
      // storing todos items
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    ,[ todos ]
  );

  /* CRUD methods */
  const addTodo = (todo) => {
    const { length } = todos;
    todo.id = length === 0 ? 1 : todos[length - 1].id + 1;
    dispatch({ type: "ADD", todo: todo });
    toSetEditingAndCurrentTodo(false, initialState);
  }

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE", id : id });
    toSetEditingAndCurrentTodo(false, initialState);
  }

  const handleTodoTask = (id) => { dispatch({ type: "HANDLE_TODO_TASK", id: id }); }

  const editTodo = (todo) => {
    toSetEditingAndCurrentTodo(true, todo);
    dispatch({ type: "EDIT", todo: todo });
  }

  const updateTodo = (todo) =>{
    toSetEditingAndCurrentTodo(false, initialState);
    dispatch({ type: "UPDATE", todoData: todo });
  }

  function getInitialTodos(){
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);

    return savedTodos || [];
  }

  function toSetEditingAndCurrentTodo(editing, currentTodo){
    setEditing(editing);
    setCurrentTodo(currentTodo);
  }

  return (
    <div className="container-fluid margin-big-top">
      <HeaderTitle title="Todo Page" />
            
      <div className="container mt-5">
        <div>
          <div>
            <p className="lead font-weight-bold font-size-3 text-center">{ !editing ? "Add" : "Edit" } todo</p>
            <TodoForm isEditing={ editing } 
              todoAction={ !editing ? addTodo : updateTodo }
              currentTodo={ currentTodo }
            />
          </div>
          <ul >
            {
              todos.length === 0 ? <li>No todo task yet.</li> :
              <TodoList todos={ todos }
                handleTodoTask={ handleTodoTask }
                deleteTodo={ deleteTodo }
                editTodo={ editTodo } /> 
            }   
          </ul>
        </div>
      </div>
    </div>
  );
}