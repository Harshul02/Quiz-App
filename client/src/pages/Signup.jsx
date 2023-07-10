import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const onFinish = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/admin/register', {
            firstname,
            lastname,
            email,
            password,
          });
      
          if (response.data.success) {
            console.log('Signup successful:', response.data);
            navigate("/");
          } else {
            console.error(response.data.message);
          }      
        } catch (error) {
          console.error('Signup error:', error.message);
        }
      };
      

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary" style={{ height: "100vh" }}>
      <form onSubmit={onFinish} style={{ width: "400px" }} className="p-4 bg-light rounded shadow">
      <h2 className="">SignUp</h2>
      <hr />
      <div className="row mb-4">
  <div className="col">
    <div className="form-outline">
      <input
        type="text"
        id="form3Example1"
        className="form-control"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  </div>
  <div className="col">
    <div className="form-outline">
      <input
        type="text"
        id="form3Example2"
        className="form-control"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  </div>
</div>

<div className="form-outline mb-4">
  <input
    type="email"
    id="form3Example3"
    className="form-control"
    placeholder="Email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>

<div className="form-outline mb-4">
  <input
    type="password"
    id="form3Example4"
    className="form-control"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>



<button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>


  
</form>
    </div>
  )
}

export default Signup
