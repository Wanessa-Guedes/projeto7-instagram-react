export default function Stories() {
    return (
        <div class="stories">

            <ConteudoStories img = "assets/img/9gag.svg"  userStorie = "9gag"/>

            <ConteudoStories img = "assets/img/meowed.svg"  userStorie = "meowed"/>

            <ConteudoStories img = "assets/img/barked.svg"  userStorie = "barked"/>

            <ConteudoStories img = "assets/img/nathanwpylestrangeplanet.svg"  userStorie = "nathanwpylestrangeplanet"/> 

            <ConteudoStories img = "assets/img/wawawicomics.svg"  userStorie = "wawawicomics"/> 

            <ConteudoStories img = "assets/img/respondeai.svg"  userStorie = "respondeai"/>

            <ConteudoStories img = "assets/img/filomoderna.svg"  userStorie = "filomoderna"/>

            <ConteudoStories img = "assets/img/memeriagourmet.svg"  userStorie = "memeriagourmet"/>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function ConteudoStories(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt="" />
            </div>
            <div class="usuario">
                {props.userStorie}
            </div>
        </div>
    )
}

