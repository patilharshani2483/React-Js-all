import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useState } from 'react'
import { Create } from './Components/Create'
import { Display } from './Components/Display'
import { Title } from './Components/Title'
import { Error } from './Components/Error'

const App = () => {

  const [product, setProduct] = useState([])

  const addProduct = (name) => {
    if (!name.trim()) return
    setProduct([...product, name])
  }

  const removeProduct = (name) => {
    setProduct(product.filter(ele => ele !== name))
  }

  return (
    <div className='app-bg d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>

            <div className='card custom-card shadow-lg border-0'>
              <div className='card-body p-4'>

                <Title />

                <Create addProduct={addProduct} />

                <div className='mt-4'>
                  {
                    product.length > 0
                      ? <Display product={product} removeProduct={removeProduct} />
                      : <Error />
                  }
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App