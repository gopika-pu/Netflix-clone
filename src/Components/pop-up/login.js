import axios from 'axios'
import React, { useState } from 'react'
import './login.css';

const Login = ({ closePopup }) => {

    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name , setName] = useState("");

    const emailError =
    !email
      ? "Email is required*"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? "Invalid email format"
      : "";

  const passwordError =
    !password
      ? "Password is required*"
      : password.length < 6
      ? "Password must be at least 6 characters"
      : "";

    

    const handleSubmit = () => {
  if (emailError || passwordError) {
    alert("Fix errors before submitting");
    return;
  }

  const payload = {
    email,
    password,
    ...(isSignup && { name })
  };

  console.log("Sending credentials:", payload);

  const url = isSignup
    ? "http://localhost:5000/signup"
    : "http://localhost:5000/login";

  axios.post(url, payload)
    .then((res) => {
      if (!isSignup) {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        localStorage.setItem("user", JSON.stringify({ email }));
        alert("Login Success");
        closePopup();
      } else {
        alert("Signup Successful");
        setIsSignup(false);
      }
    })
    .catch((err) => {
      alert(isSignup ? "Signup Failed" : "Login Failed");
      console.log(err);
    });
};


    


    return (
        <div className='pop-up space-y-4 p-10 text-center rounded-md shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
            <h2 className='font-semibold text-lg text-center'> {isSignup ? "Create Account" : "Sign In"}</h2>

            {isSignup && (
                <input 
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border rounded-md shadow-md p-2.5 w-full'
                />
            )}
                {emailError && <p className="text-red-500 text-sm text-left">{emailError}</p>}
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"  value={email} className='border rounded-md shadow-md p-2.5 w-full'/>
                {passwordError && <p className="text-red-500 text-sm text-left">{passwordError}</p>}
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" value={password} className='border rounded-md shadow-md p-2.5 w-full' />
            <div className='flex justify-between pt-5'>    
                <button onClick={handleSubmit} className='p-2 rounded-md shadow-md text-white login-btn px-5'>{isSignup ? "Signup" : "Login"}</button>
                <button onClick={closePopup} className="text-red-500 p-2 close-btn px-5"> Close </button>
            </div>
            <p className='text-sm mt-3 text-gray-600'>
                {isSignup ? "Already have an account?" : "Don't have an account?"}
                <span
                    className='text-red-500 cursor-pointer font-semibold ml-1'
                    onClick={() => setIsSignup(!isSignup)}
                >
                    {isSignup ? "Login" : "Signup"}
                </span>
            </p>
        </div>
    )
}

export default Login