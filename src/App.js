import { Fragment } from "react";
import { Helmet } from "react-helmet"
import { Routes, Route } from 'react-router-dom'
import './index.css';
import {MainPage} from "./components/main-page/main-page.component"
import {Login} from "./components/login/login.component"
function App() {
  return (
    <Fragment>
    <Helmet>
    <title>4ALL</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="index.css"/>
    <link rel="icon" type="image/png" href="assets/todo/iconotitle.png"/>
    <link rel="stylesheet" href="assets/css/fontawesome.min.css"/>
    </Helmet>
    <div className="App">
    <audio id="fondo" loop >
    <source src="assets/audio/fondo.mp3"/>
    </audio>
      <Routes>
        <Route path="/">
          <Route index element={<Login/>} />
          <Route exact path="/home" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
    </Fragment>
  );
}

export default App;
