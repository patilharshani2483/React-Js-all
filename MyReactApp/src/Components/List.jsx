

export const List = ({ ele, removeProduct, addTocart, isExist, removeFromcart }) => {

    return <>
        <tr>
            <td className="fw-semibold">{ele}</td>
            <td>
                {isExist ? <button className="btn btn-danger btn-sm px-3" onClick={() => removeFromcart(ele)}>
                    Remove
                </button> : <button className="btn btn-success btn-sm px-3" onClick={() => addTocart(ele)}>
                    Buy
                </button>}
            </td>
            <td>
                <button className="btn btn-danger btn-sm px-3" onClick={(e) => removeProduct(ele)}>
                    Delete
                </button>
            </td>
        </tr>
    </>
}