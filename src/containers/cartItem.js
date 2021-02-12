import React from 'react';
import deleteIcon from '../icons/delete.svg'

import CartItem from '../components/cartItem';
import { useDispatch } from 'react-redux';
import {removeSongs} from '../redux/actions/cartsongsActions';

function CartItemContainer({song}) {
    const dispatch = useDispatch();
    return (
       <CartItem>
           <CartItem.Wrapper>
               <CartItem.IconDelete 
               onClick={() => dispatch(removeSongs(song.id))} 
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
