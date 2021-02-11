import styled from 'styled-components';

export const Container = styled.div`

`;

export const PageContainer = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
list-style: none;
padding: 0;
`;

export const Page = styled.li`
    a {
        font-size: 36px;
        line-height: 44px;
        color: #272343;
        white-space: nowrap;
    }
    a:focus {
        font-weight: bold;
    }
`;