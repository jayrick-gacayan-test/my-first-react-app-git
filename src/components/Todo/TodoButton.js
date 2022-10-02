import React from 'react';

export function TodoButton({ 
  btnClass, 
  iconName,
  data, 
  onClick 
}){
  return (
    <button className={ `style-button-1 float-end button-${ btnClass }` }
       onClick={ () => onClick(data) }>
       <i className={ `bi bi-${ iconName }-fill` }></i>
    </button>
  );
}