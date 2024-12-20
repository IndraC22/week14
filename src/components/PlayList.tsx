import React, { useState } from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

interface Song {
  id:number;
  title: string;
  artist: string;
  image: string;
}

// interface SongListProps {
//   songs: Song[],
//   addSong: (song: Song) => void;
//   removeSong: (index : number) => void;
//   updateSong: (index:number, updatedSong: Song) => void;
// }
const Playlist: React.FC = () => {
  const artistImageMap: { [key: string]: string } = {
    "Taylor Swift": "https://imageio.forbes.com/specials-images/imageserve/646e6affb9a2a85595a62c39/0x0.jpg?format=jpg&crop=1573,1574,x239,y256,safe&height=416&width=416&fit=bounds",
    "Justin Bieber": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTLAL4gQX-rAc535KByr82Ig3MuGtr2BpeVHN9v3YE0yb2gliyadazIj1XS1UantBNCLIwEP8Sv1pycMrU",
    "Zach Bryan": "https://substreammagazine.com/wp-content/uploads/2023/08/646b54d31434a.webp",
    "Carrie Underwood": "https://www.rollingstone.com/wp-content/uploads/2024/08/carrie-underwood-judge.jpg?w=1581&h=1054&crop=1"
  };

  const defaultImage = "https://static.vecteezy.com/system/resources/thumbnails/018/968/318/small_2x/music-player-vecor-icon-audio-control-buttons-illustration-sign-ur-symbol-vector.jpg";

//This component does not take any props, hence the empty <>
// const Playlist: React.FC = () => {
//   let artist_list:Song[] = [
//     {
//       "id": 1,
//       "artist": "Taylor Swift",
//       "title": "Enchanted",
//       "image": "https://imageio.forbes.com/specials-images/imageserve/646e6affb9a2a85595a62c39/0x0.jpg?format=jpg&crop=1573,1574,x239,y256,safe&height=416&width=416&fit=bounds"
//     },
//     {
//       "id": 2,
//       "artist": "Justin Bieber",
//       "title": "Lonely",
//       "image": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTLAL4gQX-rAc535KByr82Ig3MuGtr2BpeVHN9v3YE0yb2gliyadazIj1XS1UantBNCLIwEP8Sv1pycMrU"
//     },
//     {
//       "id": 3,
//       "artist": "Zach Bryan",
//       "title": "Pink Skies",
//       "image": "https://substreammagazine.com/wp-content/uploads/2023/08/646b54d31434a.webp"
//     },
//     {
//       "id": 4,
//       "artist": "Carrie Underwood",
//       "title": "Two Black Cadillacs",
//       "image": "https://www.rollingstone.com/wp-content/uploads/2024/08/carrie-underwood-judge.jpg?w=1581&h=1054&crop=1"
//     }
//   ]


const [songs, setSongs] = useState<Song[]>([
  {
    id: 1,
    artist: "Taylor Swift",
    title: "Enchanted",
    image: artistImageMap["Taylor Swift"]
  },
  {
    id: 2,
    artist: "Justin Bieber",
    title: "Lonely",
    image: artistImageMap["Justin Bieber"]
  },
  {
    id: 3,
    artist: "Zach Bryan",
    title: "Pink Skies",
    image: artistImageMap["Zach Bryan"]
  },
  {
    id: 4,
    artist: "Carrie Underwood",
    title: "Two Black Cadillacs",
    image: artistImageMap["Carrie Underwood"]
  }
]);

const addSong = (song: { title: string; artist: string }) => {
  const newSong: Song = {
    id: songs.length + 1,
    title: song.title,
    artist: song.artist,
    image: artistImageMap[song.artist] || defaultImage
  };
  setSongs([...songs, newSong]);
};

const removeSong = (index: number) => {
  const newSongs = songs.filter((_, i) => i !== index);
  setSongs(newSongs);
};

const updateSong = (index: number, updatedSong: Song) => {
  const newSongs = songs.map((song, i) => (i === index ? updatedSong : song));
  setSongs(newSongs);
};

return (
  <div>
    <SongForm addSong={addSong} />
    <SongList songs={songs} removeSong={removeSong} updateSong={() =>updateSong} /> 
  </div>
);
};

export default Playlist;


//   const [songs, setSongs] = useState<Song[]>(artist_list);

//   const addSong = (song: Song) => {
//     setSongs([...songs, song]);
//   };

//   const removeSong = (index: number) => {
//     const newSongs = songs.filter((_, i) => i !== index);
//     setSongs(newSongs);
//   };

//   const updateSong = (index: number, updatedSong: Song) => {
//     const newSongs = songs.map((song, i) => (i === index ? updatedSong : song));
//     setSongs(newSongs);
//   };

//   return (
//     <div>
//       <SongForm addSong={addSong} />
//       <SongList songs={songs} removeSong={removeSong} updateSong={updateSong} />
//     </div>
//   );
// };
// export default Playlist;
