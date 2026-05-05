import { useState } from "react"

export const Create = ({ addProduct }) => {

    var [name, setname] = useState()

    const SubmitHander = () => {

        addProduct(name)
    }

    return <>
        <div className="form-group d-flex gap-2">
            <input
                type="text"
                placeholder="Enter product name"
                className="form-control" onChange={(e) => setname(e.target.value)}
            />
            <button className="btn btn-success" onClick={SubmitHander}>
                Submit
            </button>
        </div>

    </>
}