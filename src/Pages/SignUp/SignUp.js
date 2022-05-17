import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import Loading from "../Shared/Loading/Loading";


const SignUp = () => {
  const {register,formState: { errors }, handleSubmit,} = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate()
  let signUpError;
  if(user){
    signOut(auth)
    navigate('/login')
  }

  if(loading){
    return <Loading/>
  }
  if(error){
    signUpError = <p>{error.message}</p>
  }
  
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
  };


  return (
    <div className="flex h-screen justify-items-center">
      <div class="card m-auto shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-md">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input-group input-group-vertical">
              <span className="bg-white text-md">Name</span>
              <input
                type="text"
                name="name"
                class="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]"
                {...register("name", { required: true })}
              />
              <p className="text-red-500">
                {errors.name?.type === "required" && "Name is required"}
              </p>
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-white text-md">Email</span>
              <input
                type="email"
                name="email"
                class="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]"
                {...register("email", { required: true })}
                {...register("email", {
                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                })}
              />
              <p className="text-red-500">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" && "Enter a valid email"}
              </p>
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-white text-md">Password</span>
              <input
                type="password"
                name="password"
                class="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]"
                {...register("password", { required: true })}
                {...register("password", {
                  minLength: 6,
                })}
              />
              <p className="text-red-500">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" && "Password should at least 6 characters or more"}
              </p>
              <span className="bg-white text-md">Forgot Password?</span>
            </label>
            {signUpError}
            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="sign up"
                class="btn text-white bg-black btn-wide uppercase"
              />
            </div>
          </form>
          <span className="text-xs text-center">
            Already have an account?
            <Link className="text-primary" to="/login">
              Login Now
            </Link>
          </span>
          <div className="divider">OR</div>
          <button class="btn uppercase text-black border-black hover:text-white active:text-white">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
