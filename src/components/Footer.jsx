import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="sobre">
      <Link to="/">Rota Mundo</Link>
      <p>Seu próximo capítulo começa longe — e com a gente.</p>
      <span>© 2026 Rota Mundo · Projeto acadêmico de TCC</span>
    </footer>
  );
}
