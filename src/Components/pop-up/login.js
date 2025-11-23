import axios from 'axios'
import React, { useState } from 'react'
import './login.css';

const Login = ({ closePopup }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const payload = {
            email: email,
            password: password
        }

        axios.post('http://localhost:5000/login', payload)
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.access_token));
                alert("Login Success");
                console.log("Login Successful", res)
            })
            .catch((err) => {
                alert("Login Failed");
                console.log("Login Failed", err)
            })
    }


    return (
        <div className='pop-up space-y-4 p-10 text-center rounded-md shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
            <h2 className='font-semibold text-lg text-center'>Sign In</h2>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"  value={email} className='border rounded-md shadow-md p-2.5 w-full'/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} className='border rounded-md shadow-md p-2.5 w-full' />
            <div className='flex justify-between pt-5'>    
                <button onClick={handleSubmit} className='bg-blue-600 p-2 rounded-md shadow-md text-white login-btn px-5'>Login</button>
                <button onClick={closePopup} className="text-red-500 p-2 close-btn px-5"> Close </button>
            </div>
        </div>
    )
}

export default Login