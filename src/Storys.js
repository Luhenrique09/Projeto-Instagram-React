import React from 'react';



function Story(props) {

  return (
    <div class="story">
      <div class="imagem">
        <img src={props.image} />
      </div>
      <div class="usuario">
        {props.user}
      </div>
    </div>
  );

}


export default function Storys() {
  const perfil = [
    { user: "9gag", imageUser: "assets/img/9gag.svg" },
    { user: "meowed", imageUser: "assets/img/meowed.svg" },
    { user: "barked", imageUser: "assets/img/barked.svg" },
    { user: "nathanwpylestrangeplanet", imageUser: "assets/img/nathanwpylestrangeplanet.svg" },
    { user: "wawawicomics", imageUser: "assets/img/wawawicomics.svg" },
    { user: "respondeai", imageUser: "assets/img/respondeai.svg" },
    { user: "filomoderna", imageUser: "assets/img/filomoderna.svg" },
    { user: "memeriagourmet", imageUser: "assets/img/memeriagourmet.svg" }

  ];


  const perfilUser = perfil.map((c) => <Story image={c.imageUser} user={c.user} />);


  return (
    <div class="stories">

      {perfilUser}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>

    </div>

  )

}
