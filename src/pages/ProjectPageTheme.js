
import { useParams } from "react-router-dom"

export default function ProjectPageTheme({data, theme}){
    let { path } = useParams();

    const matchItem = data.filter(item => item.path === path);

    return(
        <main>
            <img src={matchItem[0].imgURL} alt={matchItem[0].title}/>
        </main>
    )
}