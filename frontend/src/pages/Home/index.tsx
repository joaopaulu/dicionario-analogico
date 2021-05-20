import { ReactComponent as MainImage } from 'core/assets/images/avatar.svg';
import ButtonIcon from 'core/components/Buttonicon';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <div className="home-text">
        <h1 className="text-title">Parte Alfabética</h1>
        <h1 className="text-title">
          <span>Parte Analógica</span>
        </h1>
        <p className="text-subtitle">
          Você quer consultar o dicionário que possibilite encontrar palavras
          desconhecidas para o apendizado do Português do Brasil como segunda
          Língua?
        </p>
        <Link to="/" className="start-search-btn">
          <ButtonIcon text="Eu quero" />
        </Link>
      </div>
      <MainImage className="main-image" />
    </div>
  </div>
);

export default Home;
