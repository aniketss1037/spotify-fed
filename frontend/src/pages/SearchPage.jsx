import { useEffect, useState } from "react"
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { getSongs } from "../services/api-client"
import { Player } from "../components/Player"


export const SearchPage = () =>{
   const [allSongs,setSongs]=useState([]);
   const [flag,setFlag]= useState(false);
   const [song,setPlayerSong]=useState(null);


   const loadSongs = async ()=>{
      setSongs( await getSongs('Latest Songs'));
   }
  
   useEffect(() =>{
      loadSongs();
      
   },[])//component mount/update/unmount phase

   const togglePlayer = (flag,songarg)=>{
      setPlayerSong(songarg);
      setFlag(flag);
   }
   const getArtistName = async (artistName)=>{
      console.log('Rec Artist name',artistName)
     setSongs( await getSongs(artistName));
   }

   const jsx = <><Search fn={getArtistName}/>
   <Songs fn={togglePlayer} allsongs ={allSongs} /></>;
   return(
      <div className='container'>
         <h1 className="alert alert-danger text-center">Spotify</h1>
     
       {flag?<Player fn={togglePlayer} song={song}/>:jsx}
       </div>
);
}