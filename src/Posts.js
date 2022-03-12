export default function Posts() {
    return (
        <div class="posts">
            <div class="post">

                <TopoPosts img="assets/img/meowed.svg" user="meowed" ion="ellipsis-horizontal" />

                <ConteudoPosts img="assets/img/gato-telefone.svg" />

                <FundoPosts ion = "heart-outline" ion1 = "chatbubble-outline" ion2 = "paper-plane-outline" ion3 = "bookmark-outline"
                            img = "assets/img/respondeai.svg" usercurtida = "respondeai"  qtecurtidas = "outras 101.523 pessoas"/>
            </div>

            <div class="post">

                <TopoPosts img="assets/img/barked.svg" user="barked" ion="ellipsis-horizontal" />

                <ConteudoPosts img="assets/img/dog.svg" />

                <FundoPosts ion = "heart-outline" ion1 = "chatbubble-outline" ion2 = "paper-plane-outline" ion3 = "bookmark-outline"
                            img = "assets/img/adorable_animals.svg" usercurtida = "adorable_animals"  qtecurtidas = "outras 99.159 pessoas"/>
            </div>
        </div>
    )
}

function TopoPosts(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.img} alt="" />
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name={props.ion}></ion-icon>
            </div>
        </div>
    )
}

function ConteudoPosts(props) {
    return (
        <div class="conteudo">
            <img src={props.img} alt="" />
        </div>
    )
}

function FundoPosts(props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name={props.ion}></ion-icon>
                    <ion-icon name={props.ion1}></ion-icon>
                    <ion-icon name={props.ion2}></ion-icon>
                </div>
                <div>
                    <ion-icon name={props.ion3}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.img} alt="" />
                <div class="texto">
                    Curtido por <strong>{props.usercurtida}</strong> e <strong>{props.qtecurtidas}</strong>
                </div>
            </div>
        </div>
    )
}