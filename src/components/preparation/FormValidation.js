import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);

    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Accessible Form</h2>
      {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby="name-error"
          />
          {errors.name && <p id="name-error" style={{ color: "red" }} aria-live="polite">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && <p id="email-error" style={{ color: "red" }} aria-live="polite">{errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby="password-error"
          />
          {errors.password && <p id="password-error" style={{ color: "red" }} aria-live="polite">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default FormValidation