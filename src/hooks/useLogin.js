import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/authService.js';

export default function useLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function login(credentials) {
    setError('');
    setLoading(true);
    try {
      const user = await signIn(credentials);
      sessionStorage.setItem('rota-mundo-user', JSON.stringify(user));
      navigate('/');
    } catch (loginError) {
      setError(loginError.message);
    } finally {
      setLoading(false);
    }
  }

  return { error, loading, login };
}
