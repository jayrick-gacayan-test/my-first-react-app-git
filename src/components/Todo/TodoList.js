import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ 
  todos, 
  handleTodoTask, 
  deleteTodo, 
  editTodo }){
  
  return (
    todos.map(
      (todo) => {
        return (
          <TodoItem key={ todo.id } 
            todo={ todo }
            handleTodoTask={ handleTodoTask }
            deleteTodo={ deleteTodo }
            editTodo={ editTodo } />
        );
      }
    )
  );
}