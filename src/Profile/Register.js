import React, { useState } from "react";

export default function Register(){

    const[name, setName] = useState('');
    const[phone,setPhone] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateName = (name) => /^[A-Z][a-zA-Z]*$/.test(name);
    const validatePhone = (phone) => /^\d{10}$/.test(phone);
    const validateEmail = (email) => /^(?!.*(spam|test))^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/.test(email);
    const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!validateName(name)) newErrors.name = 'Name must start with a capital letter';
        if (!validatePhone(phone)) newErrors.phone = 'Phone number must start with +91 and have 10 digits';
        if (!validateEmail(email)) newErrors.email = 'Email must be from gmail.com, outlook.com, or yahoo.com and not be a spam email';
        if (!validatePassword(password)) newErrors.password = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          // Perform registration logic here
          console.log('Registration successful');
          alert('Registration successful!');
          // Clear the form fields if needed
          setName('');
          setPhone('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else {
          console.log('Registration failed:', newErrors);
          alert('Registration failed. Please check the errors and try again.');
        }
    };

    return(
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name</label>
                <input
                    onChange={(e)=>setName(e.target.value)}
                    value={name} ></input>
                    {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Phone</label>
                <input
                onChange={(e)=>setPhone(e.target.value)}
                value={phone} ></input>
                {errors.phone && <p>{errors.phone}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                onChange={(e)=>setEmail(e.target.value)}
                value={email} ></input>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input 
                onChange={(e)=>setPassword(e.target.value)}
                value={password} ></input>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}></input>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>
            <div>
                <button>Register</button>
            </div>
        </form>
    );
}

