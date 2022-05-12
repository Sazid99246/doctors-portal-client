import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex h-screen justify-items-center'>
            <div class="card m-auto shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-xl">Sign Up</h2>
                    <label className="input-group input-group-vertical">
                        <span className='bg-white text-[10px]'>Name</span>
                        <input type="text" class="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]" />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='bg-white text-[10px]'>Email</span>
                        <input type="email" class="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]" />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='bg-white text-[10px]'>Password</span>
                        <input type="password" class="h-[44px] w-[327px] input input-bordered border-[rgba(207,207,207,1)]" />
                        <span className='bg-white text-[10px]'>Forgot Password?</span>
                    </label>
                    <button class="btn text-white bg-black uppercase">Login</button>
                    <span className='text-xs text-center'>Already have an account?
                        <Link className='text-primary' to='/login'>  Login Now</Link>
                    </span>
                    <div className="divider">OR</div>
                    <button class="btn uppercase text-black border-black hover:text-white active:text-white">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;