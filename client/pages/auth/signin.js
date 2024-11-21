// pages/auth/login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email: values.email,
            password: values.password
        },

        // Redirect to home page

        onSuccess: (data) => Router.push('/')

    });

    const { email, password } = values;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table({ email, password });
        const response = await doRequest();
        console.log(response); // Log response for debugging
    };

    const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
                <h2 className="text-center mb-4">Login</h2>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                        required
                    />
                </div>

                <div className="form-group mt-3">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                        required
                    />
                </div>

                {/* Display errors */}
                {errors}
                <div className="mt-4 text-center">
                    <button className="btn btn-primary btn-block">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
