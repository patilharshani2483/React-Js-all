import { useState } from "react"

 export const Create=({addProduct})=>{

    var [name,setname]=useState()

    const SubmitHandler=()=>{
        try {
            addProduct(name)
        } catch (error) {
            
        }
        
}

return<>

<div className="form-group d-flex gap-2">
    <input type="text"
    placeholder="Enter Product Name"
    className="form-control" onChange={(e)=>setname(e.target.value)}
    />
    <button className="btn btn-success" onClick={SubmitHandler}>

        
        Submit
    </button>
</div>
</>

}
