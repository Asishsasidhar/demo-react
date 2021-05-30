import React,{useReducer} from 'react';
import {Header} from './components/Header'
import { FeatureTabs } from './components/Tabs'
import {ContentScreen} from './components/ContentScreen'
import "./App.css"
import 'antd/dist/antd.css';
import { Satellite } from '@material-ui/icons';

export const UserContext = React.createContext()
export const initalState = {
  "cartItems": [],
  "searchText": "",
  "selectedTab": "online-presence"
}
const reducer = (state, action) => {
  console.log("action: ",action)
  let updatedCartItems = { ...state.cartItems }
  switch (action.type) {
    case "add-item":
      return { ...state, cartItems: [...state.cartItems, action.value ]}
    case "remove-item":
      return { ...state, cartItems: updatedCartItems }
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
export default function App() {
  const [UserState, dispatch ] = useReducer(reducer, initalState)
  return (
    <UserContext.Provider value={{"dispatch": dispatch,"UserState": UserState }}>
    <div className="firstclass">
      <Header></Header>
      <div style={{paddingLeft:"10px", paddingTop: "10px",paddingRight: "10px"}}>
      <FeatureTabs></FeatureTabs>
          <ContentScreen ></ContentScreen>
        </div>
    </div>
    </UserContext.Provider>
  );
}