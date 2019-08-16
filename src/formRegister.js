import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

function FormRegister(){

    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    const [errorUpper, setErrorUpper]= useState(null)
    const [errorLower, setErrorLower]= useState(null)
    const [errorSpecial, setErrorSpecial]= useState(null)
    const [errorNumber, setErrorNumber]= useState(null)
    const [errorLength, setErrorLength]= useState(null)
    const [errorConfirmPass, setErrorConfirmPass]= useState(null)
    const [allValid, setAllValid]= useState(false)

    const changePassword= (e) =>{

        let input= e.target.value
        let upperCaseValidation = new RegExp("^(?=.*[A-Z])")
        let lowerCaseValidation = new RegExp("^(?=.*[a-z])")
        let specialCharValidation = new RegExp("^(?=.*[!@#\$%\^&\*])")
        let numberValidation = new RegExp("^(?=.*[0-9])")
        let lengthValidation = new RegExp("^(?=.{5,})")


        if(!lengthValidation.test(input)) setErrorLength('Password must be contain at least 6 character')
        else setErrorLength(null)

        if(!upperCaseValidation.test(input)) setErrorUpper('Password must be contain at least 1 uppercase')
        else setErrorUpper(null)

        if(!lowerCaseValidation.test(input)) setErrorLower('Password must be contain at least 1 lowercase')
        else setErrorLower(null)
        
        if(!specialCharValidation.test(input)) setErrorSpecial('Password must be contain at least 1 special character')
        else setErrorSpecial(null)

        if(!numberValidation.test(input)) setErrorNumber('Password must be contain at least 1 number')
        else setErrorNumber(null)

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
        if(allValid && errorConfirmPass === null){
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
            <h4 className="title">Create New Account without Formik</h4>
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
                    <p className="invalid-text">{errorLength}</p>
                    <p className="invalid-text">{errorUpper}</p>
                    <p className="invalid-text">{errorLower}</p>
                    <p className="invalid-text">{errorNumber}</p>
                    <p className="invalid-text">{errorSpecial}</p>
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