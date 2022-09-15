import React from "react";
import Sugestoes from "./Sugestoes";
import User from "./User";

function Complemento() {
    return (
        <div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>

        </div>
    )
}
export default function SideBar() {

    return (
        <div class="sidebar">
            <User />

            <Sugestoes />

            <Complemento />
        </div>
    )
}