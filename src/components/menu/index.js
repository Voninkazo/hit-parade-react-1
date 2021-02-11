import React from 'react';

import {Container, PageContainer, Page} from './styles/menu';

export default function Menu({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Menu.PageContainer = function MenuPageContainer({children, ...restProps}) {
    return <PageContainer {...restProps}>{children}</PageContainer>
}

Menu.Page = function MenuPage({children, ...restProps}) {
    return <Page {...restProps}>{children}</Page>
}