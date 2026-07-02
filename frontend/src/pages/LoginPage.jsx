import AuthLayout from '../components/AuthLayout.jsx';

export default function LoginPage({ error, onLogin, onRegister }) {
  return (
    <AuthLayout title="Blackwater Vault" subtitle="A secure banking platform for managing accounts, balances, and transactions.">
      <form className="auth-form" onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');

        onLogin({ email });
      }}>
        <label>
          Email
          <input autoComplete="email" defaultValue="sam@example.com" name="email" type="email" />
        </label>

        <label>
          Password
          <input autoComplete="current-password" defaultValue="password" type="password" />
        </label>
        {error && <p className="form-error">{error}</p>}
        <button className="primary-button full-width" type="submit">
          Login
        </button>

        <button className="link-button" onClick={onRegister} type="button">
          Create an account
        </button>
      </form>
    </AuthLayout>
  );
}
