import React from "react";
import { Navbar } from "../base/navbar/navbar.component";
import { Sidebar } from "../base/sidebar/sidebar.component";
import { Artistas } from "./container/artistas/artistas.component";
import { Banner } from "./container/banner/banner.component";
import { LastyPop } from "./container/last&pop/last&pop.component";




export const MainPage = () => {



    return(
        <div id="main" class="w3-main" style="margin-left:200px">
            <Sidebar/>
            <Navbar/>
            <Banner/>
            <LastyPop/>
            <Artistas/>
            

        </div>
    )
}