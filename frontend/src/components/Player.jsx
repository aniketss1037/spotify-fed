export const Player = ({fn,song})=>{
    return(
        <div >
            <button onClick={()=>{
                fn(false,null);
            }} 
            

            className="btn btn-success">Back to All Songs</button>
            <p>
                <br />
            <img src = {song.artworkUrl100} alt='fgh'/>
            <br />
            {song?.artistName}
            <br />
            {song?.trackName}

            </p>
           
            <br />
          
       
        <br />
        <audio controls >
       
            <source src={song?.previewUrl} type="audio/mp4"/>
            Audio Elements
        </audio>
        </div>
    )
}

