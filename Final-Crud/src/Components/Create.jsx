import { useEffect, useState } from "react"

export const Create=({addstudent,updateStudent,editIndex,editdata})=>{
    var[formdata,setformdata]=useState({
        user:"",
        email:"",
        phone:"",
    })

    //edit data show mate
    useEffect(()=>{
        setformdata(editdata);
    },[editdata])

    const handlechange=(e)=>{
        setformdata({
            ...formdata,[e.target.name]: e.target.value
            
        })
    }


    const handleSubmit=(e)=>
    {
        e.preventDefault()

        //after the update and show the add button
        if(editIndex!==null)

            {
                updateStudent(formdata)
            }

            else{
                addstudent(formdata)
            }
      
        setformdata({
            user:"",
            email:"",
            phone:""
        })
        
    }
 return(
    <>
      <form onSubmit={handleSubmit}>

        {/*  Search the data*/}

        <div className="mb-3">
          <label className="form-label">Name</label>
         <input
            type="text"
            name="user"
            value={formdata.user}
            onChange={handlechange}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>

           <input
            type="text"
            name="email"
            value={formdata.email}
            onChange={handlechange}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>

             <input
            type="text"
            name="phone"
            value={formdata.phone}
            onChange={handlechange}
            className="form-control"
            placeholder="Enter Phone"
          />
          <br></br>



        <button type="submit" className="btn btn-primary w-100">
       {
        editIndex!==null
        ? "Updated User"
        :"Add User"
       }
        </button>

        </div>
</form>
</>


 )
}