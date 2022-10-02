import React, { useState, useEffect } from 'react';
export default function TodoForm({ isEditing, todoAction, currentTodo }){

  const initialState = {
    id: null,
    title: '',
    name: '',
    completed: false
  }

  const [ todo, setTodo ] = useState(initialState);

  const handleInputChange = (event) => {
    const { name , value } = event.target;
    setTodo({ ...todo, [name] : value });
  }
    
  useEffect(
    () => {
      setTodo(props.currentTodo);
    }
    ,[currentTodo] 
  );

  const InputContainer = ({
    property,
    value,
  }) => {
    return (
      <div className="mb-3">
        <label htmlFor={ property.toLowerCase() } >
          { property }
        </label>
        <input type="text" 
          id={ property.toLowerCase() }
          name={ property.toLowerCase() }
          className="input-todo"
          value={ value }
          placeholder={ `${ property }...` }
          onChange={ handleInputChange }
          required />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>    
      </div>
    );
  }
    
  return (
    <form className="form-todo-container was-validated" 
      onSubmit={
        (event) => {
          event.preventDefault();
          if(!todo.title.trim() || !todo.name.trim()) return;

          todoAction(todo);
          setTodo(initialState);
        }
    }>
      <InputContainer property="Title" value={ todo.title } />
      <InputContainer property="Name" value={ todo.name } />
            
      <button className="style-button-1 button-success"
        style={{ 
          width: "60%", 
          margin: "auto", 
          textAlign: "center", 
          display: "block"
        }}>{ !isEditing ? "Add" : "Edit"} todo</button>
    </form>
  );
}