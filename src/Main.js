import React,{useReducer} from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import {CartItems} from "./components/CartItems"
import App from './App';
// import Mainscreen from './Mainscreen';
// import Requirments from './requirments';
export const UserContext = React.createContext()
export const initalState = {
  "cartItems": [],
  "searchText": "",
  "selectedTab": "online-presence"
}
const reducer = (state, action) => {
  console.log("action: ",action)
  switch (action.type) {
    case "add-item":
      return { ...state, cartItems: [...state.cartItems, action.value ]}
    case "remove-item":
      return { ...state, cartItems: state.cartItems.filter((product)=> product.id !=action.value.id ) }
    case 'reset-cart':
      return { ...state, cartItems: initalState.cartItems }
    case 'select-tab':
      return { ...state, selectedTab: action.value }
    case 'search-text':
      return {...state, searchText: action.value}
    default:
      return initalState
  }
} 

const Main = () => {
    const [UserState, dispatch ] = useReducer(reducer, initalState)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ "dispatch": dispatch, "UserState": UserState }}>
        <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/cart-items" component={CartItems}></Route>
            {/* <Route exact path="/Marketplace" component={Mainscreen}></Route>
            <Route exact path="/Requirments" component={Requirments}></Route> */}
                </Switch>
                </UserContext.Provider>
        </BrowserRouter>
        );
}

export default Main;
