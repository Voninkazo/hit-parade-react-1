import React from 'react';

import {
    Container, Item, SongsContainer, IconDislike, IconFavorite, IconLike,Title, Artist,Cart,DetailLink,
    ImgDislike, ImgFavorite, ImgLike,SongId,
} from './styles/popularSongs';

export default function PopularSongs({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

PopularSongs.SongsContainer = function PopularSongsSongsContainer({children, ...restProps}) {
    return <SongsContainer {...restProps}>{children}</SongsContainer>
}
PopularSongs.Item = function PopularSongsItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}

PopularSongs.SongId = function PopularSongsSongId({children, ...restProps}) {
    return <SongId {...restProps}>{children}</SongId>
}

PopularSongs.Title = function PopularSongsTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

PopularSongs.Artist = function PopularSongsArtist({children, ...restProps}) {
    return <Artist {...restProps}>{children}</Artist>
}

PopularSongs.Cart = function PopularSongsCart({children, ...restProps}) {
    return <Cart {...restProps}>{children}</Cart>
}

PopularSongs.DetailLink = function PopularSongsDetailLink({children, ...restProps}) {
    return <DetailLink {...restProps}>{children}</DetailLink>
}

PopularSongs.ImgFavorite = function PopularSongsImgFavorite({children, ...restProps}) {
    return <ImgFavorite {...restProps}>{children}</ImgFavorite>
}

PopularSongs.ImgLike = function PopularSongsImgLike({children, ...restProps}) {
    return <ImgLike {...restProps}>{children}</ImgLike>
}

PopularSongs.ImgDislike = function PopularSongsImgDislike({children, ...restProps}) {
    return <ImgDislike {...restProps}>{children}</ImgDislike>
}

PopularSongs.IconFavorite = function PopularSongsIconFavorite({ ...restProps}) {
    return <IconFavorite {...restProps} />
}

PopularSongs.IconLike = function PopularSongsIconLike({ ...restProps}) {
    return <IconLike {...restProps} />
}

PopularSongs.IconDislike = function PopularSongsIconDislike({ ...restProps}) {
    return <IconDislike {...restProps} />
}



