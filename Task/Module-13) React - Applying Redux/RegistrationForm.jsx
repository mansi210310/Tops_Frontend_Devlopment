import React, { useState } from "react";
import "./RegistrationFoem.css";

// Custom Hook for validation
const useValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.email.includes("@") || !values.email.includes(".")) {
      tempErrors.email = "Please enter a valid email address";
    }    
    if (values.username.length > 4) {
      tempErrors.username = "Username must be 4 characters or less";
    }
    if (!values.password) {
      tempErrors.password = "Password is required";
    }
    if (values.password !== values.retypePassword) {
      tempErrors.retypePassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setValues({ 
        ...values,
        [e.target.name]: e.target.value 
    });
  };

  return { values, errors, handleChange, validate };
};

const RegistrationForm = () => {
  const { values, errors, handleChange, validate } = useValidation({
    email: "",
    username: "",
    password: "",
    retypePassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    town: "",
    region: "",
    postcode: "",
    country: "United Kingdom",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully", values);
    } else {
      console.log("Form has errors", errors);
    }
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Username:</label>
        <input type="text" name="username" value={values.username} onChange={handleChange} />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Password:</label>
        <input type="password" name="password" value={values.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Retype Password:</label>
        <input type="password" name="retypePassword" value={values.retypePassword} onChange={handleChange} />
        {errors.retypePassword && <p className="error">{errors.retypePassword}</p>}

        <label>First Name:</label>
        <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />

        <label>Last Name:</label>
        <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />

        <label>Phone Number:</label>
        <input type="text" name="phone" value={values.phone} onChange={handleChange} />

        <label>Address:</label>
        <input type="text" name="address" value={values.address} onChange={handleChange} />

        <label>Town:</label>
        <input type="text" name="town" value={values.town} onChange={handleChange} />

        <label>Region:</label>
        <input type="text" name="region" value={values.region} onChange={handleChange} />

        <label>Postcode / Zip:</label>
        <input type="text" name="postcode" value={values.postcode} onChange={handleChange} />

        <label>Country:</label>
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Canada">Canada</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Russia">Russia</option>
        </select>

        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
