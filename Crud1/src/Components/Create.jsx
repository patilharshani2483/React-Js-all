import { useState } from "react";

export const Create = ({ addUser }) => {

  const [formData, setFormData] = useState({
    name: "",
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
      name: "",
      email: "",
      phone: "",
    });

  };

  return (
    <>

    <h1>Crud Opeartion</h1>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br /><br />

        <button>
          Add User
        </button>

      </form>
    </>
  );
};