import React from "react";

function Suggestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">{props.follow}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const profile = [
        { image: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", follow: "Segue você" },
        { image: "assets/img/chibirdart.svg", user: "chibirdart", follow: "Segue você" },
        { image: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", follow: "Novo no Instagram" },
        { image: "assets/img/adorable_animals.svg", user: "adorable_animals", follow: "Segue você" },
        { image: "assets/img/smallcutecats.svg", user: "smallcutecats", follow: "Segue você" }
    ]

    return (

        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {profile.map((c) => <Suggestion image={c.image} user={c.user} follow={c.follow} />)}
        </div>

    )
}