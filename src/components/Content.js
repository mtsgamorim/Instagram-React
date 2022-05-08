import Stories from "./Stories";
import Posts from "./Posts";
import BottomBar from "./BottomBar";
import SideBar from "./SideBar";


export default function Content(){
    return(
        <div class="conteudo">
            <div class="lado-esquerdo">
                <Stories />
                <Posts />
                <BottomBar />   
            </div>
            <SideBar />
            
        </div>
    )
}