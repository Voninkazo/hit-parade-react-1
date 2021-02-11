import React from 'react';

import {
    Container, SubContainer, TextInfo, Group, NumbOfSongs, TotalPrice, Button,
} from './styles/cart';

function Cart({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Cart.SubContainer = function CartSubContainer({children, ...restProps}) {
    return <SubContainer {...restProps}>{children}</SubContainer>
}

Cart.TextInfo = function CartTextInfo({children, ...restProps}) {
    return <TextInfo {...restProps}>{children}</TextInfo>
}

Cart.Group = function CartGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Cart.NumbOfSongs = function CartNumbOfSongs({children, ...restProps}) {
    return <NumbOfSongs {...restProps}>{children}</NumbOfSongs>
}

Cart.TotalPrice = function CartTotalPrice({children, ...restProps}) {
    return <TotalPrice {...restProps}>{children}</TotalPrice>
}

Cart.Button = function CartButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

export default Cart
