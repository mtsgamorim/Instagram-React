export default function BottomBar(){
    const icones = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]
    return (
        <div class="barra-inferior">
            {icones.map(icone => <ion-icon name={icone}></ion-icon>)}
        </div>
    )
}