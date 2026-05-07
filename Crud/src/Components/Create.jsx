import { useEffect, useState } from "react";

//app.jsx se add function reaceive hoga
export const Create = ({
    addUser,
    editData,
    updateUser,
    editIndex
})=>{


    //form state
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        phone:"",
    }); 


    //useEffect

    useEffect(()=>{
        if(editData)
        {
            setFormData(editData)
        }
    },[editData]);




    //input change:input value state me save

        const handleChange=(e)=>
        {
            setFormData({...formData,[e.target.name]:e.target.value,});

        };



        const handleSubmit=(e)=>
        {
          e.preventDefault();
          addUser(formData);


          setFormData({
            name:"",
            email:"",
            phone:""
          });
        };



 return (
    <>
      <form onSubmit={handleSubmit}>

        <h1>Crud Operation</h1>

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
          {
            editIndex!==null
            ?"Update User"
            :"Add User"
          }
        </button>
       

      </form>
    </>
  );
};

    
    