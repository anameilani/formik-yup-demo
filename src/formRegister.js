import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

function FormRegister(){

    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    const [errorPassword, setErrorPassword]= useState(null)
    const [errorConfirmPass, setErrorConfirmPass]= useState(null)
    const [allValid, setAllValid]= useState(false)

    const changePassword= (e) =>{
        let input= e.target.value

        let upperCaseValidation = new RegExp("^(?=.*[A-Z])")
        let lowerCaseValidation = new RegExp("^(?=.*[a-z])")
        let specialCharValidation = new RegExp("^(?=.*[!@#\$%\^&\*])")
        let numberValidation = new RegExp("^(?=.*[0-9])")
        let lengthValidation = new RegExp("^(?=.{5,})")

        if(lengthValidation.test(input)) {
            console.log('masuk length')
            setErrorPassword(null)
        }
        else {
            console.log('masuk length')
           
            setErrorPassword('Password must be at least 6 characters')
        }

        if(!upperCaseValidation.test(input)) setErrorPassword('Password must be contain at least 1 uppercase')
        else setErrorPassword(null)

        if(!lowerCaseValidation.test(input)) setErrorPassword('Password must be contain at least 1 lowercase')
        else setErrorPassword(null)
        
        if(!specialCharValidation.test(input)) setErrorPassword('Password must be contain at least 1 special character')
        else setErrorPassword(null)

        if(!numberValidation.test(input)) setPassword('Password must be contain at least 1 number')
        else setErrorPassword(null)


        console.log(input)
        console.log(errorPassword)
        setPassword(input)
    }

    const changeConfirmPassword= (e) => {
        let input= e.target.value

        if(input !== password){
            setErrorConfirmPass('Password not match')
        }else{
             setErrorConfirmPass(null)
             setAllValid(true)
        }

        setConfirmPassword(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(allValid && errorPassword=== null && errorConfirmPass === null){
            let data=[{
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'username': username,
                'password': password,
                'confirmPassword': confirmPassword


            }]

        
            alert('Success Register New Account!  :-)\n\n' + JSON.stringify(data, null, 4))
        }else{
            alert('Oppss...Check Your Input!')
        }
    }


    return (
        <div style={{width: 500, marginTop: 20, marginLeft: '25%'}}>
            <h4 className="title">Create New Account using Formik</h4>
            <Form onSubmit={handleSubmit} >
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label className="label-text">First Name :</Form.Label>
                    <Form.Control onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label className="label-text">Last Name :</Form.Label>
                    <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridEmail">
                    <Form.Label className="label-text">Email :</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group controlId="formGridUsername">
                    <Form.Label className="label-text">Username :</Form.Label>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Your Username" required />
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                    <Form.Label className="label-text">Password :</Form.Label>
                    <Form.Control onChange={changePassword} type="password" placeholder="Password" required />
                    <p className="invalid-text">{errorPassword}</p>

                </Form.Group>
                <Form.Group controlId="formGridConfirmPassword">
                    <Form.Label className="label-text">Confirm Password :</Form.Label>
                    <Form.Control onChange={changeConfirmPassword} type="password" placeholder="Confirm Password" required/>
                    <p className="invalid-text">{errorConfirmPass}</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default FormRegister