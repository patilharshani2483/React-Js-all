import { useState } from "react";

export const Create = ({ addUser }) => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // SUBMIT 
  const handleSubmit = (e) => {

    e.preventDefault();

    addUser(formData);

    // CLEAR FORM
    setFormData({
      username: "",
      email: "",
      phone: "",
    });

  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto mt-5 p-4 shadow rounded bg-light"
      >

        <h2 className="text-center mb-4">
          User Form
        </h2>

        {/* USERNAME */}
        <div className="mb-3">

          <label className="form-label">
            Username
          </label>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
          />

        </div>

        {/* EMAIL */}
        <div className="mb-3">

          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        {/* PHONE */}
        <div className="mb-3">

          <label className="form-label">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />

        </div>

        <button className="btn btn-primary w-100">
          Add User
        </button>

      </form>
    </>
  );
};