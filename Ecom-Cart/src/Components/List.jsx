export const List = ({ ele, removeProduct, addToCart, isExist, removeFromCart }) => {

    return (
        <tr>
            <td className="fw-semibold">{ele}</td>

            <td>
                {
                    isExist
                        ? <button className="btn btn-danger btn-sm px-3"
                            onClick={() => removeFromCart(ele)}>
                            Remove
                          </button>

                        : <button className="btn btn-success btn-sm px-3"
                            onClick={() => addToCart(ele)}>
                            Buy
                          </button>
                }
            </td>

            <td>
                <button
                    className="btn btn-danger btn-sm px-3"
                    onClick={() => removeProduct(ele)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}