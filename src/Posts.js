import React from "react";

function Post (props){
    return (
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src= {props.imageProfile}/>
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imagePost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src={props.imageLike} />
                        <div class="texto">
                            Curtido por <strong>{props.likeProfile}</strong> e <strong>outras {props.likes} pessoas</strong>
                        </div>
                    </div>
                    
                </div>
            </div>
    )

}

export default function Posts() {

    const profile = [

        {imageProfile: "assets/img/meowed.svg", imagePost: "assets/img/gato-telefone.svg", imageLike: "assets/img/respondeai.svg", likeProfile: "respondeai", likes:"101.523"},
        {imageProfile: "assets/img/barked.svg", imagePost: "assets/img/dog.svg", imageLike: "assets/img/adorable_animals.svg", likeProfile: "adorable_animals", likes:"200.541"}
    ];

    return (
        <div class="posts">
            
            {profile.map((c) => <Post imageProfile={c.imageProfile} imagePost={c.imagePost} imageLike={c.imageLike} likeProfile={c.likeProfile} likes={c.likes}/>)}

        </div>
    )
}