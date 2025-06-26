import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
    <Header />
    <div className="d-flex flex-grow-1">
      <Sidebar />
      <main className="p-4 w-100">
        {children}
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
