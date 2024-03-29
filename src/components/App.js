import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetails'

const App = ()=>{
    return (
        <div className="ui continer grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;