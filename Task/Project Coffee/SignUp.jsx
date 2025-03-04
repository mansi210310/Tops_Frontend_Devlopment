import { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email.includes("@")) newErrors.email = "Enter a valid email";
    if (data.password.length < 6) newErrors.password = "Password must be 6+ characters";
    if (data.password !== data.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) console.log("Form Submitted", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        
        {["name", "email", "password", "confirmPassword"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-700 capitalize">{field}</label>
            <input
              type={field.includes("password") ? "password" : "text"}
              name={field}
              value={data[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;