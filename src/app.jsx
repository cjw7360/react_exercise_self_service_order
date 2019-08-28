import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from '@/components/home'
import ItemContent from '@/components/ItemContent'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/item/:id" component={ItemContent}></Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;