import { auth } from './firebase'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(err => alert(err.message))

    }

    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className='login'>


            <div className='login__container'>
                <Link to='/'>
                    <img
                        className='login__logo'
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    />
                </Link>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login__signInButton'  >Sign in</button>
                </form>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec euismod urna. Mauris imperdiet ipsum a posuere sodales.</p>

                <button onClick={register} className='login__registerButton'>Create account</button>
            </div>



        </div>
    )
}

export default Login
