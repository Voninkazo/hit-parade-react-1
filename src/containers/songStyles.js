import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {Context} from '../Context';
import SongStyles from '../components/songStyles';


export default function SongStylesContainer() {
    const {styles} = useContext(Context);
    console.log(styles);

    return (
       <SongStyles>
           {
               styles.map(style => {
                   return (
                    <SongStyles.StylesContainer key={style}>
                        <Link  to={`/styles/${style}`} >
                            <SongStyles.Style>{style}</SongStyles.Style>
                        </Link>
                    </SongStyles.StylesContainer>
                   )
               })
           }
       </SongStyles>
    )
}