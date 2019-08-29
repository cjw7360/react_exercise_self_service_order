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
            <li key={key} className={cssobj.itemcontainor}>
                <div className={cssobj.inner}>
                    <img src={require('../images/2.jpg')} alt="" />
                    <p className={cssobj.itemTitle}>{value.title}</p>
                    <p className={cssobj.itemPrice}>价格:{value.price}</p>
                </div>
            </li>
        )
    }

    genClass = (value, key) => {
        return (
            <div key={key}>
            <h3 className={cssobj.item_cate}>{value.title}</h3>
            <ul className={cssobj.item_list}>
                {value.list.map((value, key) => this.genLi(value, key))}
            </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="home">
                <div className={cssobj.menu}>
                {
                    this.state.list.map( (value, key) => this.genClass(value, key) )
                }
                </div> 
            </div>
        );
    }
}

export default Home;