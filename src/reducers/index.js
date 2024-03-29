import {combineReducers} from 'redux';

const songsReducers = ()=> {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration:'2:30'},
        {title:'Jai Ho', duration: '6:30'},
        {title:'kal ho na ho', duration: '5:30'}
    ];
};

const selectedSongReducers = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducers
});

