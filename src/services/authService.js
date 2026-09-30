// Autenticação demonstrativa para a primeira entrega; não substitui um backend.
export async function signIn({ email = '', password }) {
  if (!password) {
    throw new Error('Informe sua senha para continuar.');
  }

  const normalizedEmail = email.trim();
  return {
    name: normalizedEmail ? normalizedEmail.split('@')[0] : '',
    email: normalizedEmail,
  };
}
