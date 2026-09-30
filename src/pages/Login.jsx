import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Header from '../components/Header.jsx';
import useLogin from '../hooks/useLogin.js';

export default function Login() {
  const { error, loading, login } = useLogin();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    login({ email: formData.get('email'), password: formData.get('password') });
  }

  return (
    <>
      <Header compact />
      <main>
        <section>
          <h1>Entre na sua conta</h1>
          <p>Continue planejando a próxima grande história.</p>
          <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail (opcional)</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" />
              <br />
              <label htmlFor="password">Senha</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required minLength="4" />
              {error && <p className="form-error" role="alert">{error}</p>}
              <br />
              <Button type="submit" disabled={loading}>{loading ? 'Entrando…' : 'Entrar'}</Button>
          </form>
          <p>Acesso demonstrativo: use qualquer e-mail válido e uma senha com 4 ou mais caracteres.</p>
          <p><Link to="/">Voltar para o início</Link></p>
        </section>
      </main>
    </>
  );
}
