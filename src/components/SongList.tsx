import React from 'react';
import Song from './Song';

//this is the props
interface SongListProps {
  songs: { title: string; artist: string }[];
  //takes an index as an argument & returns void
  removeSong: (index: number) => void;
  updateSong: (index: number, song: { title: string; artist: string }) => void;
}

//functional component thats accepting props thats defines in SongList
const SongList: React.FC<SongListProps> = ({ songs, removeSong, updateSong }) => {
  return (
    //returns unordered list. It maps over the songs array and renders a Song component for each song in the array.
    <ul>
      {songs.map((song, index) => (
        <Song
        //The unique key for each element in the list, which is the index of the song in the array
          key={index}
          song={song}
          index={index}
          removeSong={removeSong}
          updateSong={updateSong}
        />
      ))}
    </ul>
  );
};

export default SongList;
