import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SongStyles from '../components/songStyles';


export default function SongStylesContainer() {
    const styles =useSelector(state => state.styles);

    console.log(styles);

    return (
       <SongStyles>
            <SongStyles.StylesContainer>
           {
               styles.map(style => {
                   return (
                   
                        <Link  to={`/styles/${style}`} key={style}>
                            <SongStyles.Style>🎧 {style}</SongStyles.Style>
                        </Link>
                   )
               })
           }
           </SongStyles.StylesContainer>
       </SongStyles>
    )
}