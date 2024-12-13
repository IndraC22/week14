import React, { useState } from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

interface Song {
  title: string;
  artist: string;
}
//This component does not take any props, hence the empty <>
const Playlist: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  //Declares a state variable songs initialized with an empty array, which will hold the list of songs.

  //A function to add a new song to the songs 
  const addSong = (song: Song) => {
    setSongs([...songs, song]);
  }; //Uses setSongs to update the songs state by appending the new song to the existing list.

  //remove a song from the songs state based on its index.
  const removeSong = (index: number) => {
    //creates a new array excluding the song at the specified index
    const newSongs = songs.filter((_, i) => i !== index);
    setSongs(newSongs); //Updates the songs state with the new array.
  };

  const updateSong = (index: number, updatedSong: Song) => {
    //Uses map to create a new array, replacing the song at the specified index with the updatedSong.
    const newSongs = songs.map((song, i) => (i === index ? updatedSong : song));
    setSongs(newSongs); //Updates the songs state with the new array.
  };

  return (
    <div>
      <SongForm addSong={addSong} />
      <SongList songs={songs} removeSong={removeSong} updateSong={updateSong} />
    </div>
  );
};

export default Playlist;
