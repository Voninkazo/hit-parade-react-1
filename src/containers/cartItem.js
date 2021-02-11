import React, { useContext } from 'react';
import deleteIcon from '../icons/delete.svg'

import CartItem from '../components/cartItem';
import { Context } from '../Context';

function CartItemContainer({song}) {
    const {removeSongs} = useContext(Context);

    return (
       <CartItem>
           <CartItem.Wrapper>
               <CartItem.IconDelete 
               onClick={() => removeSongs(song.id)} 
               src={deleteIcon} 
               alt="Delete"
               />
               <CartItem.Group>
                   <CartItem.Title>{song.title}</CartItem.Title>
                   <CartItem.Artist>{song.artist}</CartItem.Artist>
               </CartItem.Group>
               <CartItem.Price>{song.price}Ar</CartItem.Price>
           </CartItem.Wrapper>
       </CartItem>
    )
}

export default CartItemContainer
