import AuthLayout from '../components/AuthLayout.jsx';

export default function LoginPage({ onLogin, onRegister }) {
  return (
    <AuthLayout title="Blackwater Vault" subtitle="A secure banking platform for managing accounts, balances, and transactions.">
      <form className="auth-form" onSubmit={(event) => {
        event.preventDefault();
        onLogin();
      }}>
        <label>
          Email
          <input autoComplete="email" defaultValue="sam@example.com" type="email" />
        </label>

        <label>
          Password
          <input autoComplete="current-password" defaultValue="password" type="password" />
        </label>

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
