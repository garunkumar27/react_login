import React, { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
// import Success from './Success';
import './Styles.css'

function Open() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // const navi = useNavigate;
    // <Router>
    //     <Routes>
    //         <Route path='./success' element={<Success />}></Route>
    //     </Routes>
    // </Router>
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // let reg=/$[gmail.com]/g;
        console.log(email, password);
        // let txt= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // console.log(txt);
        if ((email.includes('@')) && (password.length > 8)) {
            // if(email.match(txt)){
            alert("Logged in Successfully");
            }
         else {
            alert("Enter the Details Correctly");
        }
    }
    return (
        <div className='container '>
           
            <form onSubmit={submitHandler}>
                <div className='row  justify-content-center'>
                <div className='col-lg-8  bb text-center'>
                    <div className='row py-5'>
                    <h1>Welcome</h1>
                <label>E-Mail
                    <p><input type='text' className='inpt' value={email} placeholder="Enter Your Email" onChange={emailHandler} />
                    </p></label>
                
                <div className='col-lg-12'>
                <label>Password
                    <p><input type="password" className='psd' placeholder='Enter Your Password' value={password} onChange={passwordHandler} />
                    </p></label>
                </div>
                <div className='col-lg-12'>
                <button type='submit' className='bt'>Login</button>
                </div>
                </div>
                </div>
                </div>

            </form>
        </div>
    )
}
export default Open;