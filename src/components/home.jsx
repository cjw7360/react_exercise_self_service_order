import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '@/css/index.css'
import cssobj from '@/css/home.module.css'
const axios = require('axios');


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list: [],
            domain: 'http://a.itying.com/',
        };
    }

    requestData = () => {
        let api = this.state.domain + 'api/productlist';
        axios.get(api).then((res) => {
                                        this.setState({list: res.data.result});
                                        // console.log('cjwwww',this.state.list["0"].list);
                                    }).catch(function(err) {console.log(err)});
    }

    componentDidMount() {
        this.requestData();
    }

    genLi = (value, key) => {
        return (
            <li key={key} className={cssobj.item_container}>
                <div className={cssobj.item_inner}>
                    <Link to={`/ItemContent/${value._id}`} className={cssobj.item_link}>
                        <img src={`${this.state.domain}${value.img_url}`} alt="item_image" className={cssobj.item_image}/>
                        <p className={cssobj.item_title}>{value.title}</p>
                        <p className={cssobj.item_price}>价格:{value.price}</p>
                    </Link>
                </div>
            </li>
        )
    }

    genClass = (value, key) => {
        return (
            <div key={key}>
            <h3 className={cssobj.item_category}>{value.title}</h3>
            <ul className={cssobj.item_ul}>
                {value.list.map((value, key) => this.genLi(value, key))}
            </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="home">
                <div className={cssobj.menu_page}>
                {
                    this.state.list.map( (value, key) => this.genClass(value, key) )
                }
                </div> 
            </div>
        );
    }
}

export default Home;