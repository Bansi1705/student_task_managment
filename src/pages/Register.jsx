import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useEffect, useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState({});
  const navigate=useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    // mane=value mate
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData);

    setError({
      ...error,
      [e.target.name]: ""
    })
  };

  const validate = () => {
    const newError = {};
    if (!formData.name.trim()) {
      newError.name = "Full name is Required.";
    } else if (formData.name.length <= 3) {
      newError.name = "Minimum 3 Character Required.";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newError.email = "Invalide Email formate.";
    }
    if (!formData.password.trim()) {
      newError.password = "Password is Required.";
    } else if (formData.password.length < 6) {
      newError.password = "Minimum 6 Character Required.";
    }
    if (!formData.phone.trim()) {
      newError.phone = "Phone is Required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newError.phone = "Phone must be in 10 digit.";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("authData",JSON.stringify(formData));
      alert("Registaion succsefully......!!");
      navigate("/login");
    }
    else{
    alert("Somthing went wrong!");
    }
  };

  // useEffect(()=>{
  //     console.log(formData)
  // },[formData])
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">REGISTER</h1>
        <form action="" onSubmit={handleSubmit}>
          {/* name Feild */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full Name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            {error.name && <span className="error-msg">{error.name}</span>}
          </div>
          {/* email feild */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <span className="error-msg">{error.email}</span>}
          </div>
          {/* Phone feild */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone Number"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {error.phone && <span className="error-msg">{error.phone}</span>}
          </div>
          {/* password feild */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error.password && (
              <span className="error-msg">{error.password}</span>
            )}
          </div>
          {/* submit button */}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>

        <p className="link-text">
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </>
  );
}

export default Register;
