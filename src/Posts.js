import React from "react";

function Post(props) {

    const [save, setSave] = React.useState('');
    const [noSave, setNoSave] = React.useState('hide');

    function salvar() {
        save ? setSave('') : setSave('hide');
        noSave ? setNoSave('') : setNoSave('hide');

    }

    const [like, setLike] = React.useState('');
    const [unlike, setUnlike] = React.useState('hide')
    function curtido() {
        like ? setLike('') : setLike('hide');
        unlike ? setUnlike('') : setUnlike('hide');
    }


    let cont = props.likes;

    if (like === "hide") {
        cont = cont + 1;
    } else if (unlike === "")
        cont = cont - 1;



    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imageProfile} />
                    meowed
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={curtido} src={props.imagePost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon class={unlike || "red"} onClick={curtido} name="heart"></ion-icon>
                        <ion-icon class={like} onClick={curtido} name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>

                    <div >
                        <ion-icon class={noSave} onClick={salvar} name="bookmark"></ion-icon>
                        <ion-icon class={save} onClick={salvar} name="bookmark-outline"></ion-icon>
                    </div>

                </div>
                <div class="curtidas">
                    <img src={props.imageLike} />
                    <div class="texto">
                        Curtido por <strong>{props.likeProfile}</strong> e <strong>outras {cont} pessoas</strong>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default function Posts() {

    const profile = [

        { imageProfile: "assets/img/meowed.svg", imagePost: "assets/img/gato-telefone.svg", imageLike: "assets/img/respondeai.svg", likeProfile: "respondeai", likes: 101523 },
        { imageProfile: "assets/img/barked.svg", imagePost: "assets/img/dog.svg", imageLike: "assets/img/adorable_animals.svg", likeProfile: "adorable_animals", likes: 200541 }
    ];

    return (
        <div class="posts">

            {profile.map((c) => <Post imageProfile={c.imageProfile} imagePost={c.imagePost} imageLike={c.imageLike} likeProfile={c.likeProfile} likes={c.likes} />)}

        </div>
    )
}