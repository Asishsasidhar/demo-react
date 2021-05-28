import React from 'react';
import {AllSolutions} from "../AllSolutions"
import Requirments from './requirments';
import {Products}from "../Products"
import {FilterMenu} from "../FilterMenu"
export const ContentScreen = () => {
  return (
    <>
    <div style={{marginTop: "5px"}}>
    <AllSolutions/>
      </div>
      <div style={{display:"inline-block"}}>
        <FilterMenu />
        <Products></Products>
        </div>
    </>
    )
}