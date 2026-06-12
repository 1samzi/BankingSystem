export default function AuthLayout({ children, title, subtitle }) {
  return (
    <main className="auth-page">
      <section className="auth-panel">
        <div className="auth-copy">
          <div className="brand-mark large">B</div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        {children}
      </section>
    </main>
  );
}
