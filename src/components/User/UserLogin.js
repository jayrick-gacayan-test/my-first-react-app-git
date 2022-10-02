import React, { useState } from 'react';
import { HeaderTitleAuth } from '../parts/HeaderTitleAuth';
import { InputFieldAuth } from '../parts/InputFieldAuth';
import './form.style.css';

export default function UserLogin(){

  const initialState = {
    data: {
      email: '',
      password: ''
    },
    isLoggedIn: false,
    isLoggedOut: false
  }

  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
        
    setUser({ ...user, data: { ...user.data, [name] :value } });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if( !user.data.email.trim() || !user.data.password.trim() ){
        alert("Must input email and password"); return;
    }

    alert("Successful login");
    setUser({  ...user, isLoggedIn : !user.isLoggedIn });
  }
  

  return (
    <div className="container-fluid margin-big-top">
      <div className="container pt-5">
        <div className="card m-auto w-50 text-center shadow">
          <HeaderTitleAuth text="Log-in" />
          <div className="card-body px-5 mt-5">
            <form className="form-style-1"
              onSubmit={ handleSubmit }>
              <InputFieldAuth inputType="email" property="email" placeholder="email"/>
              <InputFieldAuth inputType="password" property="password" placeholder="password" />
              <button type="submit" className="btn btn-primary w-25">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}