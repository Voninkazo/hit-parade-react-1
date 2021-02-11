import styled from 'styled-components';

export const Container = styled.div``;

export const SongsContainer = styled.ul`
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        // align-items: center;
        gap:56px;
        margin:0;
        background: #272343;
        margin-top: 42px;
        padding-top: 56px;
        padding-bottom: 30px;
        padding-left: 65px;
        padding-right: 82px;
        align-items: baseline;
        border-radius: 5px;
`;

export const Item = styled.li`

`;

export const Title = styled.p`
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFE;
    margin:0;
    white-space: nowrap;
`;

export const Artist = styled.p`
font-size: 18px;
line-height: 22px;
color: #FFFFFE;
`;

export const Cart = styled.li`

`;

export const DetailLink = styled.li`

`;

export const ImgDislike = styled.li`
    display: flex;
    flex-direction: row;
 `;

 export const ImgFavorite = styled.li`
 `;

 export const ImgLike = styled.li`
    display: flex;
    flex-direction: row;
 `;

 export const SongId = styled.li`
    display: flex;
    flex-direction: column;
 `;

 export const TextSmall = styled.span`
 font-size: 24px;
 line-height: 29px;
 color: #BAE8E8;
 `;


 export const IconLink = styled.img`

 `;

 export const IconDislike = styled.img`
 margin-left: 5px;
 `;
 
 export const IconFavorite = styled.img`
 
 `;
 
 export const IconLike = styled.img`
 margin-left: 5px;
 `;
