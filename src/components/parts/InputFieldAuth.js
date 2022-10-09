export function InputFieldAuth({
  inputType,
  property,
  placeholder,
  handleInputChange
}){
  console.log("Property ", property);
  return(
    <div className="form-floating mb-3 mt-3">
      <input type={ inputType }
        className="form-control shadow" 
        id={ property }
        placeholder={ `Enter ${ placeholder.toLowerCase() }:` } 
        name={ property }
        onChange={ handleInputChange }/>
      <label htmlFor={ property }>{ placeholder }</label>
    </div>
  )
} 