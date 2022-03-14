export default function Posts() {

    const conteudoPosts =[
        {imgUser:"assets/img/meowed.svg", user:"meowed", ionDots:"ellipsis-horizontal",
        postUser:"assets/img/gato-telefone.svg", ionSave:"bookmark-outline", imgUserLike:"assets/img/respondeai.svg",
        userLike:"respondeai", qteLike:"outras 101.523 pessoas"},

        {imgUser:"assets/img/barked.svg", user:"barked", ionDots:"ellipsis-horizontal", 
        postUser:"assets/img/dog.svg", ionSave:"bookmark-outline", imgUserLike:"assets/img/adorable_animals.svg",
        userLike:"adorable_animals", qteLike:"outras 99.159 pessoas"}
    ];

    return (
        <div class="posts">

            {
            conteudoPosts.map(conteudoPost => (<ContainerPosts imgUser={conteudoPost.imgUser} user={conteudoPost.user} ionDots={conteudoPost.ionDots}
                        postUser={conteudoPost.postUser} ionSave={conteudoPost.ionSave}
                        imgUserLike={conteudoPost.imgUserLike} userLike={conteudoPost.userLike} qteLike={conteudoPost.qteLike}/>))
            
            }
        </div>
    )
}

function ContainerPosts(props) {
    
    const icones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
    const iconesJSX = icones.map(icone => {
        return <ion-icon name={icone}></ion-icon>
    })

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser} alt="" />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name={props.ionDots}></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postUser} alt="" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {iconesJSX}
                    </div>
                    <div>
                        <ion-icon name={props.ionSave}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgUserLike} alt="" />
                    <div class="texto">
                        Curtido por <strong>{props.userLike}</strong> e <strong>{props.qteLike}</strong>
                    </div>
                </div>
            </div>

        </div>
    )
}
