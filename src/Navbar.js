export default function Navbar() {
    return (
        <div class="navbar">
            <LogoNavbar nomelogo = "logo-instagram" imglogo = "assets/img/logo.png"
                ionlogo = "logo-instagram" imgmobile = "assets/img/logo.png" 
                iconemobile = "paper-plane-outline"/>
        </div>
    )
}

function LogoNavbar(props) {

    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    const iconesJSX = icones.map(icone => {
        return <ion-icon name={icone}></ion-icon>
    })

    return (
        <div class="container">
            <div class="logo">
                <ion-icon name={props.nomelogo}></ion-icon>
                <div class="separador"></div>
                <img src={props.imglogo} alt="" />
            </div>

            <div class="logo-mobile">
                <ion-icon name={props.ionlogo}></ion-icon>
            </div>

            <div class="instagram-mobile">
                <img src={props.imgmobile} alt="" />
            </div>

            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div class="icones">
                {iconesJSX}
            </div>

            <div class="icones-mobile">
                <ion-icon name={props.iconemobile}></ion-icon>
            </div>
        </div>
    )
}