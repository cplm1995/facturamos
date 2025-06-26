const Sidebar = () => (
  <aside className="bg-light p-3" style={{ minHeight: '100vh', width: '200px' }}>
    <ul className="list-unstyled">
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/clientes">Clientes</a></li>
      {/* Agrega más enlaces */}
    </ul>
  </aside>
);

export default Sidebar;
