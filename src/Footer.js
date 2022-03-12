export default function Footer() {
    const icones = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    const iconesJSX = icones.map(icone => {
        return <ion-icon name={icone}></ion-icon>
    })
    return (
        <div class="fundo-mobile">
            {iconesJSX}
        </div>
    )
}

