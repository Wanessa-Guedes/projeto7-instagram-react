import Setinha from "./Setinha";
export default function Stories() {

    const conteudosStories= [
        {img: "assets/img/9gag.svg",  userStorie: "9gag"},
        {img: "assets/img/meowed.svg",  userStorie: "meowed"},
        {img: "assets/img/barked.svg",  userStorie: "barked"},
        {img: "assets/img/nathanwpylestrangeplanet.svg",  userStorie: "nathanwpylestrangeplanet"},
        {img: "assets/img/wawawicomics.svg",  userStorie: "wawawicomics"},
        {img: "assets/img/respondeai.svg",  userStorie: "respondeai"},
        {img: "assets/img/filomoderna.svg",  userStorie: "filomoderna"},
        {img:  "assets/img/memeriagourmet.svg",  userStorie: "memeriagourmet"}
    ];

    return (
        <div class="stories">

            {
                conteudosStories.map(conteudo => <ConteudoStories img = {conteudo.img}  userStorie = {conteudo.userStorie}/>)
            }
            <Setinha />
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

