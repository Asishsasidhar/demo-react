import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import App from './App';
// import Mainscreen from './Mainscreen';
// import Requirments from './requirments';


const Main = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            {/* <Route exact path="/Marketplace" component={Mainscreen}></Route>
            <Route exact path="/Requirments" component={Requirments}></Route> */}
        </Switch>
        </BrowserRouter>
        );
}

export default Main;
