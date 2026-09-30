import { Link } from 'react-router-dom';
import Button from './Button.jsx';

export default function Header({ compact = false }) {
  return (
    <header>
      <Link to="/" aria-label="Rota Mundo, página inicial">Rota Mundo</Link>
      {compact ? (
        <Link to="/">Voltar para o início</Link>
      ) : (
        <>
          <nav aria-label="Navegação principal">
            <a href="#destinos">Destinos</a>{' '}
            <a href="#como-funciona">Como funciona</a>{' '}
            <a href="#sobre">Sobre nós</a>
          </nav>
          <Button to="/login">Entrar</Button>
        </>
      )}
    </header>
  );
}
