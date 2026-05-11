import { useState } from "react";

export const Add = ({ addUser }) => {


    const [formdata, setformdata] = useState({
        user: "",
        email: "",
        phone: "",
    })

    //handle change the event
    const handlechange = (e) => {
        setformdata({
            ...formdata, [e.target.name]
                : e.target.value
        })
    }


    //handle submit event
    const handleSubmit = (e) => {
        e.preventDefault()
        addUser(formdata)
        setformdata({
            user: "",
            email: "",
            phone: "",
        })
    }


    return (
        <>

            <form onSubmit={handleSubmit}>

                {/* NAME */}

                <div className="mb-3">

                    <label className="form-label">
                        Name
                    </label>

                    <input
                        type="text"
                        name="user"
                        className="form-control"
                        value={formdata.user}
                        onChange={handlechange}
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
                        onChange={handlechange}
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
                        onChange={handlechange}
                        className="form-control"
                        placeholder="Enter Phone"
                    />

                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Add User
                </button>

            </form>



        </>
    );
};
