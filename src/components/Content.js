import Stories from "./Stories";
import Posts from "./Posts";


export default function Content(){
    return(
        <div class="conteudo">
            <div class="lado-esquerdo">
                <Stories />
                <Posts />
                
                
            </div>
            
        </div>
    )
}