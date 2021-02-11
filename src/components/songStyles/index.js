import React from 'react';
import {
    Container,Style, StylesContainer
}

from './styles/songStyles';

export default function SongStyles({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

SongStyles.StylesContainer = function SongStylesStylesContainer({children, ...restProps}) {
    return <StylesContainer {...restProps}>{children}</StylesContainer>
}

SongStyles.Style = function SongStylesStyle({children, ...restProps}) {
    return <Style {...restProps}>{children}</Style>
}