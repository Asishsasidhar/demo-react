import React,{useContext, useEffect, useState} from 'react';
import {AllSolutions} from "../AllSolutions"
import Requirments from './requirments';
import {Products}from "../Products"
import { FilterMenu } from "../FilterMenu"
import {UserContext} from "../../App"
import productData from './productData';
export const ContentScreen = () => {
  const [filterState, setFilterState] = useState([])
  const rootContext = useContext(UserContext)
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // if(rootContext.UserState.selectedTab == "busines") setProductsData(BusinessData
    setProductsData(productData
    )
  },[rootContext.UserState.selectedTab])
  return (
    <>
      <div style={{marginTop: "5px"}}>
      <AllSolutions/>
        </div>
        <div style={{display:"inline-block"}}>
          <FilterMenu filters={filterState} updateFilters={setFilterState} />
          {filterState.length > 0 && <><h1>Recommended Solutions </h1><Products products={productsData} filters={filterState} ></Products></>}
          <h1>All Solutions </h1>
          <Products products={productsData} filters={[]} ></Products>
          </div>
    </>
    )
}