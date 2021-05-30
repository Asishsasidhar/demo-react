import React, { useState, useEffect,useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './Product.css';

import {UserContext} from '../../App'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export const Products = (props) => {
    let {filters} = props
    let productsData = props.products
    const userContext = useContext(UserContext)
    
    
    let cartUpdate = (product) => {
        console.log("product: ",product)
        userContext.dispatch({ "type": product.action, "value": product })
        
    }

    let searchedData = (data, searchtext) => {
        let temp_data = [];
        console.log("searchtext: ",searchtext)
        for (let i = 0; i < data.length; i++) {
            console.log("title: ",data[i].title)
            if (data[i].title.toLowerCase().indexOf(searchtext.toLowerCase()) == 0) {
                temp_data.push(data[i])
                console.log("match")
            }
                
        }
        return temp_data
    }

    let checkProdFilter = (product) => {
        console.log("tags: "+product.tags)
        for (let i = 0; i < filters.length; i++) {
            console.log(filters[i])
            if (product.tags.indexOf(filters[i]) == -1)
                return false
        }
        return true
    }
    let filteredData = productsData ? productsData.filter(checkProdFilter) : []
    let search_text = userContext.UserState.searchText
    filteredData = (filteredData.length > 0 &&  search_text!= "") ? searchedData(filteredData,search_text) : filteredData
    console.log("filtered: ", filteredData)
        // console.log("hello"+props.searchProduct);
        return (
            <div className="allsolutionsclass">
                <p className="allsolutionheader"> </p>
                <GridList cellHeight={'auto'} spacing={4} className='gridList' cols={3}>
                    
                
                    {filteredData.map((product) => (
                        
                        <GridListTile key={product.id} cols={1}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height='auto'
                                
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent className="cardContent">
                                        <p className="header">
                                            {product.title}
                                        </p>
                                        <p className="description">
                                            {product.description}
                                        </p>
                                    </CardContent>
                                </CardActionArea>
                                {/* <CardActions> */}
                                <div className="midSection">
                                    <ul>
                                        {product.attributes.map((attr) => (
                                            <li className="attributes all">
                                                {attr}
                                            </li>
                                        ))}
                                    </ul>
                                    <div>
                                        <p className="price">{product.price}</p>
                                        <p className="priceDesc">{product.priceDesc}</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", float: "left", position: "relative", top: "-1rem" }}>
                                    <ThumbUpIcon fontSize='small' style={{ color: "#20DCEB", marginLeft: "1rem" }} />
                                    <p className="likes">{product.likes}</p>
                                </div>
                                <button className={product.action === 'remove-item' ? 'removeButton' : 'addButton'} onClick={(event) => {
                                    cartUpdate(product)
                                    product.action = product.action == "remove-item" ? "add-item" : "remove-item"
                                }} >{product.action}</button>
                                {/* </CardActions> */}
                            </Card>
                        </GridListTile>

                    ))}
                
                </GridList>
            </div>
        );
    
}

