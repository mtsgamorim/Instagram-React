function Storie(props){
    return(
    <div class="icone">
        <img src={props.backimage}/>
            <div class="icone-dentro">
                <img src={props.image}/>
            </div>
            <p class="titulo-stories">{props.title}</p>
    </div>
    )
}



export default function Stories(){
    const object = [{
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/hamburguer.png",
        title:"hamburguer"
    },
    {
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/meowed.png",
        title:"meowed"
    },
    {
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/barked.png",
        title:"barked"
    },
    {
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/etzim.png",
        title:"etzim"
    },
    {
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/wawa.png",
        title:"wawawiwa"
    },
    {
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/respondeai1.png",
        title:"respondeai"
    },
    {
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/filomoderna1.png",
        title:"filomoderna"
    },
    {
        backimage: "/imagens/stories_background.jpg",
        image: "/imagens/9gag.png",
        title:"9gag"
    }
]

    return(
        <div class="caixa-stories">
            <ion-icon class= "seta-stories"name="chevron-forward-circle"></ion-icon>
            {object.map(storie => <Storie backimage = {storie.backimage} image = {storie.image} title = {storie.title}/>)}
        </div>
    )
}