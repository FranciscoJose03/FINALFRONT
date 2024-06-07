import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import{Video} from "../types.ts"
import Fav from "../islands/Fav.tsx";

type Props = {
    videos: Video[];
    userid:string;
}

const VideoList:FunctionComponent<Props> = ({videos, userid}) => {
    return (
        <div>
            {videos.map((video) => {
                <div key = {video.id}>
                    <a href={`/video/${video.id}`}>
                    <img src = {video.thumbnail} alt={video.title}></img>
                    <h3>{video.title}</h3>
                    <p>Release data: {new Date(video.date).toLocaleDateString()}</p>
                    </a>
                    <Fav id = {video.id} fav ={video.fav} userid={userid}></Fav>
                </div>
    })}
        </div>
    )
}

export default VideoList;