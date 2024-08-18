import React, { useState } from "react";

export default function Login(){

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    
    
    return(
        <div>
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
                    value={password}></input>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
}

