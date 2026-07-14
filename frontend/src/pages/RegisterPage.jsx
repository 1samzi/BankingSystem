import AuthLayout from '../components/AuthLayout.jsx';

export default function RegisterPage({ error, isSubmitting, onLogin, onRegister }) {
  return (
    <AuthLayout title="Create Account" subtitle="Start with a profile, then connect banking logic when your backend is ready.">
      <form className="auth-form" onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        onRegister({ email, password });
      }}>
        <label>
          Name
          <input autoComplete="name" name="name" placeholder="Sam" type="text" />
        </label>

        <label>
          Email
          <input autoComplete="email" name="email" placeholder="sam@example.com" required type="email" />
        </label>

        <label>
          Password
          <input autoComplete="new-password" name="password" type="password" />
        </label>

        {error && <p className="form-error">{error}</p>}

        <button className="primary-button full-width" disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>

        <button className="link-button" onClick={onLogin} type="button">
          Back to login
        </button>
      </form>
    </AuthLayout>
  );
}
