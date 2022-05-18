import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  let loginError;
  if (error) {
    loginError = <p className="text-red-500">{error.message}</p>;
  }
  if (gError) {
    loginError = <p className="text-red-500">{gError.message}</p>;
  }
  if (loading || gLoading) {
    return <Loading />;
  }
  return (
    <div className="flex h-screen justify-items-center">
      <div className="card m-auto shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input-group input-group-vertical">
              <span className="bg-white text-md">Email</span>
              <input
                type="email"
                name="email"
                className="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]"
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
            <br />

            <label className="input-group input-group-vertical">
              <span className="bg-white text-md">Password</span>
              <input
                type="password"
                name="password"
                className="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]"
                {...register("password", { required: true })}
                {...register("password", {
                  minLength: 6,
                })}
              />
              <p className="text-red-500">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  "Password should at least 6 characters or more"}
              </p>
            </label>
            <br />
            {loginError}

            <div className="flex items-center justify-center">
              <input
                type="submit"
                value="login"
                className="btn w-[327px] text-white bg-black uppercase"
              />
            </div>
          </form>

          <span className="text-md text-center">
            New to Doctors Portal?
            <Link className="text-primary" to="/signup">
              Create New Account
            </Link>
          </span>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn uppercase text-black border-black hover:text-white active:text-white"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
