import React from "react";
class CartItem extends React.Component {
    // testing () {
    //   const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve('done');
    //     }, 5000);
    //   })
  
    //   promise.then(() => {
    //     // setState acts like a synchronus call
    //     this.setState({ qty: this.state.qty + 10 });
  
    //     this.setState({ qty: this.state.qty + 10 });
  
    //     this.setState({ qty: this.state.qty + 10 });
  
    //     console.log('state', this.state);
    //   });
    // }
    // increaseQuantity = () => {
    //   // this.state.qty += 1;
    //   // console.log('this', this.state);
    //   // setState form 1
    //   // this.setState({
    //   //   qty: this.state.qty + 1
    //   // }, () => {});
  
    //   // setState form 2 - if prevState required use this
    //   this.setState((prevState) => {
    //     return {
    //       qty: prevState.qty + 1
    //     }
    //   });
    // }
  
    // decreaseQuantity = () => {
    //   const { qty } = this.state;
  
    //   if (qty === 0) {
    //     return;
    //   }
    //   // setState form 2 - if prevState required use this
    //   this.setState((prevState) => {
    //     return {
    //       qty: prevState.qty - 1
    //     }
    //   });
    // }
    render () {
      console.log('this.props', this.props);
      const { price, title, qty } = this.props.product;
      const {product,  onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct}=this.props;
      return (
        <div className="cart-item">
          {this.props.jsx}
          <div className="left-block">
            <img style={styles.image} />
          </div>
          <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>Rs {price} </div>
            <div style={ { color: '#777' } }>Qty: {qty} </div>
            <div className="cart-item-actions">
              {/* Buttons */}
              <img
                alt="increase"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                onClick={()=>onIncreaseQuantity(product)}
              />
              <img
                alt="decrease"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/4436/4436695.png"
                onClick={()=>onDecreaseQuantity(product)}
              />
              <img
                alt="delete"
                className="action-icons"
                src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png"
                onClick={()=>onDeleteProduct(product.id)}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
  const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }
  
  export default CartItem;