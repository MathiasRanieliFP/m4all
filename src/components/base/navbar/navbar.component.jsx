import React from "react";
import {Link} from "react-router-dom";


export const Navbar = () =>{

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("open").className="w3-button2"
    document.getElementById("close").className="w3-button"
    document.getElementById("main").className="w3-main2"
  
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("open").className="w3-button"
    document.getElementById("close").className="w3-button2"
    document.getElementById("main").className="w3-main"
  
  }

var cancion = document.getElementById("fondo");
var unmute = false
function change(){
  let sound = document.getElementById("sound")
  console.log(sound.className);
  if(unmute == false){
    sound.className ="fal fa-volume volumen"
    unmute = true;
    cancion.play()
    cancion.volume = 0.05;
  }
  else{
    sound.className ="fal fa-volume-mute volumen"
    cancion.pause()
    unmute = false
  }
  
}

    return(
        <div class="w3-teal">
    <div class="header__logo">
        <a href="4all pruebas.html">
        <img src="../../../assets/todo/iconoheader.png" alt=""/>
        </a>
    </div>

    <nav class="header__nav">    
      <form action="#" class="header__search">
        <input type="text" placeholder="Search here..."/>
        <button type="button"><i class="fas fa-search"></i></button>
        <button type="button" class="close"><i class="fal fa-times "></i></button>
    </form>
      <ul class="part1">
          <li class="up3"><a  href="about.html">About</a></li>
          <li class="up3"><a  href="contact.html">Contact</a></li>
          <li class="header__nav-drop up3">
              <a  href="#">Pages</a>
              <ul class="header__drop">
                <li style="border-radius: 10px 10px 0 0;"><a href="artists.html" > <i  class="fas fa-music"></i> Artistas</a></li>
                  <li><Link to={"/news"}><a href="news.html"> <i class="fas fa-music"></i> Noticias</a></Link></li>
                  <li><Link to={"/privacy"}><a href="privacy.html" > <i class="fas fa-music"></i> Privacy policy</a></Link></li>
              </ul>
          </li>
      </ul>
      
      <ul class="part2">
        <li class="btncargar">
          <a  href="upload-music.html" class="btn-upload"> <i class="fas fa-cloud-upload"></i> Upload Music</a>
        </li>
      </ul>
      <ul class="part3">
        <li class="header__nav-drop uno">
          <i class="fas fa-bell"></i>
          <ul class="header__drop" style="text-align: center;">
            <li><a style="color:#01f2fe" href="#"><i class="fas fa-envelope"></i>Bienvenido a 4 4ALL </a></li>
              <li><a href="#" style="text-align: left;" class="header__all">View all <i class="fal fa-long-arrow-alt-right ml-2"></i> </a></li>
          </ul>
        </li>
          <li class="header__nav-drop dos">
                <img class="perfil" src="../../../assets/img/avatar.png" alt=""/>
            <ul class="header__drop">
                <li><a style="color:#01f2fe" href="#">Welcome !</a></li>
                <li><a href="profile.html"><i class="fas fa-user"></i> My Profile</a></li>
                <li><a href="profile-setting.html"><i class="fal fa-cog"></i>Settings</a></li>
                <li><a href="#"><i class="fas fa-lock"></i> Logout</a></li>
            </ul>
            </li>
          <li class="volumen">
            <i id="sound" onClick={()=>change()} class="fal fa-volume-mute volumen"></i>
          </li>
      </ul>
  </nav>
  <button id="open" class="w3-button" onClick={()=>w3_open()} onclick="">&#9776;</button>
  <button id="close" class="w3-button2" onClick={()=>w3_close()}>&#10005;</button>
</div>
    )
}