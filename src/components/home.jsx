import React from 'react';
import '@/css/index.css'
import cssobj from '@/css/home.module.css'
const axios = require('axios');


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list: [],
        };
    }

    requestData = () => {
        let api = 'http://a.itying.com/api/productlist';
        axios.get(api).then((res) => {
                                        this.setState({list: res.data.result});
                                        // console.log(this.state.list["0"].list);
                                    }).catch(function(err) {console.log(err)});
    }

    componentDidMount() {
        this.requestData();
    }

    genLi = (value, key) => {
        return (
            <li key={key} className={cssobj.item_container}>
                <div className={cssobj.item_inner}>
                    <img src={require('../images/2.jpg')} alt="" />
                    <p className={cssobj.item_title}>{value.title}</p>
                    <p className={cssobj.item_price}>价格:{value.price}</p>
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