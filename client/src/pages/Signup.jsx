import React from 'react'

const Signup = () => {

    const onFinish = ()=>{

    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary" style={{ height: "100vh" }}>
      <form onSubmit={onFinish} style={{ width: "400px" }} className="p-4 bg-light rounded shadow">
      <h2 className="">SignUp</h2>
      <hr />
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" placeholder='First Name'/>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" placeholder='Last Name'/>
      </div>
    </div>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" placeholder='Email address'/>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" placeholder='Password'/>
  </div>


  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

  
</form>
    </div>
  )
}

export default Signup
