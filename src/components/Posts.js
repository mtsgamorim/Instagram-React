function Post(props) {
    const icones = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    return (
        <div class="post">
            <div class="topo-post">
                <div>
                    <img src={props.imageUser}/>
                    <p>{props.user}</p>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <img src={props.imgPost}/>
            <div class="post-icones">
                <div class="post-icones-esquerda">
                    {icones.map(icone => <ion-icon name={icone}></ion-icon>)}
                </div>
                <div class="post-icones-direita">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class="baixo-post">
                <img src={props.userLikedImg}/>
                <p>Curtido por <strong>{props.userLiked}</strong> e <strong>outras {props.totalLikes} pessoas</strong></p>
            </div>
        </div>
    )
}


export default function Posts() {
    const posts = [
        {
            imageUser: "/imagens/meowed.png" ,
            user: "meowed",
            imgPost: "/imagens/gato-telefone.png",
            userLikedImg: "/imagens/respondeai2.png",
            userLiked: "respondeai",
            totalLikes: "101.523" 
        },
        {
            imageUser: "/imagens/barked.png" ,
            user: "barked",
            imgPost: "/imagens/dog.png",
            userLikedImg: "/imagens/catanacomics.png",
            userLiked: "catanacomics",
            totalLikes: "99.523" 
        },
        {
            imageUser: "/imagens/etzim.png" ,
            user: "etzim",
            imgPost: "/imagens/etzin-post.png",
            userLikedImg: "/imagens/meowed.png",
            userLiked: "meowed",
            totalLikes: "5" 
        }
    ]

    return(
        <div>
            {posts.map(post => <Post imageUser={post.imageUser} user={post.user} imgPost={post.imgPost} userLikedImg = {post.userLikedImg} userLiked={post.userLiked} totalLikes={post.totalLikes} />)}
        </div>
    )
}