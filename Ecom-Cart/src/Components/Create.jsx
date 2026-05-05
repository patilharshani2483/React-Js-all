import { useState } from "react"

export const Create = ({ addProduct }) => {

    const [name, setName] = useState("")

    const SubmitHandler = () => {
        if (!name.trim()) return
        addProduct(name)
        setName("")
    }

    return (
        <div className="input-group mt-3">
            <input
                type="text"
                value={name}
                placeholder="Enter product name..."
                className="form-control custom-input"
                onChange={(e) => setName(e.target.value)}
            />

            <button className="btn btn-primary px-4" onClick={SubmitHandler}>
                Add
            </button>
        </div>
    )
}