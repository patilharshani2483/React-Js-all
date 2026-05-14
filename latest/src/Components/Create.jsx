import { useEffect, useState } from "react";

export const Create = ({
  addUser,
  updatedUser,
  edit,
  editData,
  theme,
  Change
}) => {

  const [formdata, setFormData] = useState({
    user: "",
    email: "",
    phone: "",
  });

  // EDIT DATA SHOW IN INPUT
  useEffect(() => {

    if (editData) {

      setFormData(editData);

    }

  }, [editData]);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    // UPDATE
    if (edit !== null) {

      updatedUser(formdata);

    }

    // ADD
    else {

      addUser(formdata);

    }

    // CLEAR FORM
    setFormData({
      user: "",
      email: "",
      phone: "",
    });

  };

  return (
    <>

      <form onSubmit={handleSubmit}>


        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={Change}
        >
          {theme ? "Light Mode" : "Dark Mode"}
        </button>

        {/* USER */}
        <div className="mb-3">

          <label className="form-label">
            User Name
          </label>

          <input
            type="text"
            name="user"
            value={formdata.user}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Name"
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
            value={formdata.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Email"
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
            value={formdata.phone}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Phone"
          />

        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          {edit !== null
            ? "Update User"
            : "Add User"}
        </button>

      </form>

    </>
  );
};