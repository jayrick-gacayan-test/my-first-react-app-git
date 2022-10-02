export function InputFieldAuth({
  inputType,
  property,
  placeholder
}){
  return(
    <div className="form-floating mb-3 mt-3">
      <input type={ inputType }
        className="form-control shadow" 
        id={ property }
        placeholder={ `Enter ${ placeholder }:` } 
        name={ property }
        onChange={ handleInputChange }/>
      <label htmlFor={ property }>Email</label>
    </div>
  )
} 