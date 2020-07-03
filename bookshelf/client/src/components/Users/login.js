import React, {Component} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
    .min(6, 'Too short')
    .required('Password is required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
});

class Login extends Component {
    state = {
        success: false,
        validation: false
    }

    render(){
        return(
            <div className="container form_container">
                <h1>Welcome back</h1>
                <hr />
                <h4>Sign in here</h4>
                <Formik
                    initialValues={{
                        email: 'paulzotoff@gmail.com',
                        password: 'test'
                    }}
                    validationSchema = {LoginSchema}
                    onSubmit={values => {console.log(values)}}
                >
                    {(
                        {
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        }
                    )=>(
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="twelve columns">
                                    <input 
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        values={values.email}
                                        placeholder="Enter email"
                                        className="u-full-width"
                                    />
                                    {
                                        errors.email && touched.email ?
                                        <div className="error__label">
                                            {errors.email}
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="twelve columns">
                                    <input 
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        values={values.password}
                                        placeholder="Enter password"
                                        className="u-full-width"
                                    />
                                    {
                                        errors.password && touched.password ?
                                        <div className="error__label">
                                            {errors.password}
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="twelve columns">
                                    <button type="submit">Log in</button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Login;