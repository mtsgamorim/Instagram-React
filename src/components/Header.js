export default function Header() {
    const namesIcon = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    

    return (
        <div class="borda-topo">
            <div class="topo">
                <div class="topo-lado-esquerdo">
                    <ion-icon class="icone-topo" name="logo-instagram"></ion-icon>
                    <div class="mini-borda"></div>
                    <img src="/imagens/logo.png" alt="Logotipo"/>
                </div>
                <div class="barra-pesquisa">
                    <p class="pesquisa">Pesquisar</p>
                </div>
                <div class="topo-lado-direito">
                    {namesIcon.map(name => <ion-icon class="icone-topo" name={name}></ion-icon>)}
                </div>
            </div>
        </div>
    )
}