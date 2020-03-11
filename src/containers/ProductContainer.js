import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            products
        );
    }
    
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null)(ProductsContainer);
