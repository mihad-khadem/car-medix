import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle} from "react-icons/fc";
const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { loginUser, handleGoogleLogin } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        loginUser(email, password)
        .then(res => {
            navigate(location?.state ? location.state : '/')
            console.log(res.user);
            if(res.user){
                Swal.fire('success', 'User Login Success', 'success')
            }
        })
        .catch(err => {
            Swal.fire('error', err.message)
        })
        
    }
    const googleLogin = () => {
        handleGoogleLogin()
        .then(() => {
            navigate(location?.state ? location.state : '/')
          })
          .catch(err => console.log(err))
    }

  return (
    <div className="flex justify-center mt-20">
      <div className="w-96 bg-gray-400 rounded-lg shadow-lg">
        <h2 className="text-center mt-5 text-3xl font-bold">Login Now</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Login" className="btn btn-outline" />
          </div>
          <div>
            <p>do not have an account? <Link to={'/signup'} className="hover:underline">Sign up</Link></p>
          </div>
        </form>
        <div className="flex justify-center mb-2">
            <button onClick={googleLogin} className="btn btn-circle"><FcGoogle className="text-3xl"/ ></button>
          </div>
      </div>
    </div>
  )
};


export default Login;
