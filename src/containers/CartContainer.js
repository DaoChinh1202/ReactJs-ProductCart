import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../contants/Message';
import CartItem from './../components/Cartitem';
import CartResul from './../components/CartResult';
import { actRemoveProductCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showToTal(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var {onDeleteProductInCart,onchangeMessage,onUpdateProductInCart} = this.props;
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} index={index}  onDeleteProductInCart={onDeleteProductInCart } onchangeMessage = {onchangeMessage} onUpdateProductInCart = {onUpdateProductInCart}/>
                )
            });
        }
        return result;
    }
    showToTal = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResul cart = {cart} />
        } 
        return result;
    }
}


CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actRemoveProductCart(product));
        },
        onChangeMessage: (message) =>{
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
