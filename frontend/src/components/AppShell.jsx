const navItems = [
  { page: 'home', label: 'Home' },
  { page: 'transactions', label: 'Transactions' },
  { page: 'account', label: 'Account' },
  { page: 'editAccount', label: 'Edit' },
];

export default function AppShell({ children, currentPage, onNavigate, onLogout, profile }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">B</div>
          <div>
            <strong>Banking System</strong>
            <span>Personal banking</span>
          </div>
        </div>

        <nav className="nav-list" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              className={currentPage === item.page ? 'nav-button active' : 'nav-button'}
              key={item.page}
              onClick={() => onNavigate(item.page)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h1>{profile.name}</h1>
          </div>

          <div className="profile-actions">
            <div className="avatar" aria-label={`${profile.name} profile`}>
              {profile.name.charAt(0)}
            </div>
            <button className="ghost-button" onClick={onLogout} type="button">
              Logout
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
