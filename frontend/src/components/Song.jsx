import { useState } from "react";

export const Song = ({fn,song}) => {
    console.log(song);
    const [playerFlag, setPlayerFlag]=useState(false);
    const showPlayer = ()=>{
       fn(true,song); 
    }
  return (
    <div className="row">
        <div className="col-4">
            <img src = {song.artworkUrl100} alt='fgh'/>
        </div>
        <div className="col-4">
        {song.artistName}{song.trackName}
       </div>
       <div className="col-4">
        <button onClick={showPlayer} className="alert alert-info">Play Song</button>
       </div>
    </div>
  );
}

