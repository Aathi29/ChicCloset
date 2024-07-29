import React, { useState } from "react";

export default function Register(){

    const[name, setName] = useState('');
    const[phone,setPhone] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    return(
        <div>
            <div>
                <label>Name</label>
                <input
                    onChange={(e)=>setName(e.target.value)}
                    value={name} ></input>
            </div>
            <div>
                <label>Phone</label>
                <input
                onChange={(e)=>setPhone(e.target.value)}
                value={phone} ></input>
            </div>
            <div>
                <label>Email</label>
                <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email} ></input>
            </div>
            <div>
                <label>Password</label>
                <input 
                onChange={(e)=>setPassword(e.target.value)}
                value={password} ></input>
            </div>
            <div>
                <label>Confirm Password</label>
                <input></input>
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    );
}