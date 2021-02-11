import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';

import CartItemContainer from './cartItem';
import Cart from '../components/cart';
import { Group } from '../components/cartItem/styles/cartItem';

function CartContainer() {
    const {cartSongs,emptyCart} = useContext(Context);
    const [total,setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cartSongs.reduce((total, song) => {
            total += song.price;
            return total;
          }, 0);
          setTotal(newTotal);
    }, [cartSongs])

    const cartSongElements = cartSongs.map(song => (
        <CartItemContainer key={song.id} song={song} />
    ))

    function completeOrder() {
        // show the price somewhere (alert or console)
        alert(`THANK YOU FOR YOUR ORDER. PLEASE PAY : ${total} Ar`);
        // empty the cart
        emptyCart();
      }  

    return (
            <Cart>
                {cartSongElements}
                {cartSongs.length > 0 ? (
                <Cart.Group className="buying-container">  
                    <Cart.NumbOfSongs>You have chosen <b>{cartSongs.length}</b> songs</Cart.NumbOfSongs>
                    <Cart.TotalPrice className="amount">Total: <b>{total} Ar</b></Cart.TotalPrice>
                    <Cart.Button className="btn-to-buy" onClick={completeOrder}>Buy</Cart.Button>
                </Cart.Group>
     )
     :
     <Cart.SubContainer>
       <Cart.TextInfo>This page is empty👌</Cart.TextInfo>
     </Cart.SubContainer>
     }
    </Cart>
    )
}

export default CartContainer
