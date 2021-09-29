import React from "react";

function InputFields(props) {
  return (
    <div className="input-fields">
      <input
        placeholder="Enter Title's Song"
        value={props.newSongTitle}
        onChange={props.handleChange}
        name="newSongTitle"
        autoFocus
      />

      <input
        placeholder="Enter Artist's name"
        value={props.newSongArtist}
        onChange={props.handleChange}
        name="newSongArtist"
      />

      <select
        value={props.newSongGenre}
        onChange={props.handleChange}
        name="newSongGenre"
      >
        <option value="">Genre</option>
        <option value="Pop">Pop</option>
        <option value="Pop rock">Pop rock</option>
        <option value="Classic">Classic</option>
        <option value="Rock">Rock</option>
        <option value="Kids">Kids</option>
        <option value="Jazz">Jazz</option>
        <option value="Dance">Dance</option>
        <option value="Electronic">Electronic</option>
        <option value="Soul">Soul</option>
      </select>

      <select
        value={props.newSongRating}
        onChange={props.handleChange}
        name="newSongRating"
      >
        <option value="">Rating</option>
        <option value="⭐">⭐</option>
        <option value="⭐⭐">⭐⭐</option>
        <option value="⭐⭐⭐">⭐⭐⭐</option>
        <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
        <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
      </select>

      <button
        onClick={() => {
          props.addNewItem(props.newTitleInput);
        }}
        id="add-song-button"
      >
        Add song
      </button>
    </div>
  );
}

export default InputFields;
