import React, { useEffect, useState }from 'react';
import { HeaderTitleAuth } from '../parts/HeaderTitleAuth';
import { InputFieldAuth } from '../parts/InputFieldAuth';
import './form.style.css';

export default function UserSignUp(){
  const initialState = {
    data: {
      email: '',
      password: '',
      cfpswd: '' },
    isRegister: false
  }

  const [user, setUser] = useState(initialState);

  const handleInputChange = (event) => {
    const { name , value } = event.target;

    setUser({...user, data : { ...user.data, [name] : value }});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!user.data.email.trim() ||
      !user.data.password.trim() ||
      !user.data.cfpswd.trim()){
      alert("Must input email, password and confirm password");
      return;
    }
        
    alert("Successful Register");
    setUser({ ...user, isRegister : !user.isRegister });
  }

  return (
    <div className="container-fluid margin-big-top">
      <div className="container pt-5">
        <div className="card m-auto w-50 text-center shadow">
          <HeaderTitleAuth text="Sign-up" />
          <div className="card-body mt-5 p-0">
            <form className="form-style-1"
              onSubmit={ handleSubmit }>
              <div className="px-5">
                <InputFieldAuth inputType="email" property="email" placeholder="email" />
                <InputFieldAuth inputType="password" property="password" placeholder="password" />
                <InputFieldAuth inputType="password" property="cfpswd" placeholder="confirm password" />
              </div>
              <button type="submit" className="btn btn-info w-100 p-3">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
