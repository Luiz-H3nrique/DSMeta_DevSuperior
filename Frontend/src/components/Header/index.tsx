
import logo from'../../assents/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.linkedin.com/in/luiz-henrique-1759181a0/">Luiz Henrique</a>
                    </p>
            </div>

        </header>
    )
}

export default Header
