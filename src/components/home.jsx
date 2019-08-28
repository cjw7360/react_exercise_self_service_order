import React from 'react';
import cssobj from '@/css/home.module.scss'
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
                                    }).catch(function(err) {console.log(err)});
    }

    componentDidMount() {
        this.requestData();
    }

    render() {
        return (
            <div className="item">
                <h3 className={cssobj.itemClassName}>className</h3>
                <ul>
                    <li>1</li>
                </ul>
            </div>
        );
    }
}

export default Home;