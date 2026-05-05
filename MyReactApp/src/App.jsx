import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'
import { Create } from './Components/Create'
import { Display } from './Components/Display'
import { Title } from './Components/Title'
import { List } from './Components/List'
import { Error } from './Components/Error'

const App = () => {

  var [product, setProduct] = useState([])

  const addProduct = (name) => {
    var newArray = [...product, name]
    setProduct(newArray)
  }

  const removeProduct = (name) => {

    var newArray = product.filter(ele => {
      return ele != name
    })
    setProduct(newArray)

  }

  return <>
    <div className='container'>

      <div className='row'>
        <div className='col-6 mx-auto card p-5 mt-3'>
          <Title />
          <hr />
          <Create addProduct={addProduct} />
          <br />
          {product.length > 0 ? <Display product={product} removeProduct={removeProduct} /> : <Error />}



        </div>
      </div>
    </div>
  </>
}

export default App