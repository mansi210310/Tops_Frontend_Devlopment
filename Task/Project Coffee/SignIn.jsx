import { useState } from "react";

const SignIn = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!data.email.includes("@")) newErrors.email = "Enter a valid email";
    if (data.password.length < 6) newErrors.password = "Password must be 6+ characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) console.log("Sign In Successful", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        
        {["email", "password"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-gray-700 capitalize">{field}</label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={data[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
