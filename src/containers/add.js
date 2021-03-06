import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Add from '../components/add';
import {addSongs} from '../redux/actions/allSongsActions';

function AddContainer() {
    const dispatch = useDispatch();
    const styles = useSelector(state => state.styles);

    function submitForm(e) {
        e.preventDefault();
        const {title,artist,price,style,lyrics} = e.target;
         const newSong ={
            title : title.value,
            artist : artist.value,
            likes : 0,
            dislikes : 0,
            id : Date.now(),
            style : style.value,
            isFavorite : false,
            price : price.value,
            lyrics : lyrics.value,
            isAdded : false
        }
        e.target.reset();
        dispatch(addSongs(newSong))
    }


    return (
        <Add>
            <Add.Header>🌚 Add a new song</Add.Header>
            <Add.Form onSubmit={submitForm}>
                <Add.InpuContainer>
                    <Add.List>
                        <Add.InputText 
                            type="text" 
                            name="title"
                            placeholder="Title"  
                            required
                        />
                    </Add.List>
                    <Add.List>
                        <Add.InputText 
                            type="text" 
                            name="artist" 
                            placeholder="Artist" 
                            required
                        />
                    </Add.List>
                    <Add.List>
                        <Add.InputText 
                            type="number" 
                            name="price" 
                            placeholder="Price" 
                            required
                        />
                    </Add.List>
                    <Add.List>
                        <Add.InputSelect 
                            name="style"
                            required 
                        >
                            {styles.map(style => (
                            <Add.Style key={style} value={style}>
                                {style}
                            </Add.Style>
                            ))}
                        </Add.InputSelect>
                    </Add.List>
                    <Add.List>
                        <Add.InputTextArea 
                            name="lyrics" 
                            placeholder="Lyrics" 
                            required
                        >
                        </Add.InputTextArea>
                    </Add.List>
                </Add.InpuContainer>
                <Add.SubmitButton type="submit">Add</Add.SubmitButton>
            </Add.Form>
        </Add>
    )
}

export default AddContainer
