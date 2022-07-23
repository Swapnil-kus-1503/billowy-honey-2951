import { Button } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
    <div>
        <div>
            <Button
            background={"#4296cb"}
            color={"#ffffff"} width={"200px"} marginLeft={'40rem'} marginBottom={'4rem'}>Proceed To Checkout</Button>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart