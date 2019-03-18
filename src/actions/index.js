//Action creator
export const selectSong = (song = null) =>{
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
};

