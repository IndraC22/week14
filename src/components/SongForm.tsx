import React, { useState } from 'react';

interface SongFormProps {
  addSong: (song: { title: string; artist: string; image: string }) => void;
}

const SongForm: React.FC<SongFormProps> = ({ addSong }) => {
  //Declares a state variable title initialized with an empty string
  //Declares a state variable artist initialized with an empty string.
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');

  //1.Calls e.preventDefault() to prevent the default form submission behavior
  //2. Calls addSong with the title and artist values.
  //3. Resets the title and artist state variables to empty strings.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultImage = "https://static.vecteezy.com/system/resources/thumbnails/018/968/318/small_2x/music-player-vecor-icon-audio-control-buttons-illustration-sign-ur-symbol-vector.jpg";
    addSong({ title, artist, image: image || defaultImage});
    setTitle('');
    setArtist('');
    setImage('');
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
      {/* <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      /> */}
      <button type="submit">Add Song</button>
    </form>
  );
};


export default SongForm;
