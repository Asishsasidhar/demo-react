import React,{useContext} from 'react'
import {UserContext} from "../../Main"
import { Products } from '../Products'


export const CartItems = (props) => {
    const rootState = useContext(UserContext)
    let products = rootState ? rootState.UserState.cartItems : []
    console.log("products: "+JSON.stringify(products))
    return (
        <Products filter={[]} products={products}></Products>
    )

}