import React, { useState } from 'react';

interface SongFormProps {
  addSong: (song: { title: string; artist: string }) => void;
}

const SongForm: React.FC<SongFormProps> = ({ addSong }) => {
  //Declares a state variable title initialized with an empty string
  //Declares a state variable artist initialized with an empty string.
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  //1.Calls e.preventDefault() to prevent the default form submission behavior
  //2. Calls addSong with the title and artist values.
  //3. Resets the title and artist state variables to empty strings.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSong({ title, artist });
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default SongForm;
