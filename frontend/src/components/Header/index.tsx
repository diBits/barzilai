import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="barzilai-logo-container">
                <img src={logo} alt="Logo do Barzilai"/>
                    <h1>Barzilai</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/di.yauh/">@barzilai</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;
