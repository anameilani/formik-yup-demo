import React, {Component} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const validate= Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required!'),

    email:  Yup.string()
        .required('Email is required')
        .email('Email is invalid'),

    username: Yup.string()
        .required('Username is required'),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(/[A-Z]/, 'Password must be contain at least 1 uppercase')
        .matches(/[a-z]/, 'Password must be contain at least 1 lowercase')
        .matches(/[!@#\$%\^&\*]/, 'Password must be contain at least 1 special character')
        .matches(/[0-9]/, 'Password must be contain at least 1 number'),

    confirmPassword:  Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords not match!')
        .required('Please input your password again!')
})

const FormRegisterFormik= () => (
            <div style={{width: 500, marginTop: 20, marginLeft: '25%'}}>
                <h4 className="title">Create New Account using Formik</h4>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        username:'',
                        password: '',
                        confirmPassword: ''
                    }}

                    validationSchema={validate}

                    
                    onSubmit={fields => {
                        alert('Success Register New Account! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}

                >
                    
                    {({ errors, touched }) => (
                        <Form>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="firstName" className="label-text">First Name : </label>
                                    <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} placeholder="First Name" />
                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="lastName" className="label-text">Last Name : </label>
                                    <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} placeholder="Last Name" />
                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="label-text">Email : </label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Your Email" />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username" className="label-text">Username :</label>
                                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} placeholder="Username" />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="label-text">Password :</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Password" />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword" className="label-text">Confirm Password :</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} placeholder="Confirm Password" />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </Form>
                    )}

                </Formik>

            </div>
        
        )
    

export default FormRegisterFormik