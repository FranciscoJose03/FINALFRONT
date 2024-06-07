import { FunctionComponent } from "preact";
import Logout from "../islands/Logout.tsx";

type Props ={
    userName: string;
}

const Header: FunctionComponent<Props> = ({userName}) => {
    return(
        <header>
            <div> 
                <span>{userName}</span> <Logout/>
            </div>
        </header>
    )
}
export default Header;