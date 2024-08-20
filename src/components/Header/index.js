import "./header.css"
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header>
            <Link className="logo" to="/">PrimeFlix</Link>
            <button><Link className="favoritos" to="/favoritos">Meus filmes</Link></button>
        </header>
    )
}

export default Header;