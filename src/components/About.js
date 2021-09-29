import React from "react";

function About(props) {
  return (
    <div id="about" className={props.aboutClass}>
      <div className="about-text">
        <h3>React App Assignment</h3>
        <p>
          This is an assignment of React Single Page Application (SPA) in which
          I am going to make a list of favorite songs, with respect to their
          title, artist, genre and rating. It exhibits that one can add or
          remove rquired playlist by using diffrent type of filters. The main
          purpose of using reactjs is, user can easily access to all the
          components of webpage with least codes.
          <br></br>For this I searched out different React Tutorials on Google
          and YouTube. But most of the stuff that helps me to produce this React
          Assignment was utilised through the excercises and literature provided
          by Winc modules.
        </p>
        <ul>Requirements</ul>
        <li>
          Als gebruiker wil ik de volgende gegevens over mijn nummer willen
          invullen: titel, artiest, genre, rating (dropdown menu is geen
          vereiste).
        </li>
        <li>
          Als gebruiker wil ik op één button kunnen klikken waardoor mijn
          ingevulde nummer toegevoegd wordt aan mijn playlist.
        </li>
        <li>
          Als gebruiker wil ik mijn nummers kunnen zien in een overzicht (mijn
          playlist), waar alle ingevulde gegevens in zichtbaar zijn.
        </li>
        <p>
          In this react app default playlist consist of ten numbers (according
          to title, artist, genre and rating). But you can include, search and
          scroll the desired playlist by entering your own title song, artist,
          genre and rating in the stipulated fields. Ultimately, you can make a
          favorite playlist.
        </p>
      </div>
    </div>
  );
}

export default About;
