import React , { useState, useEffect } from 'react';
import { TodoButton } from './TodoButton'
export default function TodoItem({
  todo, 
  handleTodoTask, 
  deleteTodo, 
  editTodo 
}){
  const { id, title, name, completed } = todo;
  const [ toCompleted, setToCompleted ] = useState(false);

  useEffect(
  () => {
    setToCompleted(completed)
  }
  , [completed]);
        
  return (
    <li key={ id } 
      className="todo-list-item">
      <input type="checkbox" 
        className="checkbox" 
        checked={ toCompleted }
        onChange={ () => handleTodoTask(id) }/>
      <span className={ completed ? 'todo-completed' : '' } 
        style={{ 
          padding: "8px", 
          display: "inline-block" 
        }}>
        { `Title: ${ title } Name: ${ name }` }
      </span>
      <TodoButton btnClass="danger" 
        data={ id } 
        iconName="trash" 
        onClick={ deleteTodo }  />
      <TodoButton btnClass="warning" 
        iconName="pen" 
        data={ todo } 
        onClick={ editTodo } />
    </li>
  );
}