import AuthLayout from '../components/AuthLayout.jsx';

export default function RegisterPage({ onLogin, onRegister }) {
  return (
    <AuthLayout title="Create Account" subtitle="Start with a profile, then connect banking logic when your backend is ready.">
      <form className="auth-form" onSubmit={(event) => {
        event.preventDefault();
        onRegister();
      }}>
        <label>
          Name
          <input autoComplete="name" placeholder="Sam" type="text" />
        </label>

        <label>
          Email
          <input autoComplete="email" placeholder="sam@example.com" type="email" />
        </label>

        <label>
          Password
          <input autoComplete="new-password" type="password" />
        </label>

        <button className="primary-button full-width" type="submit">
          Register
        </button>

        <button className="link-button" onClick={onLogin} type="button">
          Back to login
        </button>
      </form>
    </AuthLayout>
  );
}
