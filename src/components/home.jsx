import React from 'react';
import '@/css/home.scss'
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
            <li key={key}>
                <div className="inner">
                    <img src={require('../images/2.jpg')} alt="" />
                    <p className="title">{value.title}</p>
                    <p className="price">价格:{value.price}</p>
                </div>
            </li>
        )
    }

    genClass = (value, key) => {
        return (
            <div key={key} className="item">
            <h3 className="item_cate">{value.title}</h3>
            <ul className="item_list">
                {value.list.map((value, key) => this.genLi(value, key))}
            </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="home">
                <div className="list">
                {
                    this.state.list.map( (value, key) => this.genClass(value, key) )
                }
                </div> 
            </div>
        );
    }
}

export default Home;