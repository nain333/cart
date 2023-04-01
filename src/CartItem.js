import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            tittle:'Phone',
            qty:1,
            img:''
        }
    }
    render(){
        const{price,tittle,qty}=this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                <div style={{fontSize:25}}>{tittle}</div>
                <div style={{color:'#777'}}>Rs: {price}</div>
                <div style={{color:'#777'}}>Qty:{qty}</div>
                <div className='cart-item-actions'>
                    {/* buttons */}
                    <img alt='increase_the_quantity' src='https://cdn-icons-png.flaticon.com/512/1237/1237946.png' className='action-icons'/>
                    <img alt='decrease_the_quantity' src='https://cdn-icons-png.flaticon.com/512/56/56889.png' className='action-icons'/>
                    <img alt='delete_the_item' src='https://cdn-icons-png.flaticon.com/512/542/542724.png' className='action-icons'/>
                </div>
                </div>
            </div>
        );

    }

}
const styles={
    image:{
    height:110,
    width:110,
    borderRadius:4,
    background:'#ccc'

    }
}
export default CartItem;