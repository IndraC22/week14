import React, { useState } from 'react';
import ArtistCard from './ArtistCard';

interface SongProps {
  song: { title: string; artist: string; image:string };
  // A number representing the song's index in a list.
  index: number;
  removeSong: (index: number) => void;
  updateSong: (index: number, song: { title: string; artist: string }) => void;
}

const Song: React.FC<SongProps> = ({ song, index, removeSong, updateSong }) => {
  //Declares a state variable isEditing to track if the song is being edited, initially set to false
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);

  // const handleUpdate = () => {
  //   updateSong(index, { title, artist });
  //   setIsEditing(false);
  // };

  const handleUpdate = () => {
    updateSong(index, { ...song, title, artist }); // Include the original id and image
    setIsEditing(false);
  };
 //it shows two input fields for title and artist and a "Save" button that calls handleUpdate.
 //it shows the song's title and artist with an "Edit" button that sets isEditing to true.
  return (
    <li> 
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <ArtistCard title = {song.title} artist ={song.artist} image={song.image} delete={() => removeSong(index)} index={index} onEdit={() => setIsEditing(true)} />
        </>
      )}
    </li>
  );
};

export default Song;
