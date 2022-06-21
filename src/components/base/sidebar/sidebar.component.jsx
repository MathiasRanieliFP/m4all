import React from "react";


export const Sidebar = () =>{



    return (
    <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" id="mySidebar">
    <div class="sidebar__logo">
          <a href="4all pruebas.html"><img src="../../../assets/todo/iconooscuro.png" alt=""/></a>
      </div>
      <div class="sidebar__nav">
        <a href="#" class="w3-bar-item w3-button">Playlist 1</a>
        <a href="#" class="w3-bar-item w3-button">Playlist 2</a>
        <a href="#" class="w3-bar-item w3-button">Playlist 3</a>
        <div class="invisibles">
          <a class="w3-bar-item w3-button" href="about.html">About</a>
          <a class="w3-bar-item w3-button" href="contact.html">Contact</a>
          <a class="w3-bar-item w3-button" href="artists.html" > Artistas</a>
          <a class="w3-bar-item w3-button" href="release.html">  Release</a>
          <a class="w3-bar-item w3-button" href="news.html">  Noticias</a>
          <a class="w3-bar-item w3-button" href="privacy.html"> Privacy policy</a>
  
        </div>
      </div>
  </div>)
}