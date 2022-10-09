export function ContentSection(){
  return(
    <div className="container mt-5">
      <div className="row">
        {
          [1,2,3].map(value => {
            return (
              <div className="col-sm-4" key={ value }>
                <h3>Column { value }</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}