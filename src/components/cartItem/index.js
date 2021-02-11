import React from 'react';

import {
    Container, Wrapper, IconDelete, Group, Title, Artist, Price,
} from './styles/cartItem';

function CartItem({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

CartItem.Wrapper = function CartItemWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

CartItem.IconDelete = function CartItemIconDelete({children, ...restProps}) {
    return <IconDelete {...restProps}>{children}</IconDelete>
}

CartItem.Group = function CartItemGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

CartItem.Title = function CartItemTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

CartItem.Artist = function CartItemArtist({children, ...restProps}) {
    return <Artist {...restProps}>{children}</Artist>
}

CartItem.Price = function CartItemPrice({children, ...restProps}) {
    return <Price {...restProps}>{children}</Price>
}

export default CartItem
