import { useEffect, useState } from "react";

export const Create = ({
  addUser,
  updateUser,
  edit,
  editData,
  setEditIndex,
}) => {

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // SHOW EDIT DATA
  useEffect(() => {

    setFormdata(editData);

  }, [editData]);

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {

    e.preventDefault();

    if (edit !== null) {

      updateUser(formdata);

    } else {

      addUser(formdata);

    }

    // CLEAR INPUT
    setFormdata({
      name: "",
      email: "",
      phone: "",
    });

    setEditIndex(null);

  };

  return (
    <>
      <div className="container mt-5">

        <div className="card shadow-lg border-0 rounded-4 p-4">

          <h2 className="text-center mb-4 text-primary fw-bold">
            Student Management System
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Enter Username"
                className="form-control form-control-lg"
                value={formdata.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="form-control form-control-lg"
                value={formdata.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone"
                className="form-control form-control-lg"
                value={formdata.phone}
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary btn-lg w-100">

              {edit !== null ? "Update User" : "Add User"}

            </button>

          </form>

        </div>

      </div>
    </>
  );
};