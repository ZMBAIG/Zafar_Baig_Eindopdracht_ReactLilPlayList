import React from "react";
import List from "./List";

function SongList(props) {
  return (
    <div className="song-list">
      <div>
        Display:
        <select
          value={props.filterGenre}
          onChange={props.handleSelectDisplayGenre}
          name="filterGenre"
          id="display-genre-select"
        >
          <option value="">All Genres</option>
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
      </div>
      <List
        songItems={props.songItems}
        filteredSongItems={props.filteredSongItems}
        handleDelete={props.handleDelete}
        sortSongList={props.sortSongList}
      />
    </div>
  );
}

export default SongList;
