import React from 'react';
import cssobj from '@/css/itemContent.module.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
const axios = require('axios');

class ItemContent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list: [],
            domain: 'http://a.itying.com/',
            amount: 1,
        };
    }

    requestData = (id) => {
        axios.get(this.state.domain + "api/productcontent?id=" + id).then(
            (req) => {
                    this.setState({list: req.data.result[0]});
                    console.log(this.state.list);
            }
        ).catch(function(err) {console.log('Err: ', err)})
    }

    componentDidMount() {
        this.requestData(this.props.match.params.id);
    }

    decreaseAmount = () => {
        let val = this.state.amount;
        if (val > 1)
        {
            val -= 1;
            this.setState({amount:val});
        }
    }

    addAmount = () => {
        let val = this.state.amount;
        if (val < 99)
        {
            val += 1;
            this.setState({amount:val});
        }
    }

    genContent = () => {
        return (
                <div className={cssobj.content_container}>
                    <div className={cssobj.content_header}><Link to="/" className="link_back"><img src={require('../icons/back.png')} alt="back" className={cssobj.icon_back}></img></Link></div>
                    <div className={cssobj.content_body}>
                        <div className={cssobj.content_body_introduction}>
                            <img src={`${this.state.domain}${this.state.list.img_url}`} alt="pic" className={cssobj.content_img}/>
                            <h3 className={cssobj.content_body_title}>{this.state.list.title}</h3>
                            <p className={cssobj.content_body_price}>价格:{this.state.list.price}元</p>
                        </div>
                        <div className={cssobj.content_body_detail_container}>
                            <h3 className={cssobj.content_body_detail_title}>商品详情</h3>
                            <p className={cssobj.content_body_detail}>{this.state.list.description}</p>
                        </div>
                    </div>

                    <div className={cssobj.content_footer_container}>			
                        <strong className={cssobj.str_num}>数量:</strong>
                        <div className={cssobj.cart_num}>
                            <div className={cssobj.input_left} onClick={() => this.decreaseAmount()}>-</div>
                            <div className={cssobj.input_center}>
                                    <input type="text"  readOnly="readonly" value={this.state.amount} className={cssobj.input_center_input}/>
                            </div>
                            <div className={cssobj.input_right} onClick={() => this.addAmount()}>+</div>				      
                        </div>
                        <button className="addcart">加入购物车</button>									
                    </div>
                    	
                </div>
        )
    }


    render() {

        return (
            <div>
                {this.genContent()}
            </div>
        );
    }
}

export default ItemContent;