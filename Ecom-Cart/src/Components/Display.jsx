import { useState } from "react"
import { List } from "./List"

export const Display = ({ product, removeProduct }) => {

    const [cart, setCart] = useState([])

    const addToCart = (name) => {
        setCart([...cart, name])
    }

    const removeFromCart = (name) => {
        setCart(cart.filter(ele => ele !== name))
    }

    return (
        <div className="table-responsive">
            <table className="table custom-table align-middle">

                <thead>
                    <tr>
                        <th>Product</th>
                        <th className="text-center">Cart</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        product.map((ele, index) => (
                            <List
                                key={index}
                                ele={ele}
                                removeProduct={removeProduct}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                isExist={cart.includes(ele)}
                            />
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}