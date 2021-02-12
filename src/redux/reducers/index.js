import {combineReducers} from 'redux';
import cartSongs from './cartItemsReducers';
import allSongs from './allSongsReducers';
import styles from './stylesReducers';


export default combineReducers({
    cartSongs,
    allSongs,
    styles,
});