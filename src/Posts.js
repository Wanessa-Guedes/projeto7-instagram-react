export default function Posts() {

    const conteudoPosts =[
        {img1:"assets/img/meowed.svg", user:"meowed", ion:"ellipsis-horizontal",
        img2:"assets/img/gato-telefone.svg", ion1:"heart-outline", ion2:"chatbubble-outline", 
        ion3:"paper-plane-outline", ion4:"bookmark-outline", img3:"assets/img/respondeai.svg",
        usercurtida:"respondeai", qtecurtidas:"outras 101.523 pessoas"},

        {img1:"assets/img/barked.svg", user:"barked", ion:"ellipsis-horizontal", 
        img2:"assets/img/dog.svg", ion1:"heart-outline", ion2:"chatbubble-outline", 
        ion3:"paper-plane-outline", ion4:"bookmark-outline", img3:"assets/img/adorable_animals.svg",
        usercurtida:"adorable_animals", qtecurtidas:"outras 99.159 pessoas"}
    ];

    return (
        <div class="posts">

            {
            conteudoPosts.map(conteudoPost => (<ContainerPosts img1={conteudoPost.img1} user={conteudoPost.user} ion={conteudoPost.ion}
                        img2={conteudoPost.img2} ion1={conteudoPost.ion1} ion2={conteudoPost.ion2} ion3={conteudoPost.ion3} ion4={conteudoPost.ion4}
                        img3={conteudoPost.img3} usercurtida={conteudoPost.usercurtida} qtecurtidas={conteudoPost.qtecurtidas}/>))
            
            }
        </div>
    )
}

function ContainerPosts(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.img1} alt="" />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name={props.ion}></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.img2} alt="" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={props.ion1}></ion-icon>
                        <ion-icon name={props.ion2}></ion-icon>
                        <ion-icon name={props.ion3}></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={props.ion4}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.img3} alt="" />
                    <div class="texto">
                        Curtido por <strong>{props.usercurtida}</strong> e <strong>{props.qtecurtidas}</strong>
                    </div>
                </div>
            </div>

        </div>
    )
}
