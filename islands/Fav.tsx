import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type Props = {
    id: string;
    fav: boolean;
    userid: string;
}

const Fav:FunctionComponent<Props> = ({id, fav, userid}) => {
    const [favorite, setFavorite] = useState<boolean>(fav)
    const toogleFav = async (userid: string, id:string) =>  {
        const response = await fetch(`https://videoapp-api.deno.dev/fav/${userid}/${id}`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"}
        })
        if(response.status === 200){
            setFavorite(!fav)
        }else {
            console.log("Fav toogle error")
        }
    }
    return(
        <button onClick={() => toogleFav(userid, id)}>{favorite? "Remove from Favorities" : "Add to Favotities"}</button>
    )
}

export default Fav
