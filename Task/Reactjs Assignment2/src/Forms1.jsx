import React, { useState } from 'react'

const Forms1 = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPasswprd] = useState("")
    const [formData, setFormData] = useState([])
    const [error, setError] = useState(''); 

    const handleChange = (e) =>{
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPasswprd(value);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const emailInput = document.getElementById('email');

        if (!emailInput.checkValidity()) {
            setError('Please enter a valid email address.');
            emailInput.reportValidity();
            return;
        }
        setError('');
        
        setFormData([
            ...formData,
            {
                name:name,
                email:email,
                password:password
            }
        ])
        setName("")
        setEmail("")
        setPasswprd("")
        alert(`Name: ${name}\nEmail: ${email}`);
    }
    console.log(formData);
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} /><br /><br />
        <label htmlFor="">Email:</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChange} required /><br /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="">Password:</label>
        <input type="password" name="password" id="password" value={password} onChange={handleChange} /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Forms1
