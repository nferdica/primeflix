import { useEffect, useState } from "react";
import api from '../../services/api'

// movie/now_playing?api_key=ca38a0df1e260ab351f0bb8e4802412c

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: "ca38a0df1e260ab351f0bb8e4802412c",
                    language: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response)
        }

        loadFilmes();

    }, [])

    return(
        <div>
            <h1>Bem vindo!</h1>
        </div>
    )
}

export default Home;