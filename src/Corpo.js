import React from "react";
import Storys from './Storys';
import Posts from './Posts';
import Sugestoes from "./Sugestoes";
import SideBar from './SideBar';

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">

                <Storys />
                <Posts />
            </div>

            <SideBar />

        </div>
    )
}