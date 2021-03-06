import React,{useRef} from 'react'
import {Card , Form , Button} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext'
function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef()
    const {signup} = useAuth() 

    function handleSubmit(e){
        e.preventDefault()
        signup (emailRef.current.value,passwordRef.current.value)
    }
    return (
        <div>
            <Card>
                <h2 className='text-center mb-4'>Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation </Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button className="w-100" type="submit">Submit</Button>
                </Form>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? Log in
            </div>
        </div>
    )
}

export default Signup
