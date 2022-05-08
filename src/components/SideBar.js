function Sugestao(props){
    return (
        <div class="sugestao">
            <div class="lado-esquerdo-sugestao">
                <img src={props.img} />
                <div class="texto-sugestao">
                    <h2>{props.name}</h2>
                    <h4 class="cinza">Segue você</h4>
                </div>
            </div>
            <h4 class="azul"><strong>Seguir</strong></h4>
        </div>
    )
}

function Usuario(props) {
    return (
        <div class="topo-sidebar">
            <img src={props.userImage} />
            <div class="texto">
                <h2>{props.userID}</h2>
                <h3 class="cinza">{props.userName}</h3>
            </div>

        </div>
    )
}



export default function SideBar() {
    const sugestoes = [
        {
            img: "/imagens/badvibesmemes.png",
            name: "bad.vibes.memes" 
        },
        {
            img: "/imagens/hamburguer.png",
            name: "Hamburguer" 
        },
        {
            img: "/imagens/respondeai1.png",
            name: "responde ai" 
        },
        {
            img: "/imagens/filomoderna1.png",
            name: "filosofia moderna" 
        },
        {
            img: "/imagens/meowed.png",
            name: "meowed" 
        }
    ];

    return (
        <div class="sidebar">
            <Usuario userImage="/imagens/catanacomics.png" userID="catanacomics" userName="Catana"/>
            <div class="centro-sidebar">
                <h4 class="cinza">Sugestões para você</h4>
                <h4 class="preto"><strong>Ver tudo </strong> </h4>
            </div>
            <div class="sugestoes">
                {sugestoes.map(sugestao => <Sugestao img={sugestao.img} name={sugestao.name} />)}
                
                <div class="legenda-final">
                    <h5>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</h5>
                    <h5>© 2021 INSTAGRAM DO FACEBOOK</h5>
                </div>
            </div>
        </div>
    )
}