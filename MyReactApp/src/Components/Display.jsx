import { useState } from "react"
import { List } from "./List"


export const Display = ({ product, removeProduct }) => {

    var [cart, setCart] = useState([])

    const addTocart = (name) => {
        var newArray = [...cart, name]
        setCart(newArray)
    }

    const removeFromcart = (name) => {
        var newArray = cart.filter(ele => {
            return ele != name
        })
        setCart(newArray)
    }

    return <>
        <table className="table table-striped table-hover table-bordered shadow rounded">
            <thead className="table-dark text-center">
                <tr>
                    <th>Product Name</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>

            <tbody className="text-center align-middle">
                {product.map(ele => <List key={ele} ele={ele} removeProduct={removeProduct} addTocart={addTocart} isExist={cart.includes(ele)} removeFromcart={removeFromcart}></List>)}

            </tbody>
        </table>
    </>
}