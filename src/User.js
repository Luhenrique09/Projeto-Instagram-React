import React from "react";

function Usuario(props) {
    const [nome, setNome] = React.useState(props.name);
    const [photo, setPhoto] = React.useState(props.image)
    function insertName() {
        setNome(prompt("Digite seu nome:"));

    }

    function insertPhoto(){
        setPhoto(prompt("Digite a url da imagem:"))
    }

    return (
        <div class="usuario">
            <img onClick={insertPhoto} src={photo} />
            <div class="texto">
                <strong>{nome}driven</strong>
                <span>
                    {nome}
                    <ion-icon onClick={insertName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
    
}

export default function User() {
    
    return (
        <Usuario name="Catana" image="assets/img/catanacomics.svg"/>
    )
}