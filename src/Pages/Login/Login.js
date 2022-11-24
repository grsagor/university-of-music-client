import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const {login,providerLogin} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error.message))
    }

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
         .then(result => {
            const user = result.user;
            navigate(from, {replace: true});
            console.log(user);
         })
         .catch(err => console.log(err));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>New? <Link to='/signup'><button className='btn'>Sign Up</button></Link> Or,</p>

                    <div className='text-center'>
                    <div className='m-2'><button className='btn btn-primary' onClick={handleGoogleSignIn}>Log In Google</button></div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Login;