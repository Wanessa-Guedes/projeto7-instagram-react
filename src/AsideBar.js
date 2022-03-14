import Links from "./LinksAsideBar";
import Copyright from "./CopyRightAsideBar";

export default function AsideBar() {

    const sugestoesSeguidores = [
        {img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes",
        razao: "Segue você", seguir: "Seguir"},

        {img: "assets/img/chibirdart.svg", nome: "chibirdart",
        razao:"Segue você", seguir: "Seguir"},

        {img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar",
        razao: "Novo no Instagram", seguir: "Seguir"},

        {img: "assets/img/adorable_animals.svg", nome: "adorable_animals",
        razao: "Segue você", seguir: "Seguir"},

        {img: "assets/img/smallcutecats.svg", nome: "smallcutecats",
        razao: "Segue você", seguir: "Seguir"}
    ];

    return (
        <div class="sidebar">

            <SideBarUsuario img="assets/img/catanacomics.svg" user="catanacomics" username="Catana" />

            <div class="sugestoes">
                <SugestoesTitulo sugestoes="Sugestões para você" opcao="Ver tudo" />
                {
                    sugestoesSeguidores.map(sugestaoSeguidor =>(
                            <SugestoesUsuario img = {sugestaoSeguidor.img} 
                                                nome = {sugestaoSeguidor.nome}
                                                razao = {sugestaoSeguidor.razao} 
                                                seguir = {sugestaoSeguidor.seguir}/>))
                }
            </div>

                <Links />
                <Copyright />
        </div>
    )
}

function SideBarUsuario(props) {
    return (
        <div class="usuario">
            <img src={props.img} alt="" />
            <div class="texto">
                <strong>{props.user}</strong>
                {props.username}
            </div>
        </div>
    )
}

function SugestoesTitulo(props) {
    return (
        <div class="titulo">
            {props.sugestoes}
            <div>{props.opcao}</div>
        </div>
    )
}

function SugestoesUsuario(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt="" />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">{props.seguir}</div>
        </div>
    )
}

